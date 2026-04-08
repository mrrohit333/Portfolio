"use client";

import { motion } from "framer-motion";
import { 
  TerminalSquare, 
  Database, 
  Brain, 
  Bot, 
  Cpu, 
  Sparkles, 
  Cloud, 
  Server, 
  BadgeDollarSign, 
  Banknote,
  PieChart,
  TableProperties,
  Search,
  Code2,
  SendHorizontal
} from "lucide-react";
import { 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiOpenai, 
  SiGooglegemini, 
  SiGithub, 
  SiMongodb, 
  SiVercel, 
  SiRender,
  SiPostman
} from "react-icons/si";
import { TbBrandVscode, TbBrandGoogleAnalytics } from "react-icons/tb";
import { FiDatabase, FiFileText } from "react-icons/fi";

const skillCategories = [
  {
    title: "Core Tech",
    icon: <TerminalSquare className="w-6 h-6 text-accent" />,
    skills: [
      { name: "Python", i: <SiPython className="w-4 h-4 text-[#3776AB]" /> },
      { name: "SQL", i: <FiDatabase className="w-4 h-4 text-[#336791]" /> },
      { name: "Power BI", i: <TbBrandGoogleAnalytics className="w-4 h-4 text-[#F2C811]" /> },
      { name: "MS Excel", i: <FiFileText className="w-4 h-4 text-[#217346]" /> },
      { name: "Web Scraping", i: <Search className="w-4 h-4 text-accent" /> },
      { name: "AI/ML", i: <Brain className="w-4 h-4 text-primary" /> },
      { name: "React/Next.js", i: <div className="flex gap-1"><SiReact className="w-4 h-4 text-[#61DAFB]" /><SiNextdotjs className="w-4 h-4 text-white" /></div> }
    ]
  },
  {
    title: "AI Tools",
    icon: <Bot className="w-6 h-6 text-accent" />,
    skills: [
      { name: "ChatGPT HQ", i: <SiOpenai className="w-4 h-4 text-[#10A37F]" /> },
      { name: "Claude", i: <Sparkles className="w-4 h-4 text-[#D97757]" /> },
      { name: "Gemini", i: <SiGooglegemini className="w-4 h-4 text-[#8E75B2]" /> },
      { name: "Antigravity", i: <Sparkles className="w-4 h-4 text-accent" /> },
      { name: "Cursor IDE", i: <TbBrandVscode className="w-4 h-4 text-white" /> },
      { name: "v0 & Lovable", i: <Cpu className="w-4 h-4 text-foreground" /> },
      { name: "RAG Systems", i: <Brain className="w-4 h-4 text-primary" /> }
    ]
  },
  {
    title: "Dev & Deploy",
    icon: <Cloud className="w-6 h-6 text-accent" />,
    skills: [
      { name: "VS Code", i: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
      { name: "Postman", i: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
      { name: "Vercel & Render", i: <div className="flex gap-1"><SiVercel className="w-4 h-4 text-white" /><SiRender className="w-4 h-4 text-[#46E3B7]" /></div> },
      { name: "MongoDB", i: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
      { name: "Git/GitHub", i: <SiGithub className="w-4 h-4 text-white" /> }
    ]
  },
  {
    title: "Monetization",
    icon: <BadgeDollarSign className="w-6 h-6 text-accent" />,
    skills: [
      { name: "Google AdSense", i: <BadgeDollarSign className="w-4 h-4 text-[#EA4335]" /> },
      { name: "Adsterra", i: <Banknote className="w-4 h-4 text-[#25D366]" /> },
      { name: "Razorpay", i: <Banknote className="w-4 h-4 text-[#3399CC]" /> }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
            A curated stack designed for building scalable, AI-powered, and highly monetizable digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="glass-card group relative overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,240,255,0.15)] block"
              >
                {/* Glow Background effect */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-accent/20 blur-2xl group-hover:bg-accent/40 transition-colors duration-500" />
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-2 rounded-lg bg-primary/30 text-accent">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <ul className="space-y-3 relative z-10">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill.name}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors group/item"
                    >
                      <span className="drop-shadow-sm opacity-90 group-hover/item:opacity-100 transition-opacity">{skill.i}</span>
                      <span className="font-medium">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
