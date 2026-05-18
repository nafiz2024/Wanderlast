import { headers } from "next/headers";
import { auth } from "./lib/auth";
import { NextResponse } from "next/server";

export const proxy = async (request) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/signin', request.url));
};

export const config = {
  matcher: ['/add-destination', '/my-bookings', '/destination/:path'],
};