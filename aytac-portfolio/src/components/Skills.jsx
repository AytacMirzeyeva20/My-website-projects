import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { SKILL_GROUPS } from "../data/skills";

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const heading = section.querySelector("[data-skills-heading]");
    const cards = section.querySelectorAll("[data-skill-card]");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          animate(heading, {
            opacity: [0, 1],
            translateY: [16, 0],
            duration: 600,
            ease: "outQuad",
          });

          animate(cards, {
            opacity: [0, 1],
            translateY: [26, 0],
            scale: [0.94, 1],
            duration: 550,
            delay: stagger(55, { start: 200 }),
            ease: "outQuad",
          });

          obs.disconnect();
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-grid opacity-30 mask-fade-bottom" />

      <div className="section-shell">
        <div data-skills-heading className="mb-16 max-w-2xl opacity-0">
          <p className="eyebrow mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-neon-sm" />
            ~/skills
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Tools and technologies I use to design, build and ship
            interactive front-end experiences.
          </p>
        </div>

        <div className="space-y-14">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <div className="mb-6 flex items-center gap-3">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {group.title}
                </h3>
                <span className="h-px flex-1 bg-line/70" />
                <span className="font-mono text-xs text-ink-faint">{group.path}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const { Icon } = skill;
  const cardRef = useRef(null);

  const handleEnter = () => {
    animate(cardRef.current, {
      translateY: -6,
      duration: 260,
      ease: "outQuad",
    });
  };
  const handleLeave = () => {
    animate(cardRef.current, {
      translateY: 0,
      duration: 260,
      ease: "outQuad",
    });
  };

  return (
    <div
      ref={cardRef}
      data-skill-card
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="glass-panel group flex flex-col items-center gap-3 px-4 py-6 opacity-0 transition-all duration-300 hover:border-neon/60 hover:shadow-neon"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white/[0.03] transition-all duration-300 group-hover:border-neon/50 group-hover:shadow-neon-sm"
        style={{ color: skill.color }}
      >
        <Icon size={22} />
      </div>
      <p className="text-center font-display text-sm font-medium text-ink-muted transition-colors duration-300 group-hover:text-white">
        {skill.name}
      </p>
    </div>
  );
}
