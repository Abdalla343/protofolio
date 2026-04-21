import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Freelance Full-stack Developer",
    org: "Self-employed",
    period: "Sep 2024 — Present",
    points: [
      "Developed and launched web/mobile apps using React, React Native, Node.js, MySQL & Sequelize ORM.",
      "Implemented real-time features, authentication, role-based access and dynamic dashboards.",
      "Delivered full-stack projects for education, fitness and e-commerce clients.",
    ],
  },
  {
    type: "edu",
    title: "Frontend & Mobile Cross-Platform Diploma",
    org: "Information Technology Institute (ITI)",
    period: "May 2024 — Aug 2024",
    points: [
      "4-month intensive diploma in Software Development.",
      "4-month diploma in Front-End and Mobile Cross-Platform Development.",
    ],
  },
  {
    type: "edu",
    title: "B.Sc. Computer Science",
    org: "Arab Academy for Science, Technology & Maritime Transport (AAST)",
    period: "Oct 2018 — Jul 2022",
    points: [
      "Bachelor's degree in Computer Science with focus on software engineering fundamentals.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="mono text-sm text-primary mb-3">// journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent-violet to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gradient-primary glow-primary z-10 ring-4 ring-background" />

                <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all">
                    <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        {item.type === "work" ? (
                          <Briefcase className="w-4 h-4 text-primary" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <span className="mono text-xs text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display mb-1">{item.title}</h3>
                    <p className="text-primary text-sm mb-4">{item.org}</p>
                    <ul className={`space-y-2 text-sm text-muted-foreground ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {item.points.map((pt, k) => (
                        <li key={k}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
