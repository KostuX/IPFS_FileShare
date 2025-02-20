import { ws_connection } from "@/reusable/variables/connection";
import { LRUCache } from "lru-cache";
import { NextResponse } from "next/server";
import { guest } from "@/helper/guestUser";
import { cookieExpires } from "@/reusable/variables/cookie";
import { encrypt } from "@/utils/server/jwt/jwtLib";
import nookies from "nookies";

const rateLimit = 10; // Maximum number of requests
const timeWindow = 10000; // Time window in milliseconds (1 second)

const options = {
  max: 500, // Maximum number of items in the cache
  ttl: timeWindow, // Time to live for each item in milliseconds
};

const rateLimiter = new LRUCache(options);

export async function POST(req) {
  const { data } = await req.json();
  const ip =
    req.headers.get("x-forwarded-for") || req.headers.get("remote-addr");

  if (!ip) {
    return new Response(
      JSON.stringify({ ok: false, data: "IP address not found" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const currentTime = Date.now();
  const requestCount = rateLimiter.get(ip) || {
    count: 0,
    lastRequestTime: currentTime,
  };

  if (currentTime - requestCount.lastRequestTime < timeWindow) {
    if (requestCount.count >= rateLimit) {
      return new Response(
        JSON.stringify({ ok: false, data: "Rate limit exceeded" }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    requestCount.count += 1;
  } else {
    requestCount.count = 1;
    requestCount.lastRequestTime = currentTime;
  }

  rateLimiter.set(ip, requestCount);

  // =======================================================================================   END of rate limit
  if (ws_connection) {
    let res = NextResponse.json({ ok: true, data: ws_connection });

    let user = data?.user || guest;
    const expires = cookieExpires;
    const session = await encrypt({ user, expires });

    res.cookies.set("user", session, { expires, httpOnly: false });

    return res;
  }

  return new Response(
    JSON.stringify({ ok: false, data: "WebSocket connection not found" }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function GET() {
  return new Response(
    JSON.stringify({ ok: false, data: "Method not allowed" }),
    {
      status: 405,
      headers: { "Content-Type": "application/json" },
    }
  );
}
