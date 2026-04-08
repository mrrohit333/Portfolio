"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scanMessages = [
  "INITIALIZING SECURE PROTOCOL...",
  "LOCATING CLIENT NODE...",
  "SCANNING BIOMETRICS...",
  "ANALYZING NEURAL PATTERNS...",
  "CHECKING CLEARANCE LEVEL...",
  "DECRYPTING PAYLOAD..."
];

export const CyberLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Check if user already scanned this session
    const hasScanned = sessionStorage.getItem("hasScanned");
    if (hasScanned) {
      onComplete?.();
      return;
    }

    // Only make it visible once we confirm it's a first-time load 
    // to prevent any hydration flashes on subsequent refreshes!
    setIsVisible(true);

    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Cycle random messages
    const messageInterval = setInterval(() => {
      setTextIndex(Math.floor(Math.random() * scanMessages.length));
    }, 150);

    // Stop scanning and show success
    const verifyTimeout = setTimeout(() => {
      clearInterval(messageInterval);
      setIsVerified(true);
    }, 2000);

    // Complete and remove loader
    const finishTimeout = setTimeout(() => {
      sessionStorage.setItem("hasScanned", "true");
      setIsVisible(false);
      document.body.style.overflow = "unset";
      onComplete?.();
    }, 3800);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(verifyTimeout);
      clearTimeout(finishTimeout);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014] overflow-hidden"
        >
          {/* Scanning Line overlay */}
          <motion.div
            animate={{ top: ["-10%", "110%", "-10%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[3px] bg-accent/80 shadow-[0_0_30px_rgba(0,240,255,1)] z-10"
          />

          <div className="font-mono text-center z-20 px-6">
            {!isVerified ? (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 border-4 border-t-accent border-r-transparent border-b-primary border-l-transparent rounded-full animate-spin" />
                <p className="text-accent text-xl md:text-2xl tracking-[0.2em] font-light mt-6">
                  {scanMessages[textIndex]}
                </p>
                <p className="text-xs md:text-sm text-foreground/40 uppercase tracking-widest mt-2 animate-pulse">
                  System Override in Progress
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="verified"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="text-green-500 mb-2">
                  <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-green-400 text-xl md:text-2xl tracking-widest font-light shadow-green-400/50 drop-shadow-lg">
                  VERIFIED: YOU ARE A GOOD HUMAN
                </p>
                <p className="text-green-500/60 text-sm tracking-widest uppercase mt-2">
                  Access Granted
                </p>
              </motion.div>
            )}
          </div>
          
          {/* Grid background effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
