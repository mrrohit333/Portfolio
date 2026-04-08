"use client";

import { motion } from "framer-motion";
import { TrendingUp, MousePointerClick, Gem } from "lucide-react";

const approaches = [
  {
    icon: <MousePointerClick className="w-8 h-8 text-accent" />,
    title: "Ad Integration",
    description: "Strategic placement of Google AdSense and Adsterra scripts without compromising user experience. Focus on high-CTR zones while maintaining core ADA compliance and layout stability."
  },
  {
    icon: <Gem className="w-8 h-8 text-secondary" />,
    title: "Payment Systems",
    description: "Robust implementation of Razorpay for SaaS subscriptions and credit-based micropayments. Secure webhook handling, user authentication, and seamless checkout flows."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Revenue-First Design",
    description: "Building products with monetization in mind from day one. I map out user journeys to identify natural friction points where premium features or unobtrusive ads provide maximum value."
  }
];

export const Monetization = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-6">
            The Differentiator
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Product Thinking & <span className="text-gradient">Monetization</span>
          </h2>
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
            Code is just the tool. The goal is to build sustainable, revenue-generating products that solve real problems. Here is my approach to SaaS monetization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all duration-300"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full group-hover:bg-accent/20 transition-colors duration-500" />
              
              <div className="mb-6 bg-background/50 w-16 h-16 rounded-xl flex items-center justify-center border border-card-border backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                {approach.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{approach.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
