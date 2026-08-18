import { Link } from 'react-router-dom'
import { img } from '../assets/imageMap.js'
import { useData } from '../context/DataContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function CakeShop() {
  const { cakes } = useData()
  return (
    <div>
      <section className="bg-royal-gradient py-20 text-center text-white">
        <p className="section-eyebrow text-gold-300">Cake Shop</p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Premium Tortlar</h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading eyebrow="Seçim Sizindir" title="Zərif, Əl İşi Tortlar" desc="Hər tort keyfiyyətli materiallar və incə dizaynla hazırlanır." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cakes.map((c) => (
            <div key={c.id} className="card-lift group overflow-hidden rounded-2xl bg-white shadow-premium">
              <div className="overflow-hidden">
                <img src={img(c.img)} alt={c.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-royal-900">{c.name}</h3>
                  <span className="whitespace-nowrap rounded-full bg-gold-100 px-3 py-1 text-sm font-bold text-gold-700">{c.price}₼</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-royal-600">{c.desc}</p>
                <Link to={`/book-now?cake=${encodeURIComponent(c.name)}`} className="btn-gold mt-5 w-full !py-2.5 text-sm">
                  Sifariş et
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
