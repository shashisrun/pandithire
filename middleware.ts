import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateLang } from "./lib/i18n/types";
import { defaultLang } from "./lib/i18n/types";

const PUBLIC_FILES = /\.(.*)$/;
const API_ROUTES = /^\/api\//;
const ADMIN_ROUTES = /^\/admin\//;
const NEXT_INTERNAL = /^\/_next\//;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    PUBLIC_FILES.test(pathname) ||
    API_ROUTES.test(pathname) ||
    ADMIN_ROUTES.test(pathname) ||
    NEXT_INTERNAL.test(pathname) ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && validateLang(segments[0])) {
    return NextResponse.next();
  }

  const lang = request.cookies.get("lang")?.value;
  const preferredLang = lang && validateLang(lang) ? lang : defaultLang;

  const newUrl = new URL(`/${preferredLang}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|admin|sitemap.xml|robots.txt|favicon.ico).*)"],
};
