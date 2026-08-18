import { Link } from 'react-router-dom'
import { img } from '../assets/imageMap.js'
import { useData } from '../context/DataContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Services() {
  const { services } = useData()
  return (
    <div>
      <section className="bg-royal-gradient py-20 text-center text-white">
        <p className="section-eyebrow text-gold-300">Xidmətlərimiz</p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Premium Xidmət Kataloqu</h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading eyebrow="Nə Təklif Edirik" title="Hər Detala Diqqət" desc="Ad gününüzün hər anını premium xidmətlərimizlə zənginləşdirin." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="card-lift group overflow-hidden rounded-2xl bg-white shadow-premium">
              <div className="overflow-hidden">
                <img src={img(s.img)} alt={s.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-royal-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-royal-600">{s.desc}</p>
                <Link to="/book-now" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-700">
                  Sifariş et →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
