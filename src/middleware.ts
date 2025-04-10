import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { jwtDecode } from "jwt-decode";

export default function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  // If no token, redirect to signin
  if (!accessToken) {
    // return NextResponse.redirect(new URL("/signin", request.url));
  }

  try {
    // const decoded: any = jwtDecode(accessToken);

    // // Optional: Check if token is expired
    // if (decoded.exp * 1000 < Date.now()) {
    //   return NextResponse.redirect(new URL("/signin", request.url));
    // }
  } catch (error) {
    // If token is invalid or decoding fails
    // return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
    // matcher: ["/home", "/home/:path*", "/profile/:path*"]
  };
