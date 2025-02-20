import React from "react";
import NextHead from "next/head";
import { site_cfg } from "@/reusable/variables/site";

export const Head = () => {
  return (
    <NextHead>
      <title>{site_cfg.title}</title>
      <meta key="title" content={site_cfg.title} property="og:title" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/logo/logo_white_s.png" rel="icon" />
    </NextHead>
  );
};
