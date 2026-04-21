import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/abdalla-portrait.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1280}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent-violet/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — Text */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
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
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6"
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
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Software Engineer & Full-stack Developer crafting performant web and mobile
              apps with <span className="text-foreground">React</span>,{" "}
              <span className="text-foreground">React Native</span>, and{" "}
              <span className="text-foreground">Node.js</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-10"
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
              className="flex items-center lg:justify-start justify-center gap-3"
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:eng.abdalla.ahmed99@gmail.com", label: "Email" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 hover:scale-110 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Portrait */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-full lg:max-w-md aspect-[4/5]"
            >
              {/* Glow halos */}
              <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-[2rem] animate-glow" />
              <div
                className="absolute -inset-2 bg-gradient-accent opacity-20 blur-2xl rounded-[2rem]"
                style={{ animationDelay: "1.5s" }}
              />

              {/* Floating frame */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full rounded-[2rem] overflow-hidden glass-strong shadow-elegant"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <img
                  src={portrait}
                  alt="Abdalla Ahmed Mohamed — Software Engineer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
                />

                {/* Color blend overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent-violet/30 mix-blend-overlay" />
                {/* Dark gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                {/* Subtle inner border */}
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />

                {/* Floating mono tag */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 px-4 py-3 rounded-xl glass-strong mono text-xs"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-glow" />
                    Abdalla Ahmed
                  </span>
                  <span className="text-muted-foreground">{"<dev />"}</span>
                </motion.div>
              </motion.div>

              {/* Floating chips */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="hidden md:flex absolute -left-6 top-10 px-3 py-2 rounded-xl glass-strong mono text-xs items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                React • RN
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="hidden md:flex absolute -right-4 bottom-24 px-3 py-2 rounded-xl glass-strong mono text-xs items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                Node.js
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2"
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
