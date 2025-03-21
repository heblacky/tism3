"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  TikTokIcon,
  TwitterIcon,
  TelegramIcon,
} from "@/components/icons";

export default function ServerNavbar({
  mobileMenuOpen,
  setMobileMenuOpen
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="w-full" 
        style={{
          background: "linear-gradient(90deg, #004cff 0%, #5cd3ff 100%)",
        }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex space-x-6">
              {/* Social icons in top navigation bar */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                href={siteConfig.links.twitter}
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                href={siteConfig.links.tiktok}
              >
                <TikTokIcon />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                href={siteConfig.links.telegram}
              >
                <TelegramIcon />
              </a>
            </div>
            <div className="flex space-x-4 ml-auto">
              {/* Text links moved to right side of top nav */}
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-white/80 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-2xl font-bold text-black">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff]">
                OnlyDowns
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black hover:text-gray-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-3">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black hover:text-gray-600 font-medium py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center space-x-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#004cff] transition-colors"
                href={siteConfig.links.twitter}
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#004cff] transition-colors"
                href={siteConfig.links.tiktok}
              >
                <TikTokIcon />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#004cff] transition-colors"
                href={siteConfig.links.telegram}
              >
                <TelegramIcon />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 