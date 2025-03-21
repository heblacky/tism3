"use client";

import React from "react";
import Image from "next/image";

type ImagePlaceholderProps = {
  title: string;
  caption?: string;
  className?: string;
  gradientColors?: string[];
  imageSrc?: string;
  imageAlt?: string;
};

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  title,
  caption,
  className = "h-64 md:h-full",
  gradientColors = ["from-blue-100", "to-blue-200"],
  imageSrc,
  imageAlt
}) => {
  // If an image source is provided, display the actual image
  if (imageSrc) {
    return (
      <div className={`${className} relative overflow-hidden`}>
        <Image 
          src={imageSrc}
          alt={imageAlt || caption || title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    );
  }
  
  // Otherwise display the placeholder
  return (
    <div className={`${className} bg-gradient-to-r ${gradientColors.join(" ")} flex items-center justify-center`}>
      <div className="text-blue-500 p-12 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <p className="text-lg font-medium">{title}</p>
        {caption && <p className="text-sm text-blue-400 mt-2">{caption}</p>}
      </div>
    </div>
  );
}; 