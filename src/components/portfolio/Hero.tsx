import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent-violet/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mono text-xs mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-glow" />
            <Sparkles className="w-3 h-3 text-primary" />
            Available for freelance projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
          >
            Hi, I'm <span className="text-gradient">Abdalla</span>
            <br />
            <span className="text-foreground/90">I build digital</span>
            <br />
            <span className="text-gradient-accent">experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Software Engineer & Full-stack Developer crafting performant web and mobile
            apps with <span className="text-foreground">React</span>, <span className="text-foreground">React Native</span>, and <span className="text-foreground">Node.js</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all hover:scale-105"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass-strong font-semibold hover:bg-white/10 transition-all"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-3"
          >
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:eng.abdalla.ahmed99@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 hover:scale-110 transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
