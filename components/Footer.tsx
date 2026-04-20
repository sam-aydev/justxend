"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const columnVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <footer className="w-full bg-[#00174D] pt-16 md:pt-24 pb-8 md:pb-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:justify-between gap-12 lg:gap-20"
        >
          <motion.div
            variants={columnVariants}
            className="order-2 md:order-1 flex flex-row md:flex-col items-center md:items-start justify-between w-full md:w-[35%] lg:w-[30%] pt-8 md:pt-0 border-t border-white/10 md:border-transparent"
          >
            <div className="flex items-center md:mb-6">
              <span className="text-white font-extrabold text-xl md:text-2xl tracking-tight">
                Just<span className="text-white">X</span>end
              </span>
            </div>

            <p className="hidden md:block text-[#94A3B8] text-[14px] md:text-[15px] leading-relaxed mb-8 pr-4">
              Making international money transfers instant, simple, and
              borderless. Powered by blockchain technology for the fastest, most
              secure transfers globally.
            </p>

            <a
              href="mailto:Info@justxend.com"
              className="flex items-center gap-2 md:gap-3 group hover:opacity-80 transition-opacity duration-300"
            >
              <div className="flex items-center justify-center md:w-10 md:h-10 md:rounded-xl md:border md:border-white/10 md:bg-white/5 group-hover:bg-white/10 transition-colors">
                <svg
                  className="w-6 h-6 md:w-5 md:h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-[#E2E8F0] text-[14px] md:text-[15px] font-medium">
                Info@justxend.com
              </span>
            </a>
          </motion.div>

          <div className="order-1 md:order-2 grid grid-cols-3 gap-2 sm:gap-6 md:gap-12 w-full md:w-[60%] lg:w-[55%]">
            <motion.div variants={columnVariants} className="flex flex-col">
              <h4 className="text-white font-bold text-[15px] sm:text-lg mb-4 md:mb-6">
                Product
              </h4>
              <ul className="flex flex-col space-y-3 md:space-y-4">
                <FooterLink href="#features" text="Feature" />
                <FooterLink href="#how-it-works" text="How it works" />
              </ul>
            </motion.div>

            <motion.div variants={columnVariants} className="flex flex-col">
              <h4 className="text-white font-bold text-[15px] sm:text-lg mb-4 md:mb-6">
                Company
              </h4>
              <ul className="flex flex-col space-y-3 md:space-y-4">
                <FooterLink href="#" text="About us" />
                <FooterLink href="#" text="Blog" />
                <FooterLink href="#" text="Contact" />
              </ul>
            </motion.div>

            <motion.div variants={columnVariants} className="flex flex-col">
              <h4 className="text-white font-bold text-[15px] sm:text-lg mb-4 md:mb-6">
                Support
              </h4>
              <ul className="flex flex-col space-y-3 md:space-y-4">
                <FooterLink href="#" text="Help center" />
                <FooterLink href="#" text="Privacy Policy" />
                <FooterLink href="#" text="Terms of Services" />
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link
      href={href}
      className="flex items-center gap-2 text-[#CBD5E1] hover:text-white transition-colors duration-300 group text-[13px] md:text-[14.5px]"
    >
      <span className="w-[3px] h-[3px] rounded-full bg-white opacity-70 group-hover:opacity-100 transition-opacity"></span>
      {text}
    </Link>
  </li>
);
