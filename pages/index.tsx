import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const screenshots = [
  "/images/Screenshot 2025-03-11 at 16.02.03-min.png",
  "/images/Screenshot 2025-03-11 at 16.01.46-min.png",
  "/images/Screenshot 2025-03-11 at 16.01.45-min.png",
  "/images/Screenshot 2025-03-11 at 16.01.39-min.png",
  "/images/Screenshot 2025-03-11 at 16.01.05-min.png",
  "/images/Screenshot 2025-03-11 at 16.00.54-min.png",
  "/images/Screenshot 2025-03-11 at 16.00.37-min.png",
  "/images/Screenshot 2025-03-11 at 15.59.19-min.png",
  "/images/Screenshot 2025-03-11 at 15.59.03-min.png",
  "/images/Screenshot 2025-03-11 at 15.57.54-min.png",
  "/images/Screenshot 2025-03-11 at 15.57.54 copy-min.png",
  "/images/Screenshot 2025-03-11 at 15.57.10-min.png",
  "/images/Screenshot 2025-03-11 at 15.46.15-min.png",
  "/images/Screenshot 2025-03-11 at 15.44.43-min.png",
  "/images/Screenshot 2025-03-11 at 15.44.30-min.png",
  "/images/Screenshot 2025-03-11 at 15.44.15-min.png",
];

// Create multiple copies of each screenshot
const allScreenshots = screenshots.flatMap(src => {
  // Limit the specific image to just 2 copies instead of 5
  if (src.includes("16.01.05-min")) {
    return Array(2).fill(src);
  }
  // All other images get 5 copies as before
  return Array(5).fill(src);
});

// Helper function to check if two positions are too close
const isTooClose = (x1: number, y1: number, x2: number, y2: number, minDistance: number) => {
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance < minDistance;
};

interface ScreenshotPosition {
  x: number;
  y: number;
  size: number;
  rotate: number;
}

