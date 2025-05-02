// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;

  const publicRoutes = ["/", "/signin", "/signup", "/chatbot", "/voice-agent", "/llm"];
  const knownRoutes = ["/profile", "/settings", "/voice-agent", "/chatbot-dashboard", "/chatbot-products", 
    "/admin"];

  const isPublic = publicRoutes.includes(pathname);
  const isKnown = knownRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );


  // Check if the pathname matches a dynamic public route like "/embed/{botId}"
  const dynamicPublicRoutePattern = /^\/embed\/[^/]+$/;
  if (dynamicPublicRoutePattern.test(pathname)) {
    return;
  }

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
    return NextResponse.redirect(new URL("/signin", request.url));
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
