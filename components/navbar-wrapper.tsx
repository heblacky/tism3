"use client";

import dynamic from 'next/dynamic';
import ServerNavbar from './server-navbar';

// Dynamically import the client navbar with no SSR
const ClientNavbar = dynamic(() => import('./client-navbar'), {
  ssr: false,
});

export function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // Use client-side detection to determine if we're in a browser
  const isBrowser = typeof window !== 'undefined';
  
  // In the browser, use the ClientNavbar. Otherwise, use the ServerNavbar
  return isBrowser 
    ? <ClientNavbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} /> 
    : <ServerNavbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />;
} 