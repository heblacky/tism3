import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";

export const Head = () => {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      {/* Comprehensive favicon configuration to override all defaults */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.png" />
      <link rel="icon" href="/images/logo.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/images/logo.png" />
      
      <link rel="canonical" href={siteConfig.url} />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteConfig.url}/images/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@onlydownsxyz_" />
      <meta name="twitter:domain" content={siteConfig.domain} />
    </NextHead>
  );
};
