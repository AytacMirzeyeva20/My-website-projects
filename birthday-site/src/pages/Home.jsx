import { Link } from 'react-router-dom'
import { img } from '../assets/imageMap.js'
import { useData } from '../context/DataContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Home() {
  const { services, packages, gallery, reviews } = useData()

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-royal-gradient">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute -right-10 top-1/3 h-80 w-80 rounded-full bg-royal-300 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div className="reveal">
            <p className="section-eyebrow text-gold-300">Yalnız Xanımlar Üçün</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Ad Gününüzü <span className="text-gold-400">Kral Sarayına</span> Çevirin
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-royal-200">
              Dekorasiyadan tortadək, foto-videodan canlı musiqiyədək — premium ad günü tədbirinizin hər detalını zərafət və incəliklə həyata keçiririk.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/book-now" className="btn-gold">İndi Sifariş Et</Link>
              <Link to="/gallery" className="btn-outline !text-gold-300 !border-gold-300/60">Qalereyaya Bax</Link>
            </div>
            <div className="mt-10 flex gap-8 text-white">
              <div>
                <p className="font-display text-2xl font-bold text-gold-400">500+</p>
                <p className="text-xs text-royal-300">Təşkil edilmiş tədbir</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-gold-400">4.9/5</p>
                <p className="text-xs text-royal-300">Müştəri məmnuniyyəti</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-gold-400">7</p>
                <p className="text-xs text-royal-300">İl təcrübə</p>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.15s' }}>
            <div className="glass-dark relative mx-auto max-w-md overflow-hidden rounded-[2rem] p-3 shadow-premium">
              <img src={img('birth.avif')} alt="Premium ad günü dekorasiyası" className="h-[420px] w-full rounded-[1.6rem] object-cover" />
              <div className="glass absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-gold">
                <span className="text-2xl">🎂</span>
                <div>
                  <p className="text-xs font-semibold text-royal-800">Sifariş edildi</p>
                  <p className="text-[11px] text-royal-500">Zərif Qızıl Damla Tortu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal order-2 lg:order-1">
            <p className="section-eyebrow">Bizim Haqqımızda</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-royal-900 sm:text-4xl">
              Hər Tədbir Bir Sənət Əsəridir
            </h2>
            <p className="mt-5 leading-relaxed text-royal-600">
              Velvet & Gold komandası olaraq, xanımların ad günlərini unudulmaz xatirələrə çeviririk. Zərif dizayn hissi, peşəkar komanda və premium materiallarla hər tədbiri fərdi şəkildə planlaşdırırıq.
            </p>
            <ul className="mt-6 space-y-3">
              {['Fərdi dizayn yanaşması', 'Peşəkar və etibarlı komanda', 'Premium keyfiyyətli material və tortlar'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-royal-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400 text-xs text-royal-950">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-outline mt-8 inline-flex">Daha Ətraflı</Link>
          </div>
          <div className="reveal order-1 grid grid-cols-2 gap-4 lg:order-2">
            <img src={img('decor2.jpg')} alt="Dekorasiya nümunəsi" className="card-lift h-56 w-full rounded-2xl object-cover shadow-premium" />
            <img src={img('flower.jpg')} alt="Gül dizaynı" className="card-lift mt-8 h-56 w-full rounded-2xl object-cover shadow-premium" />
            <img src={img('cake3.jpg')} alt="Premium tort" className="card-lift h-56 w-full rounded-2xl object-cover shadow-premium" />
            <img src={img('gift1.jpg')} alt="Hədiyyə qutusu" className="card-lift mt-8 h-56 w-full rounded-2xl object-cover shadow-premium" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-lavender/50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Xidmətlərimiz" title="Populyar Xidmətlər" desc="Ad gününüzü unudulmaz edəcək premium xidmətlərimizlə tanış olun." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <div key={s.id} className="card-lift group overflow-hidden rounded-2xl bg-white shadow-premium">
                <div className="overflow-hidden">
                  <img src={img(s.img)} alt={s.title} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-royal-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-royal-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline">Bütün Xidmətlərə Bax</Link>
          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading eyebrow="Paketlər" title="Sizə Uyğun Paketi Seçin" desc="Silver, Gold və ya Platinum — hər büdcəyə uyğun premium seçimlər." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.id}
              className={`card-lift relative rounded-3xl border p-8 ${
                p.popular ? 'border-gold-400 bg-royal-gradient text-white shadow-gold' : 'border-royal-100 bg-white shadow-premium'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-400 px-4 py-1 text-xs font-bold text-royal-950">
                  Ən Populyar
                </span>
              )}
              <h3 className={`font-display text-xl font-bold ${p.popular ? 'text-gold-300' : 'text-royal-900'}`}>{p.name}</h3>
              <p className={`mt-2 font-display text-4xl font-bold ${p.popular ? 'text-white' : 'text-royal-900'}`}>
                {p.price}₼
              </p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${p.popular ? 'text-royal-100' : 'text-royal-600'}`}>
                    <span className="mt-0.5 text-gold-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/book-now"
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

      {/* GALLERY PREVIEW */}
      <section className="bg-royal-950 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Qalereya" title="Xatirələrdən Anlar" light desc="Təşkil etdiyimiz tədbirlərdən seçilmiş kadrlar." />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {gallery.slice(0, 8).map((g) => (
              <div key={g.id} className="group overflow-hidden rounded-xl">
                <img src={img(g.img)} alt={g.category} className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-48" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn-gold">Tam Qalereyaya Bax</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading eyebrow="Rəylər" title="Müştərilərimiz Nə Deyir" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.id} className="card-lift rounded-2xl border border-royal-100 bg-white p-6 shadow-premium">
              <div className="text-gold-400">{'★'.repeat(r.rating)}</div>
              <p className="mt-4 text-sm italic leading-relaxed text-royal-600">"{r.text}"</p>
              <p className="mt-4 font-display text-sm font-bold text-royal-900">— {r.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
