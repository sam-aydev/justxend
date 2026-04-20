"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

export default function HelpCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    const promise = emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    );

    toast.promise(promise, {
      loading: "Sending your message...",
      success: () => {
        setStatus("sent");
        return "Message sent successfully!";
      },
      error: () => {
        setStatus("idle");
        return "Failed to send message. Please try again.";
      },
    });

    try {
      await promise;
    } catch (error) {
      setStatus("idle");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-inter">
      <Toaster position="top-center" richColors />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-[320px] sm:w-[380px] max-h-[80vh] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden flex flex-col transition-colors duration-500"
          >
            <div className="bg-[#00174D] p-6 text-white relative shrink-0 border-b border-gray-100">
              <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-blue-400/10 blur-3xl rounded-full" />
              <h3 className="text-xl font-bold relative z-10">Help Center</h3>
              <p className="text-blue-100/60 text-xs mt-1 relative z-10">
                Typically responds in a few hours
              </p>
            </div>

            <div className="overflow-y-auto flex-1 custom-scrollbar bg-white">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Message Sent!
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      We've received your message and our team will get back to
                      you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setIsOpen(false);
                      }}
                      className="bg-[#00174D] text-white px-6 py-2 rounded-full font-bold text-sm mt-4 hover:opacity-90 transition-opacity"
                    >
                      Close Window
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 space-y-4"
                  >
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                        Full Name
                      </label>
                      <input
                        name="user_name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00174D] transition-all text-gray-900 text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                        Email Address
                      </label>
                      <input
                        name="user_email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00174D] transition-all text-gray-900 text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                        Subject
                      </label>
                      <input
                        name="subject"
                        type="text"
                        required
                        placeholder="How can we help?"
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00174D] transition-all text-gray-900 text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        required
                        placeholder="Tell us more..."
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00174D] transition-all text-gray-900 text-sm resize-none"
                      />
                    </div>

                    <button
                      disabled={status === "sending"}
                      className="w-full bg-[#00174D] text-white font-bold py-3.5 rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                    >
                      {status === "sending" ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 shadow-black  h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen
            ? "bg-gray-100 dark:bg-[#1A1A1A] text-[#00174D] dark:text-white rotate-0"
            : "bg-[#00174D] bg-white text-black"
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}