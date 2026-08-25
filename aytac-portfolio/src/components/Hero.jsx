import { useEffect, useRef } from "react";
import { animate, createTimeline, splitText, stagger, utils } from "animejs";
import { ArrowRight, Mail, Terminal } from "lucide-react";

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  size: 2 + Math.round(Math.random() * 4),
  top: Math.round(Math.random() * 100),
  left: Math.round(Math.random() * 100),
  duration: 4000 + Math.round(Math.random() * 5000),
  delay: Math.round(Math.random() * 2000),
}));

const CODE_LINES = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: "name: 'Aytac Mirzeyeva'," },
  { indent: 1, text: "role: 'Junior Front-End Developer'," },
  { indent: 1, text: "stack: ['React', 'Tailwind', 'JS']," },
  { indent: 1, text: "focus: 'clean, interactive UI'," },
  { indent: 0, text: "};" },
];

export default function Hero() {
  const rootRef = useRef(null);
  const squareRef = useRef(null);
  const ringRef = useRef(null);
  const termRef = useRef(null);

  useEffect(() => {
    const ctx = rootRef.current;
    if (!ctx) return undefined;

    const eyebrow = ctx.querySelector("[data-hero-eyebrow]");
    const heading = ctx.querySelector("[data-hero-heading]");
    const subtitle = ctx.querySelector("[data-hero-subtitle]");
    const desc = ctx.querySelector("[data-hero-desc]");
    const ctas = ctx.querySelectorAll("[data-hero-cta]");
    const visual = ctx.querySelector("[data-hero-visual]");

    const { chars } = splitText(heading, { chars: true, words: false });
    utils.set(chars, { opacity: 0, translateY: 22 });
    utils.set([eyebrow, subtitle, desc, visual], { opacity: 0 });
    utils.set(ctas, { opacity: 0, translateY: 14 });

    const tl = createTimeline({ defaults: { ease: "outQuad" } });
    tl.add(eyebrow, { opacity: [0, 1], translateY: [-8, 0], duration: 500 })
      .add(
        chars,
        {
          opacity: [0, 1],
          translateY: [22, 0],
          duration: 650,
          delay: stagger(18),
        },
        "-=250"
      )
      .add(subtitle, { opacity: [0, 1], translateY: [12, 0], duration: 550 }, "-=350")
      .add(desc, { opacity: [0, 1], translateY: [12, 0], duration: 550 }, "-=350")
      .add(
        ctas,
        { opacity: [0, 1], translateY: [14, 0], duration: 500, delay: stagger(110) },
        "-=350"
      )
      .add(visual, { opacity: [0, 1], scale: [0.92, 1], duration: 800 }, "-=650");

    // Continuous floating/rotating decorative square (per brief's animejs sample)
    if (squareRef.current) {
      animate(squareRef.current, {
        x: [
          { to: "1.4rem", duration: 1600, delay: 400 },
          { to: 0, duration: 1600, delay: 800 },
        ],
        y: [
          { to: "-1.1rem", ease: "outQuad", duration: 1200 },
          { to: "1.1rem", duration: 1800, delay: 700 },
          { to: 0, ease: "inQuad", duration: 1200, delay: 700 },
        ],
        scale: [
          { to: 0.85, duration: 1200, delay: 400 },
          { to: 1, duration: 1200, delay: 800 },
        ],
        rotate: { to: 360, ease: "linear" },
        duration: 6000,
        ease: "inOut",
        loop: true,
      });
    }

    // Slow continuous rotation for the orbiting core ring
    if (ringRef.current) {
      animate(ringRef.current, {
        rotate: 360,
        duration: 22000,
        ease: "linear",
        loop: true,
      });
    }

    // Terminal code reveal, char by char
    if (termRef.current) {
      const lines = termRef.current.querySelectorAll("[data-code-line]");
      const split = splitText(lines, { chars: true, words: false });
      utils.set(split.chars, { opacity: 0 });
      animate(split.chars, {
        opacity: [0, 1],
        duration: 1,
        delay: stagger(9, { start: 1400 }),
      });
    }

    return () => {
      tl.pause();
    };
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-60" />
        <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-neon/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-neon-dim/20 blur-[110px]" />
        {PARTICLES.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      <div className="section-shell grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p data-hero-eyebrow className="eyebrow mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-neon-sm" />
            ~/home
          </p>
          <h1
            data-hero-heading
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
          >
            Hi, I&apos;m <span className="gradient-text">Aytac</span>
          </h1>
          <p
            data-hero-subtitle
            className="mt-5 font-display text-xl font-medium text-neon-soft sm:text-2xl"
          >
            Junior Front-End Developer
          </p>
          <p
            data-hero-desc
            className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            I create modern, responsive and interactive web experiences using
            modern front-end technologies.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              data-hero-cta
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              View My Projects
              <ArrowRight size={16} />
            </a>
            <a
              data-hero-cta
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-ghost"
            >
              Contact Me
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Signature visual: orbiting core + terminal panel */}
        <div data-hero-visual className="relative mx-auto w-full max-w-md">
          <div
            ref={squareRef}
            className="absolute -left-4 -top-6 h-10 w-10 rounded-md border border-neon-soft/60 bg-neon/10 shadow-neon-sm sm:-left-8"
            aria-hidden="true"
          />
          <svg
            ref={ringRef}
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -inset-6 -z-10 opacity-70"
            aria-hidden="true"
          >
            <circle
              cx="100"
              cy="100"
              r="92"
              fill="none"
              stroke="rgba(77,163,255,0.25)"
              strokeWidth="1"
              strokeDasharray="2 8"
            />
            <circle cx="100" cy="8" r="3" fill="#7fc4ff" className="drop-shadow-[0_0_6px_#4da3ff]" />
          </svg>

          <div ref={termRef} className="glass-panel overflow-hidden shadow-neon-lg">
            <div className="flex items-center gap-2 border-b border-line/70 bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-ink-faint">
                <Terminal size={12} /> profile.js
              </span>
            </div>
            <pre className="px-5 py-6 font-mono text-[13px] leading-[1.9] text-ink-muted sm:text-sm">
              {CODE_LINES.map((line, i) => (
                <div key={i} data-code-line style={{ paddingLeft: `${line.indent * 1.1}rem` }}>
                  <span className="text-neon-bright/90">{line.text}</span>
                </div>
              ))}
              <div className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-neon/80" />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Particle({ size, top, left, duration, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    animate(ref.current, {
      translateY: [0, -18, 0],
      translateX: [0, 10, 0],
      opacity: [0.15, 0.7, 0.15],
      duration,
      delay,
      loop: true,
      ease: "inOutSine",
    });
  }, [duration, delay]);

  return (
    <span
      ref={ref}
      className="absolute rounded-full bg-neon-soft shadow-neon-sm"
      style={{
        width: size,
        height: size,
        top: `${top}%`,
        left: `${left}%`,
      }}
      aria-hidden="true"
    />
  );
}
