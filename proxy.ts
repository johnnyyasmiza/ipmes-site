import { NextResponse, type NextRequest } from "next/server";

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 180;
const MAX_API_REQUESTS_PER_WINDOW = 60;
const buckets = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "anonymous";
}

function isRateLimited(key: string, limit: number) {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > limit;
}

function isMalformedPath(pathname: string) {
  try {
    decodeURIComponent(pathname);
  } catch {
    return true;
  }

  return pathname.includes("\\") || pathname.includes("\0") || /(?:^|\/)\.\.(?:\/|$)/.test(pathname);
}

function isPhotoAdminAllowed() {
  return process.env.NODE_ENV !== "production";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isMalformedPath(pathname)) {
    return new NextResponse("Bad request", { status: 400 });
  }

  const clientKey = getClientKey(request);
  const isApiRequest = pathname.startsWith("/api/");
  const limit = isApiRequest ? MAX_API_REQUESTS_PER_WINDOW : MAX_REQUESTS_PER_WINDOW;

  if (isRateLimited(`${clientKey}:${isApiRequest ? "api" : "site"}`, limit)) {
    return new NextResponse("Too many requests", { status: 429 });
  }

  if (pathname.startsWith("/admin") && !isPhotoAdminAllowed()) {
    return new NextResponse("Not found", { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|webp|gif|svg|ico|mp4|mov|css|js|map)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
