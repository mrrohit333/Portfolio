"use client";

import { motion } from "framer-motion";
import { ChevronRight, Mail } from "lucide-react";
import { AnimatedButton } from "../ui/AnimatedButton";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const statuses = [
  "🚀 Seeking Opportunities",
  "💼 Available for Freelance Work",
  "🤖 Building AI SaaS Products",
  "🌍 Open to Remote Work",
];

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block w-[3px] h-[1em] bg-accent align-middle"
      />
    </span>
  );
};

export const Hero = () => {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background Mesh/Gradient Animation using Framer Motion */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[50vh] h-[50vh] bg-primary/40 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-[60vh] h-[60vh] bg-accent/20 rounded-full blur-[150px]"
        />
        {/* Removed opaque background overlay so Three.js particles show through */}
        <div className="absolute inset-0 bg-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-accent text-sm font-medium mb-6">
            Welcome to my universe
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-2"
        >
          Hi, I&apos;m Rohit <br />
          <span className="text-gradient">AI Engineer | Full Stack Developer</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-12 overflow-hidden mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={statuses[statusIndex]}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="text-xl md:text-2xl text-accent font-medium tracking-wide flex items-center justify-center gap-2"
            >
              <span className="bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                {statuses[statusIndex]}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 h-16 md:h-auto"
        >
          <TypewriterText text="AI Product Builder crafting scalable SaaS applications with real-world monetization" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#projects" className="w-full sm:w-auto">
            <AnimatedButton className="w-full" icon={<ChevronRight />}>
              View Projects
            </AnimatedButton>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <AnimatedButton variant="outline" className="w-full" icon={<Mail />}>
              Contact Me
            </AnimatedButton>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};
