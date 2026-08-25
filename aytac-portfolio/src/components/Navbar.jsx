import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    animate(navRef.current, {
      opacity: [0, 1],
      translateY: [-16, 0],
      duration: 700,
      ease: "outQuad",
    });
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (open) {
      menuRef.current.style.display = "block";
      animate(menuRef.current, {
        opacity: [0, 1],
        translateY: [-12, 0],
        height: ["0px", "auto"],
        duration: 380,
        ease: "outQuad",
      });
      const items = menuRef.current.querySelectorAll("[data-mobile-link]");
      animate(items, {
        opacity: [0, 1],
        translateX: [-12, 0],
        delay: (el, i) => 90 + i * 60,
        duration: 350,
        ease: "outQuad",
      });
    } else if (menuRef.current.style.display === "block") {
      animate(menuRef.current, {
        opacity: [1, 0],
        translateY: [0, -12],
        duration: 250,
        ease: "inQuad",
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = "none";
        },
      });
    }
  }, [open]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 opacity-0"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-4 transition-all duration-500 sm:px-8 lg:px-10 ${
          scrolled
            ? "border-b border-line/70 bg-void/80 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent backdrop-blur-sm"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2 font-mono text-sm font-medium text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-neon/50 bg-neon/10 text-neon-bright shadow-neon-sm transition-shadow duration-300 group-hover:shadow-neon">
            AM
          </span>
          <span className="hidden text-ink-muted sm:inline">
            aytac<span className="text-neon">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative px-4 py-2 font-display text-sm text-ink-muted transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-neon to-neon-bright shadow-neon-sm transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="ml-3 rounded-full border border-neon/50 bg-neon/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-neon-bright transition-all duration-300 hover:bg-neon/20 hover:shadow-neon-sm"
          >
            Let&apos;s Talk
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink transition-colors duration-300 hover:border-neon/60 hover:text-neon-bright md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        ref={menuRef}
        style={{ display: "none" }}
        className="overflow-hidden border-b border-line/70 bg-void/95 backdrop-blur-xl md:hidden"
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              data-mobile-link
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-lg px-3 py-3 font-display text-base text-ink-muted opacity-0 transition-colors duration-200 hover:bg-white/5 hover:text-neon-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
