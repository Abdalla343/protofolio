import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    { icon: Mail, label: "Email", value: "eng.abdalla.ahmed99@gmail.com", href: "mailto:eng.abdalla.ahmed99@gmail.com" },
    { icon: Phone, label: "Phone", value: "+20 112 226 1497", href: "tel:+201122261497" },
    { icon: MapPin, label: "Location", value: "Cairo, Egypt", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="mono text-sm text-primary mb-3">// get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's build something <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-4 glass rounded-2xl p-5 hover:border-primary/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="mono text-xs text-muted-foreground mb-1">{c.label}</p>
                  <p className="font-medium text-sm break-all">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5">
              <p className="mono text-xs text-muted-foreground mb-3">// follow me</p>
              <div className="flex gap-3">
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
                    className="w-10 h-10 rounded-xl bg-secondary/60 border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 hover:scale-110 transition-all"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-strong rounded-3xl p-6 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="mono text-xs text-muted-foreground mb-2 block">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border focus:border-primary focus:bg-secondary/80 outline-none transition-all"
                />
              </div>
              <div>
                <label className="mono text-xs text-muted-foreground mb-2 block">Your Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border focus:border-primary focus:bg-secondary/80 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="mono text-xs text-muted-foreground mb-2 block">Message</label>
              <textarea
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border focus:border-primary focus:bg-secondary/80 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all hover:scale-[1.02] group"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
