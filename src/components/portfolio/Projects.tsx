import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import arabfilm from "@/assets/project-arabfilm.jpg";
import takwin from "@/assets/project-takwin.jpg";
import waset from "@/assets/project-waset.jpg";
import vendorflow from "@/assets/project-vendorflow.jpg";

const projects = [
  {
    title: "ArabFilmDB",
    subtitle: "Movie Database Website",
    description:
      "Modern responsive movie database with dynamic content loading via REST APIs, smooth client-side routing, global state management and SEO-friendly structure.",
    tech: ["React", "Vite", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
    image: arabfilm,
    live: "#",
    github: "#",
    accent: "from-primary to-accent-violet",
  },
  {
    title: "Takwin",
    subtitle: "Cross-Platform Full-Stack App",
    description:
      "Mobile and web platform with secure JWT-authenticated REST API, subscription and payment integration for premium features, built on a clean scalable architecture.",
    tech: ["React Native", "Node.js", "Express", "MySQL", "JWT", "Redux"],
    image: takwin,
    live: "#",
    github: "#",
    accent: "from-accent-violet to-accent-pink",
  },
  {
    title: "Waset",
    subtitle: "Community Web Application",
    description:
      "Community platform with auth, dashboards, posts/comments, real-time messaging via Firestore, integrated AI chat assistant and interactive map features.",
    tech: ["React", "Vite", "Firebase", "Redux", "OpenAI API"],
    image: waset,
    live: "#",
    github: "#",
    accent: "from-primary to-accent-pink",
  },
  {
    title: "VendorFlow",
    subtitle: "Vendor & Procurement Portal",
    description:
      "PHP/MySQL web application for vendor registration, role-based dashboards, document verification, agreement management and procurement workflows.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    image: vendorflow,
    live: "#",
    github: "#",
    accent: "from-accent-violet to-primary",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <p className="mono text-sm text-primary mb-3">// selected work</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            A curated selection of projects I've designed and engineered from concept to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-20 group-hover:opacity-40 transition-opacity z-10`} />
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="mono text-xs text-primary mb-1">{p.subtitle}</p>
                    <h3 className="text-2xl md:text-3xl font-bold font-display">{p.title}</h3>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground hover:shadow-glow transition-all hover:scale-110"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="mono text-[11px] px-2.5 py-1 rounded-md bg-secondary/60 border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