export default function IndexPage() {
  // Generate positions for all screenshots to completely fill the space
  const positions = React.useMemo(() => {
    const positions: ScreenshotPosition[] = [];
    const minDistance = 15; // Reduced to 15px for more compact layout
    
    // Create concentric rings of screenshots around the center
    const rings = 7; // More rings to spread further out
    const itemsPerRing = [6, 10, 16, 20, 26, 32, 40]; // Adjusted for better distribution
    
    // Calculate the maximum safe radius to prevent edge cropping
    // Increased to fill more space
    const maxRadius = 60; // Expanded to 60% from center for wider spread
    
    let itemIndex = 0;
    
    // For each ring
    for (let ring = 0; ring < rings && itemIndex < allScreenshots.length; ring++) {
      // Scale the radius to stay within bounds - more space between rings
      const radius = 10 + (ring * (maxRadius - 10) / (rings - 1)); // Distribute rings evenly up to maxRadius
      const itemCount = itemsPerRing[ring];
      
      // Place items evenly around the ring
      for (let i = 0; i < itemCount && itemIndex < allScreenshots.length; i++) {
        // Calculate position on the ring
        const angle = (i / itemCount) * Math.PI * 2 + (ring % 2) * Math.PI / itemCount; // Stagger odd rings
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        // Add small random offset to break perfect symmetry - but keep it small to maintain even spacing
        const maxOffset = 3;
        const randomOffsetX = Math.random() * maxOffset * 2 - maxOffset;
        const randomOffsetY = Math.random() * maxOffset * 2 - maxOffset;
        
        // Adjust size based on position to prevent edge overflow
        // Outer rings have smaller items
        const distanceFromCenter = Math.sqrt(
          Math.pow(x + randomOffsetX, 2) + 
          Math.pow(y + randomOffsetY, 2)
        );
        
        // Less aggressive size reduction for more uniform appearance
        const sizeMultiplier = Math.max(0.7, 1 - (distanceFromCenter / maxRadius) * 0.25);
        
        // Increase base size by 15% (from 150-190 to 172-218)
        const baseSize = (172 + Math.random() * 46) * sizeMultiplier;
        
        // Less rotation for better readability
        const maxRotation = 2 + (ring * 0.8);
        
        const position = {
          x: x + randomOffsetX,
          y: y + randomOffsetY,
          size: baseSize,
          rotate: Math.random() * (maxRotation * 2) - maxRotation
        };
        
        // Only add if not too close to existing items
        if (!positions.some(p => isTooClose(p.x, p.y, position.x, position.y, minDistance * (0.8 + 0.2 * ring / rings)))) {
          positions.push(position);
          itemIndex++;
        }
      }
    }
    
    // Add supplementary screenshots to fill any remaining empty areas
    const additionalItems = 25; // Increased to fill more gaps
    const attempts = 120; // Increased attempts to place more items
    
    for (let attempt = 0; attempt < attempts && itemIndex < allScreenshots.length; attempt++) {
      // Try to place in areas with larger gaps
      const angle = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * (maxRadius - 5);
      
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      // Size decreases with distance from center
      const distanceFromCenter = Math.sqrt(x*x + y*y);
      const sizeMultiplier = Math.max(0.7, 1 - (distanceFromCenter / maxRadius) * 0.25);
      // Increase gap filler size by 15% (from 130-170 to 150-195)
      const baseSize = (150 + Math.random() * 45) * sizeMultiplier;
      
      const position: ScreenshotPosition = {
        x: x,
        y: y,
        size: baseSize,
        rotate: Math.random() * 10 - 5
      };
      
      // Only add if not too close to any existing position
      if (!positions.some(p => isTooClose(p.x, p.y, position.x, position.y, minDistance * 0.9))) {
        positions.push(position);
        itemIndex++;
        if (positions.length >= additionalItems) break;
      }
    }
    
    return positions;
  }, []);

  return (
    <DefaultLayout>
      <section 
        className="relative flex flex-col items-center justify-center h-[80vh] overflow-hidden"
      >
        {/* Static screenshots background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {allScreenshots.map((src, index) => {
            if (index >= positions.length) return null; // Safety check
            
            const position = positions[index];
            // Less blur for better readability
            const distance = Math.sqrt(position.x * position.x + position.y * position.y);
            const blurAmount = Math.max(0, distance / 35); // Reduced blur effect
            
            // Identify narrow screenshots to keep their original size
            // Some specific screenshots are known to be very narrow
            const isNarrowScreenshot = src.includes("15.44.15") || 
                                      src.includes("15.57.10") || 
                                      src.includes("16.00.37");
            
            // Use original size for narrow screenshots, increased size for others
            const displaySize = isNarrowScreenshot ? position.size * 0.87 : position.size;
            
            return (
              <div
                key={index}
                className="absolute shadow-xl hover:opacity-90 transition-opacity rounded-md"
                style={{
                  left: `calc(50% + ${position.x}%)`,
                  top: `calc(50% + ${position.y}%)`,
                  width: `${displaySize}px`,
                  zIndex: 5 - Math.floor(distance / 15), // Center items on top
                  opacity: Math.max(0.75, 1 - (distance / 80)), // Less fade for outer items
                  transform: `translate(-50%, -50%) rotate(${position.rotate}deg)`,
                  filter: `blur(${blurAmount}px)`,
                }}
              >
                <Image
                  src={src}
                  alt="User comment screenshot"
                  width={560}
                  height={420}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                  className="rounded-md"
                />
              </div>
            );
          })}
        </div>

        {/* Content overlay with backdrop blur for better readability - positioned higher */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4 py-3 max-w-2xl bg-[#0A0A0A]/70 backdrop-blur-md rounded-2xl border border-[#10B981]/20 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-[#10B981]">PayDexBro</span>
              <span className="text-white"> - DEX Fee Solution</span>
            </h1>
            <p className="mt-1 text-[#A1A1AA] text-xs">
              No more scams. Our wallet pays DEX fees or refunds all holders. No upfront payments.
            </p>
          </div>

          <div className="flex flex-row gap-2 justify-center mt-2">
            <Button 
              as={Link}
              href="/deploy-wallet"
              className="bg-[#10B981] text-white hover:bg-[#059669] px-3 py-1 rounded-lg text-xs font-medium shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Deploy Wallet
            </Button>
            <Button 
              as={Link}
              href="/faq"
              className="bg-transparent border border-[#10B981] text-white hover:bg-[#10B981]/10 px-3 py-1 rounded-lg text-xs font-medium"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
