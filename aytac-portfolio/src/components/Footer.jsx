import { useRef } from "react";
import { animate } from "animejs";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/AytacMirzeyeva20", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aytac-mirzeyeva-b0327133a",
    Icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line/70 bg-void/60">
      <div className="section-shell flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-mono text-xs text-ink-faint">
          © 2026 Aytac Mirzeyeva. All Rights Reserved.
        </p>
        <div className="flex gap-3">
          {SOCIALS.map(({ label, href, Icon }) => (
            <FooterIcon key={label} label={label} href={href} Icon={Icon} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ label, href, Icon }) {
  const ref = useRef(null);
  const handleEnter = () =>
    animate(ref.current, { scale: 1.1, duration: 220, ease: "outQuad" });
  const handleLeave = () =>
    animate(ref.current, { scale: 1, duration: 220, ease: "outQuad" });

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-faint transition-colors duration-300 hover:border-neon/50 hover:text-neon-bright"
    >
      <Icon size={16} />
    </a>
  );
}
