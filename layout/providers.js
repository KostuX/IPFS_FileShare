// app/providers.tsx
"use client";
import React from "react";
import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
