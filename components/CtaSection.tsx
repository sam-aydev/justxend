"use client";
import React from "react";
import Image from "next/image";
import { AppStoreBadge, PlayStoreBadge } from "@/utils/svg/playstore";
import { motion } from "motion/react";
export default function CTASection() {
  const trustBadges = [
    {
      title: "No Hidden Fees",
      subtitle: "100% Transparent",
    },
    {
      title: "Bank-Grade Security",
      subtitle: "256-bit Encryption",
    },
    {
      title: "24/7 Support",
      subtitle: "Always Here for You",
    },
  ];

  return (
    <section className="w-full bg-[#00174D] py-20 md:py-32 relative ">
      {/* Optional: Subtle background glows for a premium feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[120px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16 relative z-10">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] h-[360px] sm:h-[420px] md:h-[500px]">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-0 lg:right-54 w-[70%] z-20 transition-transform duration-500 hover:-translate-y-4 hover:rotate-[2deg]"
            >
              <Image
                src="/cta-phoneinterface.png" // Rename to your splash screen PNG
                alt="JustXend Splash Screen"
                width={300}
                height={600}
                className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
              />
            </motion.div>

            <div className="absolute -top-32 md:-top-44 lg:-top-56 left-42 md:left-32 w-[70%] z-1000 transition-transform duration-500 hover:-translate-y-2 hover:rotate-[-2deg]">
              <Image
                src="/iPhone.png" // Rename to your interface PNG
                alt="JustXend App Interface"
                width={300}
                height={600}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start text-left pt-4 md:pt-0">
          <h2 className="text-[38px] leading-[1.1] md:text-[56px] md:leading-[1.05] font-extrabold text-white mb-4 md:mb-6 tracking-tight">
            Explore more <br />
            <span className="text-[#6EE7B7]">Download the app</span>
          </h2>

          <p className="text-[#CBD5E1] text-[15px] sm:text-base md:text-lg max-w-[90%] md:max-w-md font-medium leading-relaxed mb-8 md:mb-10">
            Join over 2 million users sending money globally with zero hassle.
            Get started in minutes.
          </p>

          <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#"
              className="hover:opacity-80 transition-all hover:-translate-y-1 transform duration-300"
            >
              <AppStoreBadge />
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-all hover:-translate-y-1 transform duration-300"
            >
              <PlayStoreBadge />
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:block mt-20 md:px-24 md:mt-32 pt-2 md:pt-10 z-20">
        <div className="grid grid-cols-3 gap-6 lg:gap-8">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-4 lg:gap-5 p-4 lg:p-6 rounded-[12px] border border-white/10 bg-transparent hover:bg-white/5 transition-colors duration-300 group cursor-default"
            >
              {/* Icon Container: Now a rounded square matching the design */}
              <div className="shrink-0 w-11 h-11 lg:w-12 lg:h-12 rounded-[10px] border border-white/5 bg-[#001036] shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <ShieldCheckIcon />
              </div>

              {/* Text Group */}
              <div className="flex flex-col">
                <h4 className="text-white font-semibold text-[15px] lg:text-[17px] tracking-wide mb-0.5">
                  {badge.title}
                </h4>
                <p className="text-[#94A3B8] text-[13px] lg:text-[14px]">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ShieldCheckIcon = () => (
  <svg
    className="w-[18px] h-[18px] lg:w-5 lg:h-5 text-[#FBBF24]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);
