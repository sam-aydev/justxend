"use client";

import { AppStoreBadge, PlayStoreBadge } from "@/utils/svg/playstore";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  const textVariants: any = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="font-sans dark:bg-[#000000] px-4 md:px-8 lg:px-10 pb-28 md:pb-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto bg-[#00174D] rounded-[32px] md:rounded-[40px] px-6 pt-12 pb-0 md:px-12 lg:px-16 md:pt-20 lg:pt-24 flex flex-col md:flex-row relative mt-2 md:mt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
          className="w-full md:w-[55%] flex flex-col justify-center z-20 pb-12 md:pb-24 lg:pb-32"
        >
          <motion.div
            variants={textVariants}
            className="bg-white/10 border border-white/5 w-max px-4 py-2 rounded-full text-[#E2E8F0] text-xs md:text-[13px] font-semibold tracking-wide mb-6 lg:mb-8 flex items-center gap-2 backdrop-blur-md shadow-sm"
          >
            <span className="text-sm">🔥</span> 100% TRUSTED PLATFORM
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-5xl xl:text-[68px] leading-[1.2] sm:leading-[1.15] lg:leading-[1.05] font-bold text-white mb-5 lg:mb-6 tracking-tight"
          >
            Your bank meets, <br />
            <span className="text-[#FBBF24]">borderless.</span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-white text-base sm:text-lg lg:text-xl mb-8 lg:mb-12 max-w-md lg:max-w-lg leading-relaxed md:pr-6"
          >
            Experience the future of cross-border payments. Fast, secure, and
            affordable international transfers powered by blockchain technology.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#"
              className="hover:opacity-90 hover:scale-105 active:scale-95 transition-all transform duration-300 drop-shadow-md hover:drop-shadow-xl"
            >
              <AppStoreBadge />
            </a>
            <a
              href="#"
              className="hover:opacity-90 hover:scale-105 active:scale-95 transition-all transform duration-300 drop-shadow-md hover:drop-shadow-xl"
            >
              <PlayStoreBadge />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="w-full md:w-[45%] relative mt-8 md:mt-0 flex justify-center items-end -mb-16 sm:-mb-24 md:-mb-28 lg:-mb-32 z-10 pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.6 }}
            className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.25)_0%,_transparent_60%)] rounded-full z-0 pointer-events-none"
          ></motion.div>

          <div className="relative md:-top-20 z-50 w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[550px] flex justify-center">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Image
                src="/phones-mockup.png"
                alt="JustXend App Interface on Mobile"
                width={600}
                height={700}
                className="object-contain w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.8,
              }}
              className="absolute bottom-[12%] sm:bottom-[15%] md:bottom-[20%] -left-2 sm:-left-6 lg:-left-12"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Image
                  src="/dollar-icon.png"
                  alt="Gold Dollar Coin"
                  width={100}
                  height={100}
                  className="object-contain drop-shadow-2xl w-[80px] lg:w-[100px] z-10"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
