// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

const ADMIN_ROLES = new Set([
  "Super Admin",
  "super admin",
  "Billing Admin",
  "Product Admin",
  "Support Admin",
]);
const PUBLIC_ROUTES = new Set([
  "/",
  "/demo",
  "/payment",
  "/payment/paypal",
  "/auth/signin",
  "/auth/signup",
  "/activate-trial",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/chatbot",
  "/voice-agent",
  "/chatllm",
  "/details/privacy-policy",
  "/details/about-us",
  "/details/careers",
  "/details/chatbot",
  "/details/faq",
  "/details/llm",
  "/details/terms&condition",
  "/details/voice-agent",
  "/details/contact-us",
  "/details/about-us",
  "/details/refund-and-cancellation-policy",
  "/details/gdpr",
  "/details/code-of-conduct",
  "/details/disclaimer-and-liability",
  "/types/payment",
]);

const KNOWN_ROUTES = new RegExp(
  "^(/profile|/settings|/invite-user|/accept-invite|/voice-agent|/chatbot-dashboard|/types/payment" +
  "/chatbot-products|/admin|/support|/gateways|/topup|/activate-trial|/credits-and-plans/downgrade)(/.*)?$"
);

const DYNAMIC_PUBLIC_ROUTE = /^\/embed\/[^/]+$/;

type PermissionCache = {
  [role: string]: {
    permissions: string[];
    timestamp: number;
  };
};

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const permissionCache: PermissionCache = {};

// Updated fetchPermissions with caching
async function fetchPermissions(
  accessToken: string,
  role: string
): Promise<string[]> {
  try {
    // Check cache first
    const cached = permissionCache[role];
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.permissions;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/roles_permissions`,
      {
        headers: {
          Cookie: `access_token=${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return cached?.permissions || [];
    }

    const { permissions } = await response.json();
    permissionCache[role] = {
      permissions: permissions || [],
      timestamp: Date.now(),
    };


    return permissions || [];
  } catch (error) {
    return permissionCache[role]?.permissions || [];
  }
}

// Rest of the middleware remains similar with this updated admin check section:
async function handleAdminRoutes(
  request: NextRequest,
  accessToken: string,
  pathname: string,
  role: string | null
) {
  if (!role || !ADMIN_ROLES.has(role)) {
    return NextResponse.redirect(
      new URL("/chatbot-dashboard/main", request.url)
    );
  }

  try {
    const permissions = await fetchPermissions(accessToken, role);
    const hasAccess = permissions.some(
      (p) => p === "*" || pathname.endsWith(p)
    );

    if (!hasAccess) {
      return NextResponse.redirect(
        new URL("/chatbot-dashboard/main", request.url)
      );
    }
  } catch (error) {
    return NextResponse.redirect(
      new URL("/chatbot-dashboard/main", request.url)
    );
  }
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("access_token")?.value;

  if (DYNAMIC_PUBLIC_ROUTE.test(pathname)) return NextResponse.next();
  if (PUBLIC_ROUTES.has(pathname)) return NextResponse.next();
  //   {
  //   return accessToken
  //     ? NextResponse.redirect(new URL("/chatbot-dashboard/main", request.url))
  //     : NextResponse.next();
  // }

  // Redirect unauthenticated users
  if (!accessToken) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // Validate JWT and extract role
  let role: string | null = null;
  try {
    const decoded = jwtDecode<{ role?: string; exp?: number }>(accessToken);
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      throw new Error("Token expired");
    }
    role = decoded.role || null;
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // Admin route protection
  if (pathname.startsWith("/admin")) {
    const adminResponse = await handleAdminRoutes(
      request,
      accessToken,
      pathname,
      role
    );
    if (adminResponse) return adminResponse;
  }

  // Validate known routes
  if (!KNOWN_ROUTES.test(pathname)) {
    return NextResponse.redirect(
      new URL("/chatbot-dashboard/main", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|images|api|uploads|webhook|embed.js).*)"],
};
