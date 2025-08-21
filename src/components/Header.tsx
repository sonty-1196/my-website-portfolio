export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight neon-text">Daewansh Bansal</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-foreground/80">
          <a href="#about" className="link-underline">About</a>
          <a href="#skills" className="link-underline">Skills</a>
          <a href="#projects" className="link-underline">Projects</a>
          <a href="#experience" className="link-underline">Experience</a>
          <a href="#education" className="link-underline">Education</a>
          <a href="#contact" className="link-underline">Contact</a>
        </nav>
        <a href="#contact" className="btn btn-primary">Hire Me</a>
      </div>
    </header>
  );
}
