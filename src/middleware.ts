// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;

  const publicRoutes = [
    "/",
    "/signin",
    "signup",
    "/chatbot",
    "/chatbot-dashboard",
    "/chatbot-dashboard/overview",
    "/chatbot-dashboard/chat-leads",
    "/chatbot-dashboard/chat-history",
    "/chatbot-products",
    "/admin",
    "/admin/user-management",
    "/admin/subscription-plans",
    "/admin/token-analytics",
    "/admin/users-roles",
    "/admin/enterprise-clients",
    "/admin/product-monitoring",
    "/admin/billing-settings",
    "/admin/support&communication",
    "/admin/logs&activity",
  ];
  const knownRoutes = [
    "/chatbot",
    "/profile",
    "/settings",
    "/voice-agent",
    "/chatbot-dashboard",
  ];

  const isPublic = publicRoutes.includes(pathname);
  const isKnown = knownRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  // User is visiting /signin

  if (isPublic) {
    if (accessToken) {
      return NextResponse.redirect(
        new URL("/chatbot-dashboard/main", request.url)
      );
    }
    return NextResponse.next(); // Allow
  }

  // Protected routes without token
  if (!accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Authenticated, but unknown route
  if (!isKnown) {
    return NextResponse.redirect(
      new URL("/chatbot-dashboard/main", request.url)
    );
  }

  // Authenticated + known route
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|images|api).*)"],
};
