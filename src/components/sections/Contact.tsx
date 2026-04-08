"use client";

import { motion } from "framer-motion";
import { Mail, SendHorizontal } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { AnimatedButton } from "../ui/AnimatedButton";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-md">
            Whether you need a scalable SaaS MVP built from scratch, or an AI-powered module integrated into your existing project, my inbox is always open.
          </p>
          
          <div className="flex gap-4">
            {[
              { icon: <Mail className="w-6 h-6" />, href: "mailto:mrrohit072@gmail.com" },
              { icon: <FaWhatsapp className="w-6 h-6" />, href: "https://wa.me/916379651694" },
              { icon: <FaLinkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/rohit-s-47230728b/" },
              { icon: <FaGithub className="w-6 h-6" />, href: "https://github.com/mrrohit333" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-accent hover:border-accent/50 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card flex flex-col gap-6 h-full p-2 overflow-hidden relative">
            <iframe
              title="My Location"
              src="https://maps.google.com/maps?q=11.257993,77.897733&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px] md:h-full rounded-xl border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
