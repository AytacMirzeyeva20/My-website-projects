import { useEffect, useRef } from "react";
import { animate, splitText, stagger, utils } from "animejs";
import { Braces, GraduationCap, Sparkles } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const avatarWrapRef = useRef(null);
  const avatarRef = useRef(null);
  const orbitRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const heading = section.querySelector("[data-about-heading]");
    const paragraph = section.querySelector("[data-about-text]");
    const eyebrow = section.querySelector("[data-about-eyebrow]");
    const badges = section.querySelectorAll("[data-about-badge]");

    let split;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          animate(avatarWrapRef.current, {
            opacity: [0, 1],
            scale: [0.85, 1],
            translateY: [24, 0],
            duration: 900,
            ease: "outQuad",
          });

          animate(eyebrow, {
            opacity: [0, 1],
            translateY: [-8, 0],
            duration: 500,
            ease: "outQuad",
          });

          split = splitText(paragraph, { words: { wrap: "clip" } });
          utils.set(split.words, { opacity: 0, translateY: "100%" });
          utils.set(heading, { opacity: 0, translateY: 16 });

          animate(heading, {
            opacity: [0, 1],
            translateY: [16, 0],
            duration: 600,
            delay: 150,
            ease: "outQuad",
          });

          animate(split.words, {
            opacity: [0, 1],
            translateY: ["100%", "0%"],
            duration: 650,
            delay: stagger(28, { start: 350 }),
            ease: "outQuad",
          });

          animate(badges, {
            opacity: [0, 1],
            translateY: [14, 0],
            duration: 500,
            delay: stagger(90, { start: 700 }),
            ease: "outQuad",
          });

          obs.disconnect();
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    animate(orbitRef.current, {
      rotate: 360,
      duration: 30000,
      ease: "linear",
      loop: true,
    });

    return () => observer.disconnect();
  }, []);

  const handleEnter = () => {
    animate(avatarRef.current, {
      scale: 1.05,
      translateY: -8,
      duration: 400,
      ease: "outQuad",
    });
  };

  const handleLeave = () => {
    animate(avatarRef.current, {
      scale: 1,
      translateY: 0,
      duration: 400,
      ease: "outQuad",
    });
  };

  return (
    <section id="about" ref={sectionRef} className="relative py-28 sm:py-32">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Avatar */}
        <div
          ref={avatarWrapRef}
          className="relative mx-auto w-full max-w-xs opacity-0 sm:max-w-sm"
        >
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-neon/20 blur-[80px]" />
          <svg
            ref={orbitRef}
            viewBox="0 0 220 220"
            className="pointer-events-none absolute -inset-8 -z-10"
            aria-hidden="true"
          >
            <circle
              cx="110"
              cy="110"
              r="102"
              fill="none"
              stroke="rgba(77,163,255,0.22)"
              strokeWidth="1"
              strokeDasharray="1 10"
            />
            <rect
              x="100"
              y="2"
              width="8"
              height="8"
              rx="2"
              fill="#4da3ff"
              className="drop-shadow-[0_0_6px_#4da3ff]"
            />
          </svg>

          <div
            ref={avatarRef}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-full border-2 border-neon/50 bg-navy shadow-neon-lg transition-shadow duration-500 hover:shadow-neon-lg"
          >
            <div className="absolute inset-0 z-10 rounded-full bg-gradient-to-b from-transparent via-transparent to-void/40" />
            <div className="absolute inset-0 z-10 rounded-full ring-1 ring-inset ring-white/10" />
            <img
              src="/images/aytac-anime.png"
              alt="Aytac - Junior Front-End Developer"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-neon/40 bg-void/90 px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-neon-soft shadow-neon-sm">
            Available for work
          </span>
        </div>

        {/* Text */}
        <div>
          <p data-about-eyebrow className="eyebrow mb-4 flex items-center gap-2 opacity-0">
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-neon-sm" />
            ~/about
          </p>
          <h2
            data-about-heading
            className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            About <span className="gradient-text">Me</span>
          </h2>
          <p
            data-about-text
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            My name is Aytac. I am a Junior Front-End Developer. I am
            studying Computer Engineering at Azerbaijan Technical University.
            I am interested in programming and modern web development.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <InfoBadge icon={GraduationCap} label="Studying" value="Computer Engineering" />
            <InfoBadge icon={Braces} label="Focus" value="Front-End Development" />
            <InfoBadge icon={Sparkles} label="Approach" value="Clean & Interactive UI" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBadge({ icon: Icon, label, value }) {
  return (
    <div
      data-about-badge
      className="glass-panel flex flex-col gap-2 p-4 opacity-0 transition-all duration-300 hover:-translate-y-1 hover:border-neon/50 hover:shadow-neon"
    >
      <Icon size={18} className="text-neon-bright" />
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-faint">
        {label}
      </p>
      <p className="font-display text-sm font-medium text-ink">{value}</p>
    </div>
  );
}
