import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { PROJECTS } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const heading = section.querySelector("[data-projects-heading]");
    const cards = section.querySelectorAll("[data-project-card]");

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
            translateY: [34, 0],
            duration: 650,
            delay: stagger(140, { start: 200 }),
            ease: "outQuad",
          });

          obs.disconnect();
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-neon/8 blur-[140px]" />

      <div className="section-shell">
        <div data-projects-heading className="mb-16 max-w-2xl opacity-0">
          <p className="eyebrow mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-neon-sm" />
            ~/projects
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            A selection of front-end builds. Screenshots and links will be
            updated as new projects ship.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
