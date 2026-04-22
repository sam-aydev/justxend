"use client";

import React from "react";
import { motion } from "motion/react";

const features = [
  {
    id: 1,
    title: "Wallet & Balance Management",
    description:
      "View and manage your funds across synchronized Wallet and Balance pages with real-time updates.",
    iconBg: "bg-[#D946EF]",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Send & Receive Payments",
    description:
      "Instantly transfer money to other users and receive funds across borders with fast settlement.",
    iconBg: "bg-[#3B82F6]",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Payment Requests & Invoicing",
    description:
      "Create payment requests and invoices to collect money easily from friends or clients.",
    iconBg: "bg-[#1E3A8A]",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Virtual Dollar Cards",
    description:
      "Generate virtual cards for secure online payments, subscriptions, and international trading.",
    iconBg: "bg-[#14B8A6]",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Cross-Border Transfers",
    description:
      "Send money from the US to Nigeria and other countries with automatic currency conversion.",
    iconBg: "bg-[#0F766E]",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Transaction History",
    description:
      "Track all transfers, card payments, and requests with clear status and timestamps.",
    iconBg: "bg-[#6B21A8]",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Bank Funding & Withdrawals",
    description:
      "Fund your account from local banks and withdraw directly to your bank anytime.",
    iconBg: "bg-[#F59E0B]",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Security & Account Controls",
    description:
      "Protect your funds with verification, balance privacy, and card management tools.",
    iconBg: "bg-[#EF4444]",
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function Features() {
  const headerVariants: any = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="w-full mx-auto bg-[#EEF2FF] dark:bg-[#000000] pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="flex flex-col items-center text-center mb-10 md:mb-16 px-6"
        >
          <div className="bg-white dark:bg-white/10 px-5 py-2 rounded-full mb-6 shadow-sm border border-transparent dark:border-white/5">
            <span className="text-[11px] md:text-xs font-bold text-[#1E3A8A] dark:text-white uppercase tracking-widest">
              Powerful Features
            </span>
          </div>

          <h2 className="text-[32px] leading-[1.2] md:text-[52px] md:leading-[1.1] font-extrabold text-[#0F172A] dark:text-white mb-4 tracking-tight">
            Everything You Need for <br className="block" />
            <span className="text-[#1E3A8A] dark:text-white">
              Global Payments
            </span>
          </h2>

          <p className="text-[#64748B] dark:text-[#94A3B8] text-[15px] md:text-lg max-w-2xl font-medium leading-relaxed px-2">
            Designed to make international transfers seamless, secure, an
            incredibly fast.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="flex place-items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-6 md:px-0 pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto snap-center flex flex-col items-start p-6 md:p-8 bg-transparent md:bg-white/40 dark:bg-[#0A0A0A] dark:md:bg-[#0A0A0A] rounded-[24px] border border-[#CBD5E1]/60 dark:border-white/5 hover:bg-white dark:hover:bg-[#111111] hover:border-white dark:hover:border-white/10 transition-colors duration-300 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.02)] group"
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-[16px] flex items-center justify-center mb-5 md:mb-6 shadow-md transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3 ${feature.iconBg}`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-[#0F172A] dark:text-white text-lg md:text-[20px] font-bold mb-2.5 md:mb-3 leading-snug">
                  {feature.title}
                </h3>

                <p className="text-[#64748B] dark:text-[#94A3B8] text-[14px] md:text-[15px] leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center mt-2 md:hidden"
          >
            <button className="flex items-center gap-1.5 border border-[#1E3A8A]/30 dark:border-white/20 bg-transparent rounded-lg px-4 py-1.5 text-[13px] font-bold text-[#1E3A8A] dark:text-white active:bg-white dark:active:bg-white/10 transition-colors shadow-sm">
              Swipe for More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
