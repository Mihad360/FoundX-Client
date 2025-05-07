import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type TRole = keyof typeof RoleBasedRoutes;
const AuthRoutes = ["/login", "/register"];
const RoleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const user = undefined;
  const { pathname } = request.nextUrl;
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (user?.role && RoleBasedRoutes[user?.role as TRole]) {
    const routes = RoleBasedRoutes[user?.role as TRole];
    console.log(routes);
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/admin", "/login", "/register"],
};
