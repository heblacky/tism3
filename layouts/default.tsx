import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#0A0A0A]">
      {/* HeroUI-style background */}
      <div className="fixed inset-0 bg-[#0A0A0A] overflow-hidden">
        {/* Blue gradient bubble */}
        <div 
          className="absolute -left-[30%] -top-[30%] w-[80%] h-[80%] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)",
            transform: "rotate(-45deg)",
            filter: "blur(40px)",
          }}
        />
        
        {/* Purple gradient bubble */}
        <div 
          className="absolute -right-[30%] -bottom-[30%] w-[80%] h-[80%] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 25%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)",
            transform: "rotate(-45deg)",
            filter: "blur(40px)",
          }}
        />
        
        {/* Looper pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          }}
        />
      </div>
      
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-grow pt-16 relative z-10">
        {children}
      </main>
      <footer className="w-full fixed bottom-0 left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-sm border-t border-[#1A1A1A] py-4 z-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="flex items-center gap-4 text-sm text-default-600">
            <Link
              isExternal
              className="text-[#71717A] hover:text-white transition-colors"
              href="https://github.com/paydexbro"
            >
              GitHub
            </Link>
            <Link
              isExternal
              className="text-[#71717A] hover:text-white transition-colors"
              href="https://twitter.com/paydexbro"
            >
              Twitter
            </Link>
            <Link
              isExternal
              className="text-[#71717A] hover:text-white transition-colors"
              href="https://discord.gg/paydexbro"
            >
              Discord
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
