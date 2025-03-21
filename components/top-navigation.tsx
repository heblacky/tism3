"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export const TopNavigation = () => {
  return (
    <div className="w-full bg-[#004cff] text-white py-2">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex space-x-6">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex space-x-4 ml-auto">
            <a 
              href={siteConfig.links.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/90 hover:text-white text-sm transition-colors"
            >
              Twitter
            </a>
            <a 
              href={siteConfig.links.tiktok} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/90 hover:text-white text-sm transition-colors"
            >
              TikTok
            </a>
            <a 
              href={siteConfig.links.telegram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/90 hover:text-white text-sm transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}; 