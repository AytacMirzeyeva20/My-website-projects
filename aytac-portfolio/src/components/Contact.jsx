import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { Loader2, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/AytacMirzeyeva20",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aytac-mirzeyeva-b0327133a",
    Icon: FaLinkedin,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const heading = section.querySelector("[data-contact-heading]");
    const info = section.querySelectorAll("[data-contact-info]");
    const formEl = section.querySelector("[data-contact-form]");

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
          animate(info, {
            opacity: [0, 1],
            translateX: [-20, 0],
            duration: 550,
            delay: stagger(100, { start: 150 }),
            ease: "outQuad",
          });
          animate(formEl, {
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 650,
            delay: 200,
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

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please enter a message.";
    else if (form.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      animate(buttonRef.current, {
        translateX: [-6, 6, -4, 4, 0],
        duration: 400,
        ease: "inOutQuad",
      });
      return;
    }

    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      window.setTimeout(() => setStatus("idle"), 3200);
    }, 1100);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-grid opacity-25" />

      <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p
            data-contact-info
            className="eyebrow mb-4 flex items-center gap-2 opacity-0"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-neon-sm" />
            ~/contact
          </p>
          <h2
            data-contact-heading
            className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p data-contact-info className="mt-5 max-w-md text-base text-ink-muted opacity-0 sm:text-lg">
            Have a project in mind or an opportunity to discuss? My inbox is
            open.
          </p>

          <div className="mt-9 space-y-4">
            <a
              data-contact-info
              href="mailto:mirzeyvaa91@gmail.com"
              className="glass-panel flex items-center gap-4 p-4 opacity-0 transition-all duration-300 hover:border-neon/50 hover:shadow-neon"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-neon/40 bg-neon/10 text-neon-bright">
                <Mail size={18} />
              </span>
              <span>
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-faint">
                  Email
                </span>
                <span className="font-display text-sm text-ink">
                  mirzeyvaa91@gmail.com
                </span>
              </span>
            </a>

            <a
              data-contact-info
              href="tel:+994506817618"
              className="glass-panel flex items-center gap-4 p-4 opacity-0 transition-all duration-300 hover:border-neon/50 hover:shadow-neon"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-neon/40 bg-neon/10 text-neon-bright">
                <Phone size={18} />
              </span>
              <span>
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-faint">
                  Phone
                </span>
                <span className="font-display text-sm text-ink">
                  050 681 76 18
                </span>
              </span>
            </a>

            <div data-contact-info className="flex gap-3 pt-2 opacity-0">
              {SOCIALS.map(({ label, href, Icon }) => (
                <SocialButton key={label} label={label} href={href} Icon={Icon} />
              ))}
            </div>
          </div>
        </div>

        <form
          data-contact-form
          onSubmit={handleSubmit}
          noValidate
          className="glass-panel space-y-5 p-6 opacity-0 sm:p-8"
        >
          <Field
            label="Name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange("name")}
            error={errors.name}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange("email")}
            error={errors.email}
          />
          <Field
            label="Message"
            name="message"
            as="textarea"
            rows={5}
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange("message")}
            error={errors.message}
          />

          <button
            ref={buttonRef}
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" && <Loader2 size={16} className="animate-spin" />}
            {status === "sent" && <CheckCircle2 size={16} />}
            {status === "idle" && <Send size={16} />}
            {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, error, as = "input", ...props }) {
  const Component = as;
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
        {label}
      </span>
      <Component
        name={name}
        className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-all duration-300 placeholder:text-ink-faint focus:border-neon focus:shadow-neon-sm ${
          error ? "border-red-400/60" : "border-line"
        }`}
        {...props}
      />
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function SocialButton({ label, href, Icon }) {
  const ref = useRef(null);
  const handleEnter = () =>
    animate(ref.current, { scale: 1.08, duration: 250, ease: "outQuad" });
  const handleLeave = () =>
    animate(ref.current, { scale: 1, duration: 250, ease: "outQuad" });

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-ink-muted transition-all duration-300 hover:border-neon/60 hover:text-neon-bright hover:shadow-neon-sm"
    >
      <Icon size={18} />
    </a>
  );
}
