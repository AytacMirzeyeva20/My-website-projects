# Aytac Mirzeyeva — Portfolio

A premium, dark, futuristic developer portfolio built with **React**, **Tailwind CSS**, and **Anime.js (v4)**.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

Requires Node.js 18+.

## Replacing images

- **Avatar** — replace `public/images/aytac-anime.png` with your own image. Keep it square for the best fit inside the circular frame.
- **Projects** — replace `public/images/project1.png`, `project2.png`, `project3.png` (or add more) with real screenshots. Edit project details (title, description, tech, links) in `src/data/projects.js`.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx      # sticky nav, scroll-aware blur, mobile menu
│   ├── Hero.jsx         # hero section, load-in timeline, terminal panel
│   ├── About.jsx        # avatar + bio, scroll-reveal text
│   ├── Skills.jsx        # categorized skill cards, stagger reveal
│   ├── Projects.jsx      # projects grid
│   ├── ProjectCard.jsx   # reusable project card
│   ├── Contact.jsx       # contact info + validated form
│   └── Footer.jsx
├── data/
│   ├── skills.js         # skill categories/icons — edit to add/remove skills
│   └── projects.js       # project list — edit to add more projects
├── hooks/
│   └── useScrollReveal.js
├── App.jsx
├── main.jsx
└── index.css
```

## Notes

- Skill and social icons come from `lucide-react` and `react-icons` (brand icons: GitHub, LinkedIn, and technology logos).
- All scroll animations respect `prefers-reduced-motion`.
- Update the email/phone/social links directly inside `Contact.jsx` and `Footer.jsx` if they change.
