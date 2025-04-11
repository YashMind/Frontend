// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;

  const publicRoutes = ["/", "/signin", "signup"];
  const knownRoutes = ["/home","/chatbot", "/profile", "/settings"];

  const isPublic = publicRoutes.includes(pathname);
  const isKnown = knownRoutes.some(route =>
    pathname === route || pathname.startsWith(route + "/")
  );

  // User is visiting /signin
  if (isPublic) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
    return NextResponse.next(); // Allow
  }

  // Protected routes without token
  if (!accessToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // Authenticated, but unknown route
  if (!isKnown) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // Authenticated + known route
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|images|api).*)"]
};
