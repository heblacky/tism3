"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import {
  TwitterIcon,
  TikTokIcon,
  TelegramIcon,
  Logo,
} from "@/components/icons";

export default function ClientNavbar({
  mobileMenuOpen,
  setMobileMenuOpen
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className="w-full shadow-sm border-b border-gray-100" style={{
      background: "linear-gradient(90deg, #004cff 0%, #5cd3ff 100%)",
    }}>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        {/* Brand/Logo */}
        <div className="flex items-center gap-3">
          <Link className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-white">Only Downs</p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 justify-center">
          {siteConfig.navItems.map((item) => (
            <div key={item.href}>
              <Link
                className="text-white hover:text-white/80 font-medium text-sm transition-colors"
                href={item.href}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden sm:flex items-center gap-4">
          <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
            <TwitterIcon className="text-white hover:text-white/80 transition-colors" />
          </a>
          <a href={siteConfig.links.tiktok} target="_blank" rel="noopener noreferrer" title="TikTok">
            <TikTokIcon className="text-white hover:text-white/80 transition-colors" />
          </a>
          <a href={siteConfig.links.telegram} target="_blank" rel="noopener noreferrer" title="Telegram">
            <TelegramIcon className="text-white hover:text-white/80 transition-colors" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-white/80 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-blue-400/30 py-4" style={{
          background: "linear-gradient(90deg, #004cff 0%, #5cd3ff 100%)",
        }}>
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {siteConfig.navMenuItems.map((item, index) => (
              <Link
                key={`${item}-${index}`}
                href={item.href}
                className="text-white hover:text-white/80 font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Social Icons in Mobile Menu */}
            <div className="flex gap-4 mt-2 pt-2 border-t border-blue-400/30">
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
                <TwitterIcon className="text-white hover:text-white/80 transition-colors" />
              </a>
              <a href={siteConfig.links.tiktok} target="_blank" rel="noopener noreferrer" title="TikTok">
                <TikTokIcon className="text-white hover:text-white/80 transition-colors" />
              </a>
              <a href={siteConfig.links.telegram} target="_blank" rel="noopener noreferrer" title="Telegram">
                <TelegramIcon className="text-white hover:text-white/80 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 