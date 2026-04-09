"use client";

import { motion } from "framer-motion";
import { Trophy, Award, GraduationCap, Medal, Star, CheckCircle2 } from "lucide-react";

const achievements = [
  {
    title: "Excel x Payoda 25 Hackathon",
    subtitle: "2nd Prize Winner",
    description: "Awarded for innovative product development and rapid prototyping in a competitive setting.",
    icon: <Trophy className="w-8 h-8 text-accent" />,
    color: "from-cyan-500/20 to-blue-500/20",
    glow: "shadow-[0_0_30px_rgba(0,240,255,0.2)]"
  },
  {
    title: "NPTEL Certification",
    subtitle: "Computing Using Python",
    description: "Completed 'The Joy of Computing Using Python' with elite distinction scores.",
    icon: <Award className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-pink-500/20",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]"
  },
  {
    title: "Wipro Certification",
    subtitle: "Foundation of AI",
    description: "Successfully mastered core AI concepts through the Wipro certified AI foundation program.",
    icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/20 to-cyan-500/20",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]"
  },
  {
    title: "HackerRank SQL",
    subtitle: "Certified Professional",
    description: "Verified SQL (Basic) proficiency with a record of consistent high-rank problem solving.",
    icon: <Medal className="w-8 h-8 text-yellow-400" />,
    color: "from-yellow-500/20 to-orange-500/20",
    glow: "shadow-[0_0_30px_rgba(234,179,8,0.2)]"
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Star className="w-4 h-4" /> Milestones
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group glass-card p-8 rounded-3xl bg-gradient-to-br ${item.color} border border-white/10 hover:border-accent/40 transition-all duration-500 ${item.glow}`}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-card-bg border border-white/5 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-accent/50" />
                  </div>
                  <p className="text-accent text-sm font-semibold mb-3 tracking-wide uppercase">
                    {item.subtitle}
                  </p>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
