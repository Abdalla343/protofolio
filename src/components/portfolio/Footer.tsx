export const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
              A
            </div>
            <span className="font-display font-semibold">
              Abdalla Ahmed<span className="text-primary">.</span>
            </span>
          </div>
          <p className="mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Designed & built with care.
          </p>
        </div>
      </div>
    </footer>
  );
};
