"use client";

import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const AnimatedButton = ({
  variant = "primary",
  children,
  className,
  icon,
  ...props
}: AnimatedButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    // Apply a weak magnetic pull
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 overflow-hidden transition-all duration-300";
  
  const variants = {
    primary: "bg-accent text-background hover:bg-accent-hover shadow-[0_0_20px_rgba(0,240,255,0.4)]",
    secondary: "bg-primary text-foreground hover:bg-primary/80",
    outline: "border border-accent/50 text-accent hover:border-accent hover:bg-accent/10 glass",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(baseStyles, variants[variant], className)}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="w-5 h-5">{icon}</span>}
      </span>
      {variant === "primary" && (
        <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </motion.button>
  );
};
