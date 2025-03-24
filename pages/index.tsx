"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import AuthModal from '../components/AuthModal';

// Add CSS for hiding scrollbars on video showcase
const hideScrollbarStyle = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default function IndexPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeSegment, setActiveSegment] = useState<number | null>(null);

  // Function to populate result with sample videos
  const populateResultVideos = () => {
    setIsProcessing(true);
    
    // Sample videos for demo purposes
    const originalVideo = document.getElementById('original-image') as HTMLVideoElement;
    const transformedVideo = document.getElementById('transformed-image') as HTMLVideoElement;
    
    if (originalVideo) {
      const previewVideo = document.getElementById('preview-image') as HTMLVideoElement;
      if (previewVideo && previewVideo.src) {
        originalVideo.src = previewVideo.src;
        originalVideo.poster = ''; // Clear poster once we have a video
        
        // When loaded, mark this video as ready
        originalVideo.onloadeddata = () => {
          originalVideo.classList.remove('opacity-0');
        };
      }
    }
    
    if (transformedVideo) {
      // Simulate AI processing delay
      setTimeout(() => {
        // Use one of our showcase videos as the "transformed" result
        transformedVideo.src = '/images/tt1.mp4';
        transformedVideo.poster = ''; // Clear poster once we have a video
        transformedVideo.load(); // Force reload with new source
        
        // When loaded, mark this video as ready and end processing state
        transformedVideo.onloadeddata = () => {
          transformedVideo.classList.remove('opacity-0');
          setIsProcessing(false);
        };
      }, 2500); // Add a delay to simulate processing
    }
  };

  const features = [
    {
      title: "Upload Your Video",
      description: "Simply upload any video from your device",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
      ),
    },
    {
      title: "AI Processing",
      description: "Our AI transforms video faces with real-time processing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4v3a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z"></path>
          <path d="M19 12h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1C9 19 3 14 3 8V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1"></path>
        </svg>
      ),
    },
    {
      title: "Video Transformation",
      description: "Faces in video are transformed with unique characteristics",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "Download & Share",
      description: "Get your transformed video ready to share",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ),
    },
  ];

  const tokenomicsData = [
    { name: "Supply", percentage: 70, color: "#004cff" },
    { name: "Team", percentage: 10, color: "#0085ff" },
    { name: "Marketing", percentage: 10, color: "#00b2ff" },
    { name: "Donations", percentage: 10, color: "#00d5ff" },
  ];

  return (
    <DefaultLayout>
      {/* CSS for hiding scrollbars */}
      <style dangerouslySetInnerHTML={{ __html: hideScrollbarStyle }} />
      
      {/* Hero Section */}
      <section className="py-10 md:py-20 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          {/* Logo above main text */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <Image 
              src="/images/logo.png" 
              alt="Only Downs Logo" 
              width={140}
              height={140}
              className="rounded-full w-[140px] h-[140px] md:w-[180px] md:h-[180px]"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff] mb-4 md:mb-6">
            Only Downs: Unique Face Transformation
          </h1>
          <p className="text-lg md:text-xl text-black mb-6 md:mb-8 max-w-2xl mx-auto">
            The ultimate face transformer for videos. Upload your video and watch as our AI transforms faces with unique characteristics in real-time!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="#try-now"
              className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-[#004cff] hover:bg-[#0035b5] text-white font-medium transition-colors"
            >
              Try Now
            </a>
            <a
              href="#how-it-works"
              className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-[#004cff] text-[#004cff] hover:bg-[#004cff]/10 font-medium transition-colors"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Header2 image positioned below the animation box in z-index */}
        <div className="relative mt-4 w-full max-w-6xl z-0">
          <Image 
            src="/images/header2.png" 
            alt="OnlyDowns Header" 
            width={1200} 
            height={300}
            className="w-[90%] mx-auto object-contain"
            priority
          />
        </div>

        {/* Mockup Image - positioned on top of header image */}
        <div className="mt-[-25px] sm:mt-[-35px] relative w-full max-w-5xl z-10 px-4">
          <div className="relative mx-auto w-full h-[350px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#5cd3ff]">
            {/* Replace static colored div with interactive infographic */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4ff] to-[#e6eeff] flex items-center justify-center">
              <div className="w-full max-w-4xl mx-auto px-4">
                {/* 3-Step Process Infographic */}
                <div className="flex flex-col md:flex-row items-center justify-between relative">
                  
                  {/* Step 1: Upload Video */}
                  <div className="relative flex flex-col items-center w-full md:w-1/3 p-2 md:p-4 group mb-8 md:mb-0">
                    <div className="absolute -top-2 -left-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#004cff] text-white flex items-center justify-center font-bold z-10">1</div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg shadow-lg flex items-center justify-center mb-3 md:mb-4 relative overflow-hidden group-hover:scale-105 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 text-[#004cff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      
                      {/* Animated upload effect */}
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#004cff] animate-[upload_3s_ease-in-out_infinite]"></div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-black">Upload Video</h3>
                    <p className="text-black text-center text-xs md:text-sm">Share your content with us</p>
                    
                    {/* Animated arrow pointing to next step (mobile: down, desktop: right) */}
                    <div className="md:hidden mt-4 animate-bounce">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#004cff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 animate-[pulse_2s_infinite]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#004cff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Step 2: Transform Video */}
                  <div className="relative flex flex-col items-center w-full md:w-1/3 p-2 md:p-4 group mb-8 md:mb-0">
                    <div className="absolute -top-2 -left-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#004cff] text-white flex items-center justify-center font-bold z-10">2</div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg shadow-lg flex items-center justify-center mb-3 md:mb-4 overflow-hidden relative group-hover:scale-105 transition-transform">
                      {/* Before-After Split */}
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 bg-gray-100"></div>
                        <div className="w-1/2 bg-[#e1f5fe]"></div>
                      </div>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative z-10 w-12 h-12 md:w-16 md:h-16">
                          {/* Spinning gear animation */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 text-[#004cff] animate-[spin_8s_linear_infinite]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                          
                          {/* AI Face in center */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-[#004cff] to-[#00d5ff]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Processing effect pulses */}
                      <div className="absolute inset-0 bg-[#004cff]/10 animate-[processing_2s_ease-in-out_infinite]"></div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-black">Transform Video</h3>
                    <p className="text-black text-center text-xs md:text-sm">Our AI works its magic</p>
                    
                    {/* Animated arrow pointing to next step (mobile: down, desktop: right) */}
                    <div className="md:hidden mt-4 animate-bounce">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#004cff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 animate-[pulse_2s_infinite]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#004cff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Step 3: Make Money */}
                  <div className="relative flex flex-col items-center w-full md:w-1/3 p-2 md:p-4 group">
                    <div className="absolute -top-2 -left-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#004cff] text-white flex items-center justify-center font-bold z-10">3</div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg shadow-lg flex items-center justify-center mb-3 md:mb-4 relative overflow-hidden group-hover:scale-105 transition-transform">
                      <div className="relative w-12 h-12 md:w-16 md:h-16">
                        {/* Dollar sign with staggered animation */}
                        <div className="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center animate-[moneyPop_3s_ease-in-out_infinite]">
                          <span className="text-white font-bold text-lg md:text-xl">$</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-9 h-9 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center animate-[moneyPop_3s_ease-in-out_0.5s_infinite]">
                          <span className="text-white font-bold text-xl md:text-2xl">$</span>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center animate-[moneyPop_3s_ease-in-out_1s_infinite]">
                          <span className="text-white font-bold text-2xl md:text-3xl">$</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-black">Earn Rewards</h3>
                    <p className="text-black text-center text-xs md:text-sm">Make money from your content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Blurred Image with Parallax Effect */}
        <div 
          className="absolute left-[-10%] top-1/2 transform -translate-y-1/2 w-[30%] max-w-[400px] min-w-[250px] h-auto pointer-events-none opacity-80 z-0"
          style={{
            willChange: 'transform',
            transform: 'translateY(0)',
          }}
        >
          <Image 
            src="/images/blurred.png" 
            alt="Decorative blur effect"
            width={400}
            height={600}
            className="w-full h-auto object-contain"
            priority
            data-parallax="true"
            data-parallax-speed="0.1"
          />
        </div>
        
        {/* Add parallax effect script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Simple parallax effect for the blurred image
            document.addEventListener('DOMContentLoaded', function() {
              const parallaxElements = document.querySelectorAll('[data-parallax="true"]');
              
              window.addEventListener('scroll', function() {
                parallaxElements.forEach(element => {
                  const speed = parseFloat(element.getAttribute('data-parallax-speed') || '0.1');
                  const offset = window.scrollY * speed;
                  element.style.transform = 'translateY(' + offset + 'px)';
                });
              });
            });
          `
        }} />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black text-center mb-4">How It Works</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Our AI-powered video face transformation process is designed to be simple and effective
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border-none shadow-md hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="mb-4">
                    <div className="p-2 bg-[#004cff]/10 rounded-lg text-[#004cff] inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-black">{feature.description}</p>
                </div>
                <div className="px-6 py-4 border-t border-gray-100">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-[#004cff] text-white rounded-full font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Demonstration */}
          <div className="mt-20 bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">See the Magic in Action</h3>
                <p className="text-black mb-6">
                  OnlyDowns leverages advanced artificial intelligence to transform faces in videos with remarkable accuracy and quality. Our technology is built on a foundation of cutting-edge neural networks and machine learning algorithms that process video frames in real-time.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-black">Video Face Detection</span>
                      <span className="text-sm font-medium text-[#004cff]">99%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#004cff] h-2 rounded-full" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-black">Real-time Processing</span>
                      <span className="text-sm font-medium text-[#004cff]">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#004cff] h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-black">Video Realism</span>
                      <span className="text-sm font-medium text-[#004cff]">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#004cff] h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-[300px] bg-gradient-to-r from-[#f5f8ff] to-[#e1eaff] rounded-xl flex items-center justify-center">
                  <div className="relative w-[80%] h-[80%]">
                    {/* Before-After Comparison with real videos */}
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 bg-gray-100 rounded-l-lg overflow-hidden flex items-center justify-center">
                        <video 
                          src="/images/real.mp4"
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <track kind="captions" src="" label="English" />
                        </video>
                      </div>
                      <div className="w-1/2 bg-gray-100 rounded-r-lg overflow-hidden flex items-center justify-center">
                        <video 
                          src="/images/down.mp4"
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <track kind="captions" src="" label="English" />
                        </video>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 left-1/2 -ml-px w-1 bg-[#004cff]"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                      <div className="w-5 h-5 text-[#004cff]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Labels */}
                    <div className="absolute -bottom-8 left-1/4 transform -translate-x-1/2 text-sm font-medium text-black">Original Video</div>
                    <div className="absolute -bottom-8 left-3/4 transform -translate-x-1/2 text-sm font-medium text-black">Transformed Video</div>
                    
                    {/* Video timeline representation */}
                    <div className="absolute -bottom-16 inset-x-0 flex items-center">
                      <div className="w-full h-1 bg-gray-200 rounded-full">
                        <div className="w-1/3 h-1 bg-[#004cff] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="video-showcase" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-3 md:mb-4">See the Results of Our Generator IRL</h2>
            <p className="text-base md:text-xl text-black max-w-2xl mx-auto">
              See real examples of our video face swap technology in action videos! Tap the niche that is generating cashflow in the social shadows.
            </p>
          </div>

          {/* Video Gallery */}
          <div className="relative">
            {/* Left/Right Navigation Arrows */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none hidden md:block" 
              onClick={() => {
                const container = document.getElementById('video-scroll-container');
                if (container) {
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#004cff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none hidden md:block" 
              onClick={() => {
                const container = document.getElementById('video-scroll-container');
                if (container) {
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#004cff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrollable Video Container */}
            <div 
              id="video-scroll-container" 
              className="flex overflow-x-auto pb-8 hide-scrollbar" 
                style={{
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none'
              }}
            >
              {/* Video Cards - Phone Style Format */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="flex-shrink-0 w-48 sm:w-56 md:w-64 mx-2 sm:mx-3">
                  <div className="relative rounded-[24px] overflow-hidden bg-black shadow-lg p-2 pt-3 pb-8 bg-gradient-to-b from-gray-800 to-gray-900">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1.5 bg-gray-700 rounded-b-lg"></div>
                    
                    {/* Screen with Video */}
                    <div className="relative rounded-lg overflow-hidden bg-black aspect-[9/16]">
                      <video 
                        src={`/images/tt${num}.mp4`} 
                        id={`showcase-video-${num}`}
                        className="h-full w-full object-cover"
                        muted
                        autoPlay
                        playsInline
                        loop
                        poster={`/images/tt${num}.mp4#t=0.5`} 
                        preload="auto"
                        crossOrigin="anonymous"
                        onError={(e) => {
                          // Fallback in case of video load error
                          const target = e.target as HTMLVideoElement;
                          target.onerror = null;
                          target.poster = '/images/logo.png';
                        }}
                      >
                        <track kind="captions" src="" label="English" />
                      </video>
                      {/* Custom overlay frame unique to each video */}
                      <div className="absolute inset-0 pointer-events-none">
                        {num === 1 && (
                          <div className="absolute top-2 left-2 right-2 h-6 sm:h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-between p-2">
                            <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#004cff]"></div>
                            <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-white/40 rounded-full"></div>
                          </div>
                        )}
                        {num === 2 && (
                          <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-t from-black/80 to-transparent"></div>
                        )}
                        {num === 3 && (
                          <div className="absolute top-2 right-2 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#004cff]/80"></div>
                          </div>
                        )}
                        {num === 4 && (
                          <div className="absolute top-0 left-0 w-2 sm:w-3 h-full bg-gradient-to-r from-[#004cff]/50 to-transparent"></div>
                        )}
                        {num === 5 && (
                          <div className="absolute bottom-3 left-3 right-3 h-1 bg-white/30 rounded-full overflow-hidden">
                            <div className="w-2/3 h-full bg-[#004cff]"></div>
                          </div>
                        )}
                        {num === 6 && (
                          <div className="absolute inset-0 border-3 sm:border-4 border-[#004cff]/20 rounded-lg"></div>
                        )}
                        {num === 7 && (
                          <div className="absolute bottom-3 right-3 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        {num === 8 && (
                          <div className="absolute inset-0">
                            <div className="absolute top-2 left-2 right-2 px-2 py-1 bg-[#004cff]/30 backdrop-blur-sm rounded-t-lg flex items-center">
                              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#ff0000] mr-1"></div>
                              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#ffff00] mr-1"></div>
                              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#00ff00]"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#004cff] via-[#00d5ff] to-[#004cff]"></div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Phone Home Button */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Dots */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {[1, 2, 3, 4, 5].map((dot) => (
              <button 
                key={dot} 
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${dot === 1 ? 'bg-[#004cff]' : 'bg-gray-300'}`}
                onClick={() => {
                  const container = document.getElementById('video-scroll-container');
                  if (container) {
                    container.scrollTo({ 
                      left: (container.scrollWidth / 5) * (dot - 1), 
                      behavior: 'smooth' 
                    });
                  }
                }}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8 md:mt-12 text-center">
            <Link 
              href="#try-now" 
              className="inline-flex justify-center items-center px-6 md:px-8 py-3 md:py-4 rounded-lg bg-gradient-to-r from-[#004cff] to-[#00b2ff] text-white font-medium transition-colors hover:from-[#003ccc] hover:to-[#0080cc] shadow-md"
            >
              Try It Yourself Now
            </Link>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black text-center mb-4">$OD Token</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              The $OD token powers the OnlyDowns ecosystem, providing holders with exclusive benefits and platform governance rights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <div className="bg-white border-none shadow-xl rounded-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-4">Tokenomics</h3>
                  <div className="flex justify-center relative mb-8">
                    {/* Interactive Circular Infographic */}
                    <div className="relative h-60 w-60">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {tokenomicsData.map((item, index) => {
                          // Calculate the segment positions in the circle
                          const startPercent = tokenomicsData.slice(0, index).reduce((acc, curr) => acc + curr.percentage, 0);
                          const endPercent = startPercent + item.percentage;
                          
                          // Convert percentages to radians
                          const startAngle = (startPercent / 100) * Math.PI * 2 - Math.PI / 2;
                          const endAngle = (endPercent / 100) * Math.PI * 2 - Math.PI / 2;
                          
                          // Calculate the SVG arc path
                          const x1 = 50 + 40 * Math.cos(startAngle);
                          const y1 = 50 + 40 * Math.sin(startAngle);
                          const x2 = 50 + 40 * Math.cos(endAngle);
                          const y2 = 50 + 40 * Math.sin(endAngle);
                          
                          // Determine if the arc should be drawn as a large arc
                          const largeArcFlag = item.percentage > 50 ? 1 : 0;
                          
                          // Create the SVG path for the arc
                          const pathData = `
                            M 50 50
                            L ${x1} ${y1}
                            A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}
                            Z
                          `;
                          
                          return (
                            <path
                              key={index}
                              d={pathData}
                              fill={item.color}
                              onMouseEnter={() => setActiveSegment(index)}
                              onMouseLeave={() => setActiveSegment(null)}
                              className={`transition-transform duration-300 ${activeSegment === index ? 'transform scale-105' : ''}`}
                              style={{ 
                                transformOrigin: 'center',
                                cursor: 'pointer',
                                filter: activeSegment === index ? 'drop-shadow(0 0 5px rgba(0,0,0,0.3))' : 'none'
                              }}
                            />
                          );
                        })}
                        <circle cx="50" cy="50" r="20" fill="white" />
                      </svg>
                      
                      {/* Center text showing total supply */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <p className="text-sm font-semibold text-black">Total Supply</p>
                        <p className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff] font-bold">1 Billion</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="grid grid-cols-2 gap-4">
                    {tokenomicsData.map((item, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center ${activeSegment === index ? 'font-bold' : ''}`}
                        onMouseEnter={() => setActiveSegment(index)}
                        onMouseLeave={() => setActiveSegment(null)}
                      >
                        <div className="w-4 h-4 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-black">{item.name}: <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff] font-bold">{item.percentage}%</span></span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row justify-between w-full">
                    <div className="text-sm text-black mb-2 sm:mb-0">
                      <span className="font-medium">Total Supply:</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff] font-bold">1,000,000,000 $OD</span>
                    </div>
                    <div className="text-sm text-black">
                      <span className="font-medium">Network:</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff] font-bold">Solana</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-8">
              {/* Token Utility */}
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-black mb-4">Token Utility</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-gradient-to-r from-[#004cff] to-[#00d5ff] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Platform Access</h4>
                      <p className="text-black">Token holders receive exclusive benefits including higher credit limits and premium features.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-to-r from-[#004cff] to-[#00d5ff] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Governance Rights</h4>
                      <p className="text-black">Participate in platform decisions and vote on future feature development.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-to-r from-[#004cff] to-[#00d5ff] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Staking Rewards</h4>
                      <p className="text-black">Earn passive income by staking tokens and supporting the network.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* DexScreener Chart */}
              <div className="order-1 md:order-2 bg-white border-none shadow-xl rounded-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-4">Token Chart</h3>
                  <div className="aspect-video w-full">
                    <iframe 
                      src="https://dexscreener.com/solana" 
                      title="DexScreener Chart" 
                      className="w-full h-full border-0 rounded-lg"
                    ></iframe>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 text-center">
                    Live chart will be available when token is launched. This is a placeholder showing the Solana DEX market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-3 md:mb-4">Pricing Plans</h2>
            <p className="text-base md:text-xl text-black max-w-2xl mx-auto">
              Choose the perfect plan to bring your creative visions to life with our AI face transformation technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Free Plan for Token Holders */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <div className="p-6 md:p-8">
                <div className="text-center mb-3 md:mb-4">
                  <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff]">Token Holder</h3>
                  <p className="text-black mt-2">For $OD investors</p>
                </div>
                <div className="flex justify-center items-end mt-4 md:mt-6 mb-4 md:mb-6">
                  <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff]">Free</span>
                </div>
                <p className="text-center text-black text-sm md:text-base mb-4 md:mb-6">For holders with at least 5 million $OD tokens</p>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#004cff] mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-black text-sm md:text-base font-medium">1,000 free credits monthly</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#004cff] mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-black text-sm md:text-base font-medium">Standard transformations</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#004cff] mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-black text-sm md:text-base font-medium">Governance voting rights</span>
                  </li>
                </ul>
                <a href="#try-now" className="block w-full text-center py-2.5 md:py-3 px-4 md:px-6 rounded-lg bg-gradient-to-r from-[#004cff] to-[#00d5ff] text-white font-medium hover:opacity-90 transition-all">
                  Coming Soon
                </a>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 border-2 border-[#004cff]">
              <div className="p-6 md:p-8">
                <div className="text-center mb-3 md:mb-4">
                  <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff]">Standard</h3>
                  <p className="text-black mt-2">For creators</p>
                </div>
                <div className="flex justify-center items-end mt-4 md:mt-6 mb-4 md:mb-6">
                  <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff]">$19.99</span>
                  <span className="text-black ml-1 mb-1">/month</span>
                </div>
                <p className="text-center text-black text-sm md:text-base mb-4 md:mb-6">Best for regular content creation</p>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#004cff] mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-black text-sm md:text-base font-medium">5,000 credits monthly</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#004cff] mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-black text-sm md:text-base font-medium">Premium transformations</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#004cff] mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-black text-sm md:text-base font-medium">Priority rendering</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#004cff] mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-black text-sm md:text-base font-medium">Email support</span>
                  </li>
                </ul>
                <a href="#try-now" className="block w-full text-center py-2.5 md:py-3 px-4 md:px-6 rounded-lg bg-gradient-to-r from-[#004cff] to-[#00d5ff] text-white font-medium hover:opacity-90 transition-all">
                  Coming Soon
                </a>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <div className="p-6 md:p-8">
                <div className="text-center mb-3 md:mb-4">
                  <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff]">Premium</h3>
                  <p className="text-black mt-2">For power users</p>
                </div>
                <div className="flex justify-center items-end mt-4 md:mt-6 mb-4 md:mb-6">
                  <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#004cff] to-[#00d5ff]">$50</span>
                  <span className="text-black ml-1 mb-1">/month</span>
                </div>
                <p className="text-center text-black text-sm md:text-base mb-4 md:mb-6">Best for professionals</p>
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#004cff] mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-black text-sm md:text-base font-medium">7,000 free credits monthly</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#004cff] mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-black text-sm md:text-base font-medium">4K transformations</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#004cff] mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-black text-sm md:text-base font-medium">Priority processing</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#004cff] mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-black text-sm md:text-base font-medium">24/7 premium support</span>
                  </li>
                </ul>
                <a href="#try-now" className="block w-full text-center py-2.5 md:py-3 px-4 md:px-6 rounded-lg bg-gradient-to-r from-[#004cff] to-[#00d5ff] text-white font-medium hover:opacity-90 transition-all">
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try Now Section */}
      <section id="try-now" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black text-center mb-4">Try It Now</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Transform faces in your videos with our AI technology. Upload a video and see the magic happen in real-time!
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors">
                <input 
                  type="file" 
                  id="file-upload" 
                  accept="video/*"
                  className="sr-only"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const fileReader = new FileReader();
                      fileReader.onload = (event) => {
                        if (event.target) {
                          const previewImg = document.getElementById('preview-image') as HTMLVideoElement;
                          if (previewImg) {
                            previewImg.src = event.target.result as string;
                            previewImg.classList.remove('hidden');
                            document.getElementById('upload-text')?.classList.add('hidden');
                          }
                        }
                      };
                      fileReader.readAsDataURL(e.target.files[0]);
                    }
                  }}
                />
                <label htmlFor="file-upload" className="w-full h-full block cursor-pointer" aria-label="Upload video file">
                  <div id="upload-text">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-black font-medium">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-1">MP4, MOV, AVI up to 100MB</p>
                  </div>
                  <video id="preview-image" className="hidden max-h-48 mx-auto" controls>
                    <track kind="captions" src="" label="English" />
                  </video>
                </label>
              </div>
              
              <button 
                className="w-full bg-gradient-to-r from-[#004cff] to-[#00d5ff] text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => {
                  const previewImg = document.getElementById('preview-image') as HTMLVideoElement;
                  if (previewImg && !previewImg.classList.contains('hidden')) {
                    // Show age verification alert first
                    if (!isAuthenticated && confirm("You must be 18+ to use this service. Are you 18 or older?")) {
                      setIsAuthModalOpen(true);
                    } else if (isAuthenticated) {
                      const resultArea = document.getElementById('result-area');
                      if (resultArea) {
                        resultArea.classList.remove('hidden');
                        // Populate with sample videos
                        populateResultVideos();
                        window.scrollTo({
                          top: resultArea.offsetTop,
                          behavior: 'smooth'
                        });
                      }
                    }
                  } else {
                    alert('Please upload a video first');
                    document.getElementById('file-upload')?.click();
                  }
                }}
              >
                Transform Video
              </button>
            </div>
          </div>
          
          <div id="result-area" className="hidden mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-4">Your Transformed Video</h3>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex-1 border rounded-lg overflow-hidden">
                    <p className="bg-gray-100 py-2 text-center text-black font-medium">Original</p>
                    <div className="p-4 flex items-center justify-center h-64 relative">
                      <video 
                        id="original-image" 
                        controls 
                        className="max-h-full w-full opacity-0 transition-opacity duration-300"
                        poster="/images/logo.png"
                        preload="metadata"
                        playsInline
                      >
                        <track kind="captions" src="" label="English" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 border-2 border-t-transparent border-[#004cff] rounded-full animate-spin"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 border rounded-lg overflow-hidden">
                    <p className="bg-gray-100 py-2 text-center text-black font-medium">Transformed</p>
                    <div className="p-4 flex items-center justify-center h-64 relative">
                      <video 
                        id="transformed-image" 
                        controls 
                        className="max-h-full w-full opacity-0 transition-opacity duration-300"
                        poster="/images/logo.png" 
                        preload="metadata"
                        playsInline
                      >
                        <track kind="captions" src="" label="English" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <div className="w-10 h-10 border-2 border-t-transparent border-[#004cff] rounded-full animate-spin mb-3"></div>
                        {isProcessing && <p className="text-sm text-gray-600">AI processing your video...</p>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button className="bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                    Download
                  </button>
                  <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Share
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => {
          setIsAuthenticated(true);
          setIsAuthModalOpen(false);
          
          // Now that the user is authenticated, show the result area
          const resultArea = document.getElementById('result-area');
          if (resultArea) {
            resultArea.classList.remove('hidden');
            // Populate with sample videos
            populateResultVideos();
            window.scrollTo({
              top: resultArea.offsetTop,
              behavior: 'smooth'
            });
          }
        }}
      />
    </DefaultLayout>
  );
}