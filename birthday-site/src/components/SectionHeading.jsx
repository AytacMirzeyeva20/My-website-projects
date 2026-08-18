export default function SectionHeading({ eyebrow, title, desc, center = true, light = false }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl reveal`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className={`mt-3 font-display text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-royal-900'}`}>{title}</h2>
      {desc && <p className={`mt-4 text-sm leading-relaxed sm:text-base ${light ? 'text-royal-200' : 'text-royal-600'}`}>{desc}</p>}
      <div className={`mt-5 h-[2px] w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}
