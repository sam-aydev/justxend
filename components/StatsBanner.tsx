"use client";

import React from "react";
import { motion } from "motion/react";

export default function StatsBanner() {
  const stats = [
    { value: "10+", emoji: "🌍", label: "Countries" },
    { value: "Instant", emoji: "⚡", label: "Transfers" },
    { value: "24/7", emoji: "⭐", label: "Availability" },
    { value: "$2M+", emoji: "💰", label: "Transactions" },
  ];

  const containerVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const dividerVariants: any = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "4rem",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="dark:bg-[#000000] w-full sm:pt-32 md:pt-20 px-4 md:px-8 lg:px-10 pb-16 md:pb-24 z-20 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-[1200px] mx-auto bg-white/90 backdrop-blur-xl rounded-[28px] md:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-6 py-8 md:p-10 relative -mt-6 sm:-mt-10 md:-mt-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-0 relative">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center text-center group relative"
            >
              {index !== 0 && (
                <motion.div
                  variants={dividerVariants}
                  className={`absolute left-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent top-1/2 -translate-y-1/2 ${
                    index === 2 ? "hidden md:block" : ""
                  }`}
                ></motion.div>
              )}

              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#F8FAFC] border border-gray-100 flex items-center justify-center text-xl md:text-2xl mb-4 group-hover:-translate-y-1.5 transition-transform duration-300 ease-out shadow-sm group-hover:shadow-md">
                <span className="transform group-hover:scale-110 transition-transform duration-300">
                  {stat.emoji}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#00174D] tracking-tight mb-1.5 leading-none">
                {stat.value}
              </h3>

              <p className="text-[#64748B] text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
