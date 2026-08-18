Create a premium luxury handbag landing page that looks like a $500+ professional website.

Tech Stack:
- React
- Tailwind CSS
- JavaScript (ES6)
- Anime.js (latest version)

Design Style:
- Ultra luxury
- Minimal
- Elegant
- Fashion editorial
- Premium fashion brand (Hermès × Dior × Louis Vuitton inspiration)
- Beige, cream, brown, gold, ivory, black color palette
- Glassmorphism where appropriate
- Soft shadows
- High-end typography
- Large whitespace
- Smooth premium animations

Use ONLY the provided handbag images as the main products.

----------------------------------------
WEBSITE STRUCTURE
----------------------------------------

Hero Section
- Fullscreen layout
- Floating luxury handbag in the center
- Luxury headline

Example:

"Luxury Crafted.
Timeless Elegance."

Subheading:
"Designed for women who appreciate sophistication."

Luxury CTA buttons

Shop Collection
Explore Details

Animated luxury background

Small floating particles

Soft light effects

Luxury gradients

----------------------------------------

Navigation

Minimal transparent navbar

Logo

Collections

About

Craftsmanship

Gallery

Contact

Smooth navbar blur on scroll

----------------------------------------

Hero Animations

The handbag should gently float continuously.

Use Anime.js.

Floating animation

Rotation

Scale breathing

Shadow animation

Luxury easing

----------------------------------------

Motion Path Animation

Create one elegant SVG curved line around the hero section.

Animate decorative elements moving along the path.

Use:

import { animate, svg } from "animejs";

const motion = animate(".floating-item", {
    ease: "linear",
    duration: 7000,
    loop: true,
    ...svg.createMotionPath("path")
});

Also animate the SVG path drawing:

animate(svg.createDrawable("path"),{
    draw:["0 0","0 1","1 1"],
    ease:"inOutQuad",
    duration:2500,
    loop:true
});

----------------------------------------

Floating Objects

Around the handbag animate:

Luxury scarf

Golden key

Rose petals

Leather texture pieces

Perfume bottle

Golden sparkles

Everything should float independently.

Use stagger animation:

import { animate, stagger } from "animejs";

animate(".floating",{
    y: stagger(["-30px","30px"]),
    rotate:{
        from:stagger(["-6deg","6deg"])
    },
    duration:3500,
    alternate:true,
    loop:true,
    ease:"easeInOutSine"
});

----------------------------------------

Scroll Animations

Every section should animate into view.

Fade Up

Scale

Rotate slightly

Blur to sharp

Luxury stagger effect

Use Intersection Observer combined with Anime.js.

----------------------------------------

Luxury Product Showcase

Cards should contain:

Bag image

Luxury title

Description

Price

Premium CTA

Hover Effects:

Lift

Scale

Glow

Golden border animation

Image zoom

Soft shadow

Mouse follow lighting effect

----------------------------------------

Interactive Cursor

Create a custom luxury cursor.

Smooth movement.

Gold glow.

Cursor expands over buttons.

----------------------------------------

3D Hover

Each bag card should tilt slightly according to mouse movement.

Use perspective transforms.

----------------------------------------

Gallery Section

Luxury masonry gallery

Images reveal one by one

Hover zoom

Light reflection animation

----------------------------------------

Craftsmanship Section

Luxury split layout

Image on one side

Story on the other

Animated underline

Luxury typography

----------------------------------------

Testimonials

Luxury cards

Fade animation

Floating quote icon

----------------------------------------

Statistics

Animated counters

Years

Customers

Collections

Countries

Count animation when entering viewport.

----------------------------------------

Footer

Elegant minimal footer

Social icons

Newsletter

Luxury background

----------------------------------------

Page Transition

Smooth fade between sections.

No abrupt movement.

Everything should feel premium.

----------------------------------------

Performance

Responsive

Desktop

Tablet

Mobile

Lazy load images

Smooth scrolling

60 FPS animations

No animation lag.

----------------------------------------

Animation Principles

Use Anime.js extensively.

Include:

Floating animation

Motion path

SVG line drawing

Scroll-triggered animations

Parallax

Hover animations

Stagger effects

Opacity transitions

Scale transitions

Rotation

Elastic easing

Spring effects

Blur transitions

----------------------------------------

Typography

Elegant serif headings

Modern sans-serif body

Luxury spacing

Perfect visual hierarchy

----------------------------------------

Overall Goal

The final result should feel like a premium luxury fashion brand website worth over $500, comparable to the websites of Hermès, Dior, Louis Vuitton, or Bottega Veneta.

The experience should immediately impress visitors with cinematic animations, flawless interactions, editorial layouts, elegant typography, and highly polished visual effects.