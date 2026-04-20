"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full dark:bg-[#000000] bg-[#EEF2FF]/80 backdrop-blur-md py-3 px-6 md:px-16 border-b border-white/40 dark:border-white/10 transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between relative z-50">
          <Link
            href="/"
            className="flex items-center justify-start cursor-pointer -ml-14"
          >
            <div className="absolute transform scale-125 md:scale-[1.35] origin-left transition-transform">
              <Image
                src="/logo.png"
                alt="JustXend Logo"
                width={400}
                height={400}
                className="size-36 block dark:hidden"
              />
              <Image
                src="/dark_modelogo.png"
                alt="JustXend Logo Dark"
                width={400}
                height={400}
                className="size-36 hidden dark:block"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4 lg:gap-12">
            <Link
              href="#feature"
              className="text-[#334155] dark:text-gray-300 text-sm font-medium hover:text-[#00174D] dark:hover:text-white transition-colors relative group"
            >
              Feature
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FBBF24] transition-all group-hover:w-full rounded-full"></span>
            </Link>
            <Link
              href="#how-it-works"
              className="text-[#334155] dark:text-gray-300 text-sm font-medium hover:text-[#00174D] dark:hover:text-white transition-colors relative group"
            >
              How it works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FBBF24] transition-all group-hover:w-full rounded-full"></span>
            </Link>
            <Link
              href="#about"
              className="text-[#334155] dark:text-gray-300 text-sm font-medium hover:text-[#00174D] dark:hover:text-white transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FBBF24] transition-all group-hover:w-full rounded-full"></span>
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />

            <div className="hidden md:block">
              <button className="cursor-pointer border border-[#1E293B]/20 dark:border-white/20 rounded-full px-6 py-2 text-sm text-[#0F172A] dark:text-white font-semibold hover:bg-[#00174D] dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                Download App
              </button>
            </div>

            <button
              className="md:hidden p-1.5 text-[#00174D] dark:text-white transition-transform active:scale-90"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 7h16M4 12h16m-7 5h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 h-screen bg-[#00174D]/20 dark:bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`md:hidden absolute top-[110%] left-4 right-4 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/60 dark:border-white/10 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 overflow-hidden ${
            isMenuOpen
              ? "opacity-100 translate-y-0 scale-100 visible"
              : "opacity-0 -translate-y-4 scale-95 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-4 gap-2">
            <Link
              href="#feature"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#EEF2FF] dark:hover:bg-white/10 active:bg-[#E0E7FF] dark:active:bg-white/20 text-[#0F172A] dark:text-white font-semibold text-lg transition-colors group"
            >
              Feature
              <span className="text-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#EEF2FF] dark:hover:bg-white/10 active:bg-[#E0E7FF] dark:active:bg-white/20 text-[#0F172A] dark:text-white font-semibold text-lg transition-colors group"
            >
              How it works
              <span className="text-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between p-4 rounded-2xl hover:bg-[#EEF2FF] dark:hover:bg-white/10 active:bg-[#E0E7FF] dark:active:bg-white/20 text-[#0F172A] dark:text-white font-semibold text-lg transition-colors group"
            >
              About
              <span className="text-[#FBBF24] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <div className="h-px w-full bg-gray-100 dark:bg-white/10 my-2"></div>

            <button className="cursor-pointer w-full mt-2 bg-[#00174D] dark:bg-white rounded-2xl px-6 py-4 text-white dark:text-black text-base font-bold shadow-lg shadow-[#00174D]/20 dark:shadow-white/10 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
              Download App
              <svg
                className="w-5 h-5 text-[#FBBF24]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[56px] h-[28px] rounded-full bg-gray-200/50 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center w-[56px] h-[28px] rounded-full p-[2px] transition-colors duration-500 focus:outline-none ${
        isDark ? "bg-white/20" : "bg-[#CBD5E1]"
      }`}
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center shadow-md z-10"
        style={{ marginLeft: isDark ? "auto" : "0px" }}
      >
        <motion.div
          initial={{ rotate: -90, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          key={isDark ? "moon" : "sun"}
        >
          {isDark ? (
            <svg
              className="w-3.5 h-3.5 text-[#00174D]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-amber-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.336a1 1 0 011.415 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-1.336 4.22a1 1 0 010 1.415l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.415 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-1.336a1 1 0 01-1.415 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.415zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm1.336-4.22a1 1 0 010-1.415l-.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.415 0zM10 5a5 5 0 100 10 5 5 0 000-10z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </motion.div>
      </motion.div>
    </button>
  );
};
