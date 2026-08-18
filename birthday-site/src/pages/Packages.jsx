import { Link } from 'react-router-dom'
import { useData } from '../context/DataContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Packages() {
  const { packages } = useData()
  return (
    <div>
      <section className="bg-royal-gradient py-20 text-center text-white">
        <p className="section-eyebrow text-gold-300">Paketlər</p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Premium Paket Seçimləri</h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading eyebrow="Büdcənizə Uyğun" title="Silver, Gold və Platinum" desc="Hər paket dekorasiya, tort və çəkiliş xidmətlərini özündə birləşdirir." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.id}
              className={`card-lift relative rounded-3xl border p-8 ${
                p.popular ? 'border-gold-400 bg-royal-gradient text-white shadow-gold lg:-translate-y-4' : 'border-royal-100 bg-white shadow-premium'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-400 px-4 py-1 text-xs font-bold text-royal-950">
                  Ən Populyar
                </span>
              )}
              <h3 className={`font-display text-xl font-bold ${p.popular ? 'text-gold-300' : 'text-royal-900'}`}>{p.name}</h3>
              <p className={`mt-2 font-display text-4xl font-bold ${p.popular ? 'text-white' : 'text-royal-900'}`}>{p.price}₼</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${p.popular ? 'text-royal-100' : 'text-royal-600'}`}>
                    <span className="mt-0.5 text-gold-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to={`/book-now?package=${p.id}`}
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  p.popular ? 'bg-gold-400 text-royal-950 hover:bg-gold-300' : 'border border-gold-400 text-gold-600 hover:bg-gold-400 hover:text-royal-950'
                }`}
              >
                Sifariş et
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
