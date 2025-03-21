"use client";

import dynamic from "next/dynamic";

// Dynamically import client component
const ClientNavbar = dynamic(() => import("./client-navbar"), {
  ssr: false,
});

export default function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return <ClientNavbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />;
}
