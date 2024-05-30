import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get('accessId');

  if (!jwt) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/make-boilerplate/:path*", "/my-boilerplate"]
};


