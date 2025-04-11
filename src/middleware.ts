import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;
  const isAuthPage = pathname === "/signin";
  const isProtectedRoute = ["/", "/home", "/profile"].some((route) =>
    pathname === route || pathname.startsWith(`${route}/`)
  );

  // 🚫 Token is missing
  if (!accessToken) {
    if (isProtectedRoute) {
      // Not authenticated + trying to access protected route
      return NextResponse.redirect(new URL("/signin", request.url));
    }
    return NextResponse.next(); // Public page
  }

  // ✅ Token is present
  if (isAuthPage) {
    // Already logged in, prevent going to /signin
    return NextResponse.redirect(new URL("/", request.url));
  }


  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
