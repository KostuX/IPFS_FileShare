"server only";
import { SignJWT, jwtVerify } from "jose";

import { NextRequest, NextResponse } from "next/server";

let secretKey = "process.env.SECRET_KEY";
if (!secretKey) {
  throw new Error("SECRET_KEY environment variable is not set");
}
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  let singJwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7 d")
    .sign(key);
  return singJwt;
}

export async function decrypt(data) {
  const { payload } = await jwtVerify(data, key, { algorithms: ["HS256"] });
  return payload;
}

export async function login(data) {
  let user = { id: data.id, key: data.key };
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ user, expires });
}
