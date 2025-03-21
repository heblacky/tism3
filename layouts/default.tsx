"use client";

import Link from "next/link";
import { Head } from "./head";
import dynamic from 'next/dynamic';
import { siteConfig } from "@/config/site";
import { TwitterIcon, TikTokIcon, TelegramIcon } from "@/components/icons";
import Image from "next/image";

// Client components with hooks should be imported using dynamic with ssr: false
const ClientSideNav = dynamic(
  () => import('../components/client-side-nav'),
  { ssr: false }
);

// Background elements component with only the blue gradients
const BackgroundElements = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-0 left-0 w-full h-full">
      {/* Original gradients */}
      <div className="absolute top-[5%] right-[5%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px]" />
    </div>
  </div>
);

// Footer component without hooks
const Footer = () => (
  <footer className="border-t border-[#004cff]/10 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-black font-bold text-xl">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="OnlyDowns Logo"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span>OnlyDowns</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
          <div className="text-gray-600 text-sm mr-6">
            &copy; {new Date().getFullYear()} OnlyDowns. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href={siteConfig.links.tiktok} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
              <TikTokIcon className="h-5 w-5" />
            </Link>
            <Link href={siteConfig.links.telegram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
              <TelegramIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <BackgroundElements />
      
      {/* Navbar - dynamically imported with no SSR */}
      <ClientSideNav />
      
      {/* Main content */}
      <main className="flex-grow mt-16">{children}</main>
      
      <Footer />
    </div>
  );
}
