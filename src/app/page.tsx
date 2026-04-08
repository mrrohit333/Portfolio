import { CustomCursor } from "@/components/ui/CustomCursor";
import { CyberLoader } from "@/components/ui/CyberLoader";
import { ThreeBackground } from "@/components/ui/ThreeBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Monetization } from "@/components/sections/Monetization";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden pt-10 md:pt-0">
      <CyberLoader />
      <CustomCursor />
      <ThreeBackground />
      
      {/* Dynamic background lighting for the whole page */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute top-[20%] right-[-10%] w-[50vh] h-[50vh] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[60vh] h-[60vh] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <Hero />
      <div className="relative z-10 space-y-10 md:space-y-0">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Monetization />
        <Contact />
      </div>

      <footer className="py-8 text-center text-foreground/50 text-sm border-t border-card-border mt-20 relative z-10 glass rounded-t-3xl">
        <p>© {new Date().getFullYear()} Rohit. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with Next.js & Framer Motion</p>
      </footer>
    </main>
  );
}
