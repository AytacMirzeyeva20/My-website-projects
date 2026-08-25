import { useRef } from "react";
import { animate } from "animejs";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const handleEnter = () => {
    animate(cardRef.current, { translateY: -8, duration: 320, ease: "outQuad" });
    animate(imgRef.current, { scale: 1.06, duration: 500, ease: "outQuad" });
  };

  const handleLeave = () => {
    animate(cardRef.current, { translateY: 0, duration: 320, ease: "outQuad" });
    animate(imgRef.current, { scale: 1, duration: 500, ease: "outQuad" });
  };

  return (
    <article
      ref={cardRef}
      data-project-card
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="glass-panel group flex flex-col overflow-hidden opacity-0 transition-all duration-300 hover:border-neon/60 hover:shadow-neon-lg"
    >
      <div className="relative aspect-[2/1] overflow-hidden border-b border-line/70">
        <img
          ref={imgRef}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/0 to-void/0" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] text-neon-soft transition-colors duration-300 group-hover:border-neon/40"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-4 py-2.5 font-display text-sm font-medium text-ink-muted opacity-80 transition-all duration-300 hover:border-neon/60 hover:text-white hover:opacity-100 hover:shadow-neon-sm"
          >
            <FaGithub size={16} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-neon/90 px-4 py-2.5 font-display text-sm font-semibold text-void opacity-90 transition-all duration-300 hover:opacity-100 hover:shadow-neon"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
