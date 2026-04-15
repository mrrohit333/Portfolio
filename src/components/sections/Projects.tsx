"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Code2, Sparkles, DollarSign, Smartphone, Database, Layers } from "lucide-react";
import Image from "next/image";
import { AnimatedButton } from "../ui/AnimatedButton";

type ProjectType = {
  title: string;
  category: "SaaS" | "Mobile" | "Web App" | "AI";
  description: string;
  tech: string[];
  tags: string[];
  badges: Array<{ label: string; icon: React.ReactNode }>;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  apkUrl?: string;
};

const projectsData: ProjectType[] = [
  {
    title: "ImageBulk",
    category: "SaaS",
    description: "A comprehensive SaaS platform for bulk downloading premium images with integrated Adsterra ads and Razorpay payment gateway for credit top-ups.",
    tech: ["Next.js", "Node.js", "Razorpay", "Tailwind"],
    tags: ["SaaS", "Monetized", "Full Stack"],
    badges: [
      { label: "SaaS Product", icon: <Layers className="w-3 h-3" /> },
      { label: "Monetized", icon: <DollarSign className="w-3 h-3" /> },
    ],
    colSpan: 2,
    rowSpan: 1,
    githubUrl: "https://github.com/mrrohit333/imagebulk",
    demoUrl: "https://imagebulk-downloader.vercel.app/",
    apkUrl: "https://apkpure.com/imagebulk/com.mobile",
    image: "/projects/imagebulk.png"
  },
  {
    title: "GameBooster",
    category: "Mobile",
    description: "A React Native Android application designed to optimize mobile gaming performance by injecting custom configuration files using Storage Access Framework.",
    tech: ["React Native", "Java", "Android SAF"],
    tags: ["Mobile", "System"],
    badges: [
      { label: "Mobile App", icon: <Smartphone className="w-3 h-3" /> },
    ],
    colSpan: 1,
    rowSpan: 2,
    githubUrl: "https://github.com/mrrohit333/gamebooster",
    apkUrl: "/gamebooster.apk",
    image: "/projects/gamebooster.png"
  },
  {
    title: "AI RAG Q&A Bot",
    category: "AI",
    description: "An intelligent question-answering system built using Retrieval-Augmented Generation (RAG) to provide contextual answers from custom knowledge bases.",
    tech: ["Python", "LangChain", "Vector DB", "OpenAI"],
    tags: ["AI", "NLP"],
    badges: [
      { label: "AI Powered", icon: <Sparkles className="w-3 h-3" /> },
    ],
    colSpan: 1,
    rowSpan: 1,
    githubUrl: "https://github.com/mrrohit333/RAG",
    image: "/projects/ai_qa_bot.png"
  },
  {
    title: "GradeMaster",
    category: "Web App",
    description: "A highly accessible and responsive dashboard application for universities to calculate and track student CGPA/SGPA with integrated ADA compliance.",
    tech: ["React", "CSS Modules", "Accessibility API"],
    tags: ["Web App", "Dashboard"],
    badges: [
      { label: "Web Product", icon: <Database className="w-3 h-3" /> },
    ],
    colSpan: 1,
    rowSpan: 1,
    githubUrl: "https://github.com/mrrohit333/Calculator",
    demoUrl: "https://gradus-calculator.vercel.app/",
    image: "/projects/grademaster.png"
  },
  {
    title: "3D AI Student Partner",
    category: "AI",
    description: "An interactive, browser-based 3D avatar that acts as a study partner, integrating AI models for conversational learning and 3D web rendering.",
    tech: ["Three.js", "Web Speech API", "LLMs"],
    tags: ["AI", "3D", "Education"],
    badges: [
      { label: "AI Powered", icon: <Sparkles className="w-3 h-3" /> },
    ],
    colSpan: 2,
    rowSpan: 1,
    githubUrl: "https://github.com/mrrohit333/Edumate",
    image: "/projects/ai_3d_avatar.png"
  },
];

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full"></div>
            <p className="mt-6 text-foreground/60 max-w-xl">
              A collection of scalable products, AI systems, and mobile applications engineered with a strong focus on monetization and user experience.
            </p>
          </div>
          <div className="flex gap-2">
             <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm">Slide / Grid View</div>
          </div>
        </motion.div>

        {/* Desktop Grid Layout (Bento Grid Style), Mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:auto-rows-[320px]">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl glass border border-card-border/50 hover:border-accent/40 transition-colors duration-500 flex flex-col min-h-[350px] md:min-h-0
                ${project.colSpan === 2 ? 'md:col-span-2' : 'col-span-1'}
                ${project.rowSpan === 2 ? 'md:row-span-2' : 'col-span-1'}
              `}
            >
              {/* Project Image Background */}
              {project.image && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105 mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
              )}

              {/* Card Background / Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0 opacity-50 group-hover:from-primary/20 transition-colors duration-500" />
              
              <div className="relative z-10 w-full h-full flex flex-col p-6 md:p-8">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-8 md:mb-auto">
                  {project.badges.map(b => (
                    <span key={b.label} className="px-3 py-1 rounded-full bg-background/50 border border-card-border text-xs font-medium flex items-center gap-1.5 backdrop-blur-md">
                      <span className="text-accent">{b.icon}</span>
                      {b.label}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Content Wrapper */}
                <div className="mt-auto relative">
                  {/* Title and Tech - shifts up on hover only on desktop */}
                  <div className="transform transition-transform duration-500 md:group-hover:-translate-y-[130px]">
                    <h3 className="text-2xl font-bold text-foreground mb-2 shadow-sm">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs md:text-sm text-foreground/60 p-1 bg-background/20 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover Reveal Content - visible by default on mobile, hover on desktop */}
                  <div className="mt-6 md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0 md:translate-y-4 md:opacity-0 md:pointer-events-none md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                    <p className="text-foreground/80 text-sm mb-4 line-clamp-3 md:line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <a href={project.demoUrl} className="flex-1" target="_blank" rel="noopener noreferrer">
                          <button className="w-full py-2.5 rounded-xl bg-accent text-background text-sm font-semibold flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                            <ExternalLink className="w-4 h-4" /> Demo
                          </button>
                        </a>
                      )}
                      {project.apkUrl && (
                        <a href={project.apkUrl} download className="flex-1" target="_blank" rel="noopener noreferrer">
                          <button className="w-full py-2.5 rounded-xl bg-purple-500/20 text-purple-300 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-purple-500/40 transition-colors border border-purple-500/30">
                            <Smartphone className="w-4 h-4" /> APK
                          </button>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="flex-1" target="_blank" rel="noopener noreferrer">
                          <button className="w-full py-2.5 rounded-xl bg-primary/50 text-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary transition-colors border border-primary/50">
                            <Code2 className="w-4 h-4" /> Code
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
