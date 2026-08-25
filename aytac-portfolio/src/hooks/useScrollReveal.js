import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

/**
 * Reveals `[data-reveal]` children of the attached element with a staggered
 * fade/slide-up animation the first time the section enters the viewport.
 *
 * @param {object} options
 * @param {number} [options.delay=0] base delay before the stagger starts
 * @param {number} [options.staggerMs=90] delay between each child
 * @param {number} [options.y=28] initial vertical offset in px
 * @param {number} [options.threshold=0.2] IntersectionObserver threshold
 */
export function useScrollReveal({ delay = 0, staggerMs = 90, y = 28, threshold = 0.2 } = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const targets = container.querySelectorAll("[data-reveal]");
    if (!targets.length) return undefined;

    targets.forEach((el) => {
      el.style.opacity = "0";
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (prefersReducedMotion) {
            targets.forEach((el) => {
              el.style.opacity = "1";
            });
          } else {
            animate(targets, {
              opacity: [0, 1],
              translateY: [y, 0],
              duration: 800,
              delay: stagger(staggerMs, { start: delay }),
              ease: "outQuad",
            });
          }

          obs.unobserve(entry.target);
        });
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [delay, staggerMs, y, threshold]);

  return containerRef;
}
