"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Rocket, CreditCard, GraduationCap, BookOpen, ScrollText } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Projects Delivered", value: "20+", icon: <Rocket className="w-5 h-5 text-accent" /> },
  { label: "SaaS Built", value: "5", icon: <BrainCircuit className="w-5 h-5 text-accent" /> },
  { label: "Monetized Apps", value: "4", icon: <CreditCard className="w-5 h-5 text-accent" /> },
  { label: "Core Skills", value: "15+", icon: <Code2 className="w-5 h-5 text-accent" /> },
];

const education = [
  {
    period: "2022 - 2026",
    degree: "B.Tech (AI & DS)",
    score: "CGPA : 8.7",
    icon: <GraduationCap className="w-4 h-4 text-accent" />
  },
  {
    period: "2021 - 2022",
    degree: "HSC",
    score: "Percentage : 65%",
    icon: <ScrollText className="w-4 h-4 text-accent" />
  },
  {
    period: "2019 - 2020",
    degree: "SSLC",
    score: "Percentage : 64%",
    icon: <BookOpen className="w-4 h-4 text-accent" />
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center group"
          >
            <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden glass z-10 transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              {/* User Profile Image */}
              <div className="w-full h-full bg-primary/10 flex flex-col justify-end p-6 z-20 relative">
                <div className="w-full h-full absolute inset-0 bg-[url('/profile.png')] bg-cover bg-top group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#030014] to-transparent z-10" />
                <h3 className="text-2xl font-bold relative z-20 shadow-black drop-shadow-md">ROHIT</h3>
                <p className="text-accent text-sm font-medium relative z-20">Engineer & Creator</p>
              </div>
            </div>
            
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[420px] bg-accent/20 rounded-2xl blur-[40px] -z-10 transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="glass-card leading-relaxed text-foreground/80 text-lg md:text-base">
              <p className="mb-4">
                I’m an <strong className="text-foreground" style={{color: "#00f0ff"}}>AI Engineer & Full Stack Developer</strong> who builds real-world, scalable products powered by intelligent systems.
              </p>
              <p className="mb-4">
              From creating AI-driven applications and smart chatbots to launching full-stack web and mobile apps, I focus on turning ideas into practical, usable products.
              </p>
              <p>
               With a product-first mindset, I combine AI, automation, and monetization strategies to build software that is not just functional—but impactful and ready for real users.
              </p>
            </div>

            {/* Education Section */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" /> Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-background/30 border border-white/5 hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        {edu.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <span className="text-xs text-foreground/50 font-mono tracking-widest">{edu.period}</span>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 text-accent font-medium text-sm bg-accent/10 px-3 py-1 rounded-full w-fit">
                      {edu.score}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="glass-card hover-trigger p-4 text-center flex flex-col items-center justify-center gap-2 group hover:bg-white/5 cursor-default"
                >
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-accent/20 transition-colors">
                    {stat.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{stat.value}</h4>
                  <p className="text-[10px] text-foreground/60 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};