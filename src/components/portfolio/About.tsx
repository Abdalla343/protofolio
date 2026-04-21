import { motion } from "framer-motion";
import { Code2, Layers, Server, Database, Zap, Globe } from "lucide-react";

const skills = {
  Frontend: ["React", "Next.js", "React Native", "Redux", "Tailwind CSS", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express", "PHP", "REST APIs", "JWT", "OOP"],
  Database: ["MySQL", "Sequelize ORM", "Firebase Firestore"],
  "Tools & DevOps": ["Git & GitHub", "cPanel", "VPS Deployment", "SSL", "Vite"],
  "APIs & Integrations": ["OpenAI API", "Zoom API", "Google Sheets", "Payment Gateways", "POS Systems"],
};

const stats = [
  { icon: Code2, value: "10+", label: "Projects shipped" },
  { icon: Layers, value: "5+", label: "Industries served" },
  { icon: Server, value: "Full", label: "Stack expertise" },
  { icon: Zap, value: "24/7", label: "Dedication" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="mono text-sm text-primary mb-3">// about me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering products that <span className="text-gradient">people love</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a Software Engineer based in Cairo, Egypt, specializing in building modern web
            and cross-platform mobile applications. Graduate of the Information Technology
            Institute (ITI) and AAST Computer Science. I deliver full-stack solutions for
            education, fitness, and e-commerce sectors with a sharp eye on performance,
            scalability, and user experience.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition-colors"
            >
              <s.icon className="w-6 h-6 text-primary mb-4" />
              <div className="text-3xl font-bold font-display mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="mono text-sm text-primary mb-3">// skills & tech stack</p>
          <h3 className="text-3xl md:text-4xl font-bold">Tools I work with</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 group hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {category === "Frontend" && <Globe className="w-5 h-5 text-primary" />}
                  {category === "Backend" && <Server className="w-5 h-5 text-primary" />}
                  {category === "Database" && <Database className="w-5 h-5 text-primary" />}
                  {category === "Tools & DevOps" && <Code2 className="w-5 h-5 text-primary" />}
                  {category === "APIs & Integrations" && <Zap className="w-5 h-5 text-primary" />}
                </div>
                <h4 className="font-display font-semibold">{category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="mono text-xs px-3 py-1.5 rounded-lg bg-secondary/60 border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
