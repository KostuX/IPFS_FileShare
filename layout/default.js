"use client";
import React from "react";
import { Providers } from "./providers";
import Nav from "@/reusable/navbar/navbar";
export default function DefaultLayout({ children, session }) {
  return (
    <Providers>
      <Nav />
      {children}
    </Providers>
  );
}
