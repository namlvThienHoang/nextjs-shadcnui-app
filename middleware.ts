import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware to check for auth token in cookies
export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken'); // Access the token from cookies

  // Check if the token exists
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url)); // Redirect to login if not authenticated
  }

  // Allow request to continue if token exists
  return NextResponse.next();
}

// Define which routes this middleware should apply to
export const config = {
  matcher: ['/dashboard/:path*', '/shop/:path*'], // Apply to specific routes
};
