import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getSession } from "@/api/session";
import { APP_ROUTES, AUTH_ROUTES, PROTECTED_ROUTES } from "@/constants/routes";

export default async function (request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAuthRoute = AUTH_ROUTES.includes(path);
  const isProtectedRoute = PROTECTED_ROUTES.includes(path);

  const session = await getSession();

  if (isProtectedRoute && !session?.accessToken && !session?.refreshToken) {
    return NextResponse.redirect(new URL(APP_ROUTES.LOGIN, request.nextUrl));
  }

  if (isAuthRoute && session?.accessToken && session?.refreshToken) {
    return NextResponse.redirect(new URL(APP_ROUTES.HOME, request.nextUrl));
  }

  if (
    !isProtectedRoute &&
    session?.accessToken &&
    session?.refreshToken &&
    !request.nextUrl.pathname.startsWith(APP_ROUTES.HOME)
  ) {
    return NextResponse.redirect(new URL(APP_ROUTES.HOME, request.nextUrl));
  }

  return NextResponse.next();
}
