"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CardSection1, CardSection4 } from "@/utils/svg/cards";

export default function HowItWorks() {
  const benefits = [
    {
      title: "Lightning Fast",
      description: "Transfers complete in under 30 seconds, 24/7.",
      emoji: "⚡",
    },
    {
      title: "Ultra Low Fees",
      description: "Save up to 90% compared to traditional banks.",
      emoji: "💰",
    },
    {
      title: "Global Coverage",
      description: "Send to 150+ countries instantly.",
      emoji: "🌍",
    },
  ];

  const headerVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const rowVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const imageBlockVariants: any = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const textBlockVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerCardsContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="how-it-works"
      className="w-full dark:bg-[url('/dark_wavyborder.png')] bg-[url('/wavy-bg.png')] bg-no-repeat bg-top pt-32 md:pt-48 pb-32 md:pb-40 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="flex flex-col items-center text-center mb-12 md:mb-32"
        >
          <div className="bg-[#EEF2FF] px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-5 md:mb-6 shadow-sm">
            <span className="text-[11px] md:text-[13px] font-bold text-[#1E3A8A] tracking-wide uppercase">
              Simple Process
            </span>
          </div>
          <h2 className="dark:text-white text-[32px] leading-[1.2] md:text-[52px] md:leading-[1.1] font-extrabold text-[#0F172A] mb-4 md:mb-5 tracking-tight">
            How <span className="text-[#1E3A8A]">JustXend</span> Works
          </h2>
          <p className="dark:text-white text-[#64748B] text-[15px] md:text-lg max-w-lg font-medium leading-relaxed px-4">
            Send money across borders in four simple steps
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={rowVariants}
          className="w-full flex flex-col md:flex-row items-center md:bg-[#DDE7FF] md:rounded-[50px] lg:rounded-[60px] relative z-10"
        >
          <motion.div
            variants={imageBlockVariants}
            className="w-full md:w-1/2 relative flex justify-center md:justify-end bg-[#E8EFFF] md:bg-transparent rounded-[40px] md:rounded-none pt-10 pb-10 md:pt-0 md:pb-0 md:-mt-12 md:-mb-16 lg:pr-10"
          >
            <div className="hidden md:block absolute top-16 left-4 lg:left-4 z-30">
              <Badge01 />
            </div>
            <div className="relative z-20 w-full max-w-[220px] sm:max-w-[240px] md:max-w-[320px] -mt-16 -mb-16 md:m-0">
              <Image
                src="/step1phone.png"
                alt="Fund Wallet"
                width={400}
                height={800}
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="hidden md:block absolute bottom-[15%] -right-[15%] z-30 w-[260px] lg:w-[320px]"
            >
              <div className="w-full drop-shadow-xl">
                <CardSection1 />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={textBlockVariants}
            className="w-full md:w-1/2 flex flex-col justify-center pt-10 md:pt-0 md:px-12 lg:px-20 z-20"
          >
            <div className="flex flex-row items-center justify-center md:justify-start gap-4 md:gap-0 md:block w-full px-2">
              <div className="md:hidden shrink-0">
                <Badge01 isMobile />
              </div>
              <h3 className="text-[26px] sm:text-[28px] md:text-[44px] lg:text-[52px] font-extrabold text-[#1E3A8A] leading-[1.2] md:leading-[1.15] tracking-tight text-left md:text-center md:mb-6">
                Fund Your JustXend <br className="hidden md:block lg:hidden" />{" "}
                Wallet
              </h3>
            </div>
            <p className="md:hidden text-[#64748B] text-[14px] text-center font-medium leading-relaxed mt-4 px-4">
              Seamless Funding with fast and secure transactions
            </p>
            <p className="hidden md:block text-[#475569] text-[16px] lg:text-[17px] text-center font-medium leading-relaxed max-w-[90%] md:max-w-md mx-auto">
              Add money to your Justxend wallet using your local bank or payment
              method. Your balance updates instantly, so you always know exactly
              how much you have available.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={rowVariants}
          className="w-full flex flex-col md:flex-row-reverse items-center md:bg-[#DDE7FF] md:rounded-[50px] lg:rounded-[60px] relative mt-20 md:mt-56 z-10"
        >
          <motion.div
            variants={imageBlockVariants}
            className="w-full md:w-1/2 relative flex justify-center md:justify-start bg-[#E8EFFF] md:bg-transparent rounded-[40px] md:rounded-none pt-10 pb-10 md:pt-0 md:pb-0 md:-mt-12 md:-mb-16 lg:pl-10"
          >
            <div className="hidden md:block absolute top-16 right-4 z-30">
              <Badge02 />
            </div>
            <div className="relative z-20 w-full max-w-[220px] sm:max-w-[240px] md:max-w-[320px] -mt-16 -mb-16 md:m-0">
              <Image
                src="/step2phone.png"
                alt="Currency Conversion"
                width={400}
                height={800}
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
          </motion.div>
          <motion.div
            variants={textBlockVariants}
            className="w-full md:w-1/2 flex flex-col justify-center pt-10 md:pt-0 md:px-12 lg:px-20 z-20"
          >
            <div className="flex flex-row items-center justify-center md:justify-start gap-4 md:gap-0 md:block w-full px-2">
              <div className="md:hidden shrink-0">
                <Badge02 isMobile />
              </div>
              <h3 className="text-[26px] sm:text-[28px] md:text-[44px] lg:text-[50px] font-extrabold text-[#1E3A8A] leading-[1.15] md:leading-[1.15] tracking-tight text-left md:text-center md:mb-6">
                Local Inter currency{" "}
                <br className="hidden md:block lg:hidden" /> conversion
              </h3>
            </div>
            <p className="md:hidden text-[#64748B] text-[14px] text-center font-medium leading-relaxed mt-4 px-4">
              Seamless Funding with fast and secure transactions
            </p>
            <p className="hidden md:block text-[#475569] text-[16px] lg:text-[17px] text-center font-medium leading-relaxed max-w-[90%] md:max-w-md mx-auto">
              Convert your local currency into US Dollars or other global
              currencies instantly. Enjoy highly competitive market rates
              directly within your secure wallet.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={rowVariants}
          className="w-full flex flex-col md:flex-row items-center md:bg-[#DDE7FF] md:rounded-[50px] lg:rounded-[60px] relative mt-20 md:mt-56 z-10"
        >
          <motion.div
            variants={imageBlockVariants}
            className="w-full md:w-1/2 relative flex justify-center md:justify-end bg-[#E8EFFF] md:bg-transparent rounded-[40px] md:rounded-none pt-10 pb-10 md:pt-0 md:pb-0 md:-mt-12 md:-mb-16 lg:pr-10"
          >
            <div className="hidden md:block absolute top-16 left-4 z-30">
              <Badge03 />
            </div>
            <div className="relative z-20 w-full max-w-[220px] sm:max-w-[240px] md:max-w-[320px] -mt-16 -mb-16 md:m-0">
              <Image
                src="/step3phone.png"
                alt="Send Money"
                width={400}
                height={800}
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
          </motion.div>
          <motion.div
            variants={textBlockVariants}
            className="w-full md:w-1/2 flex flex-col justify-center pt-10 md:pt-0 md:px-12 lg:px-20 z-20"
          >
            <div className="flex flex-row items-center justify-center md:justify-start gap-4 md:gap-0 md:block w-full px-2">
              <div className="md:hidden shrink-0">
                <Badge03 isMobile />
              </div>
              <h3 className="text-[26px] sm:text-[28px] md:text-[44px] lg:text-[52px] font-extrabold text-[#1E3A8A] leading-[1.2] md:leading-[1.15] tracking-tight text-left md:text-center md:mb-6">
                Send Money Inter-
                <br className="hidden md:block" />
                Nationally
              </h3>
            </div>
            <p className="md:hidden text-[#64748B] text-[14px] text-center font-medium leading-relaxed mt-4 px-4">
              Seamless Funding with fast and secure transactions
            </p>
            <p className="hidden md:block text-[#475569] text-[16px] lg:text-[17px] text-center font-medium leading-relaxed max-w-[90%] md:max-w-md mx-auto">
              Choose from your saved contacts or add a new recipient. Send funds
              instantly across borders with transparent exchange rates and zero
              hidden fees.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={rowVariants}
          className="w-full flex flex-col md:flex-row-reverse items-center md:bg-[#DDE7FF] md:rounded-[50px] lg:rounded-[60px] relative mt-20 md:mt-56 z-10"
        >
          <motion.div
            variants={imageBlockVariants}
            className="w-full md:w-1/2 relative flex justify-center md:justify-start bg-[#E8EFFF] md:bg-transparent rounded-[40px] md:rounded-none pt-10 pb-10 md:pt-0 md:pb-0 md:-mt-12 md:-mb-16 lg:pl-10"
          >
            <div className="hidden md:block absolute top-16 right-4 z-30">
              <Badge04 />
            </div>
            <div className="relative z-20 w-full max-w-[220px] sm:max-w-[240px] md:max-w-[320px] -mt-16 -mb-16 md:m-0">
              <Image
                src="/step4phone.png"
                alt="Recipient Receives Funds"
                width={400}
                height={800}
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="hidden md:block absolute bottom-[15%] -left-[10%] lg:-left-[15%] z-30 w-[260px] lg:w-[320px]"
            >
              <div className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                <CardSection4 />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={textBlockVariants}
            className="w-full md:w-1/2 flex flex-col justify-center pt-10 md:pt-0 md:px-12 lg:px-20 z-20"
          >
            <div className="flex flex-row items-center justify-center md:justify-start gap-4 md:gap-0 md:block w-full px-2">
              <div className="md:hidden shrink-0">
                <Badge04 isMobile />
              </div>
              <h3 className="text-[26px] sm:text-[28px] md:text-[44px] lg:text-[48px] font-extrabold text-[#1E3A8A] leading-[1.15] md:leading-[1.15] tracking-tight text-left md:text-center md:mb-6">
                Recipient Receives in{" "}
                <br className="hidden md:block lg:hidden" /> local Currency
              </h3>
            </div>
            <p className="md:hidden text-[#64748B] text-[14px] text-center font-medium leading-relaxed mt-4 px-4">
              Seamless Conversion to USDT with real time rate
            </p>
            <p className="hidden md:block text-[#475569] text-[16px] lg:text-[17px] text-center font-medium leading-relaxed max-w-[90%] md:max-w-md mx-auto">
              Your recipient instantly receives the funds in their local
              currency or preferred crypto like USDT, all converted at
              real-time, highly competitive exchange rates.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerCardsContainer}
          className="mt-28 md:mt-40 pt-16 md:pt-20 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 z-10 relative"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-[calc(50%-8px)] sm:w-[240px] md:w-auto md:flex-1 max-w-[320px] bg-[#EEF2FF] rounded-[24px] md:rounded-[32px] p-5 md:p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] duration-300 group"
            >
              <div className="bg-[#3B82F6] w-12 h-12 md:w-16 md:h-14 rounded-[14px] md:rounded-[18px] flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl md:text-2xl drop-shadow-md">
                  {benefit.emoji}
                </span>
              </div>
              <h4 className="text-[#0F172A] text-[15px] sm:text-base md:text-[20px] font-bold mb-2 tracking-tight">
                {benefit.title}
              </h4>
              <p className="text-[#64748B] text-[12px] sm:text-[13px] md:text-[15px] leading-snug md:leading-relaxed max-w-[90%]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const Badge01 = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div
    className={`relative ${isMobile ? "w-[60px] h-[60px]" : "w-16 h-16 lg:w-20 lg:h-20"} bg-[#000533] rounded-full flex items-center justify-center group hover:scale-105 transition-transform duration-300 cursor-default`}
  >
    <div
      className={`absolute inset-0 bg-blue-600/50 rounded-full blur-xl ${isMobile ? "scale-150" : "scale-125"} -z-10`}
    ></div>
    <span
      className={`text-white font-extrabold tracking-tight ${isMobile ? "text-[22px]" : "text-2xl lg:text-3xl"}`}
    >
      01
    </span>
    <div
      className={`absolute ${isMobile ? "-bottom-1 -right-1 w-6 h-6 border-2" : "-bottom-1 -right-1 lg:-bottom-1 lg:-right-2 w-7 h-7 lg:w-9 lg:h-9 border-[3px]"} bg-gradient-to-br from-[#F472B6] to-[#D946EF] rounded-full border-white flex items-center justify-center shadow-md`}
    >
      <svg
        className={`${isMobile ? "w-3 h-3" : "w-3.5 h-3.5 lg:w-4 lg:h-4"} text-white`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    </div>
  </div>
);

const Badge02 = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div
    className={`relative ${isMobile ? "w-[60px] h-[60px]" : "w-16 h-16 lg:w-20 lg:h-20"} bg-[#000533] rounded-full flex items-center justify-center group hover:scale-105 transition-transform duration-300 cursor-default`}
  >
    <div
      className={`absolute inset-0 bg-indigo-600/50 rounded-full blur-xl ${isMobile ? "scale-150" : "scale-125"} -z-10`}
    ></div>
    <span
      className={`text-white font-extrabold tracking-tight ${isMobile ? "text-[22px]" : "text-2xl lg:text-3xl"}`}
    >
      02
    </span>
    <div
      className={`absolute ${isMobile ? "-bottom-1 -right-1 w-6 h-6 border-2" : "-bottom-1 -right-1 lg:-bottom-1 lg:-right-2 w-7 h-7 lg:w-9 lg:h-9 border-[3px]"} bg-gradient-to-br from-[#E879F9] to-[#C026D3] rounded-full border-white flex items-center justify-center shadow-md`}
    >
      <svg
        className={`${isMobile ? "w-3 h-3" : "w-3.5 h-3.5 lg:w-4 lg:h-4"} text-white`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    </div>
  </div>
);

const Badge03 = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div
    className={`relative ${isMobile ? "w-[60px] h-[60px]" : "w-16 h-16 lg:w-20 lg:h-20"} bg-[#000533] rounded-full flex items-center justify-center group hover:scale-105 transition-transform duration-300 cursor-default`}
  >
    <div
      className={`absolute inset-0 bg-purple-600/50 rounded-full blur-xl ${isMobile ? "scale-150" : "scale-125"} -z-10`}
    ></div>
    <span
      className={`text-white font-extrabold tracking-tight ${isMobile ? "text-[22px]" : "text-2xl lg:text-3xl"}`}
    >
      03
    </span>
    <div
      className={`absolute ${isMobile ? "-bottom-1 -right-1 w-6 h-6 border-2" : "-bottom-1 -right-1 lg:-bottom-1 lg:-right-2 w-7 h-7 lg:w-9 lg:h-9 border-[3px]"} bg-gradient-to-br from-[#C084FC] to-[#9333EA] rounded-full border-white flex items-center justify-center shadow-md`}
    >
      <svg
        className={`${isMobile ? "w-3 h-3 translate-x-[-1px] translate-y-[1px]" : "w-3.5 h-3.5 lg:w-4 lg:h-4 translate-x-[-1px] translate-y-[1px]"} text-white`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    </div>
  </div>
);

const Badge04 = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div
    className={`relative ${isMobile ? "w-[60px] h-[60px]" : "w-16 h-16 lg:w-20 lg:h-20"} bg-[#000533] rounded-full flex items-center justify-center group hover:scale-105 transition-transform duration-300 cursor-default`}
  >
    <div
      className={`absolute inset-0 bg-blue-600/50 rounded-full blur-xl ${isMobile ? "scale-150" : "scale-125"} -z-10`}
    ></div>
    <span
      className={`text-white font-extrabold tracking-tight ${isMobile ? "text-[22px]" : "text-2xl lg:text-3xl"}`}
    >
      04
    </span>
    <div
      className={`absolute ${isMobile ? "-bottom-1 -right-1 w-6 h-6 border-2" : "-bottom-1 -right-1 lg:-bottom-1 lg:-right-2 w-7 h-7 lg:w-9 lg:h-9 border-[3px]"} bg-gradient-to-br from-[#F472B6] to-[#D946EF] rounded-full border-white flex items-center justify-center shadow-md`}
    >
      <svg
        className={`${isMobile ? "w-3 h-3 translate-x-[-1px] translate-y-[1px]" : "w-3.5 h-3.5 lg:w-4 lg:h-4 translate-x-[-1px] translate-y-[1px]"} text-white`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    </div>
  </div>
);
