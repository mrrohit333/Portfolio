"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Vibe Coding Community Builder Intern",
    company: "One Compiler",
    location: "Remote",
    period: "Aug 2025 - Sep 2025",
    description: "Organized and guided 50+ students in building and publishing apps on the OneCompiler platform. Built a collaborative learning community, improving coding adoption among students.",
    tech: ["Community Building", "Leadership", "App Publishing", "Mentorship"]
  },
  {
    role: "Web Scraping Intern",
    company: "Data Patterns",
    location: "Remote",
    period: "Mar 2025 - Apr 2025",
    description: "Developed an automated web scraping system using Python and Selenium to extract research paper data. Scraped and structured metadata including titles, authors, abstracts, and publication details from IEEE sources. Handled dynamic web elements, pagination, and browser automation workflows.",
    tech: ["Python", "Selenium", "Web Scraping", "Data Extraction", "Automation"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            My Journey
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-primary/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline node */}
                <div className="absolute left-[-5px] md:left-[27px] top-2 w-[12px] h-[12px] rounded-full bg-accent shadow-[0_0_15px_rgba(0,240,255,0.8)] z-10" />
                <div className="absolute left-[-11px] md:left-[21px] top-[2px] w-[24px] h-[24px] rounded-full border border-accent/30 bg-background z-0" />

                <div className="glass-card group hover:border-accent/40 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-2 text-foreground/70 font-medium">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 text-sm text-foreground/50 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-background/50 border border-card-border rounded-full text-xs text-foreground/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
