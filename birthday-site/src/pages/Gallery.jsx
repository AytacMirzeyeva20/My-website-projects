import { useMemo, useState } from 'react'
import { img } from '../assets/imageMap.js'
import { useData } from '../context/DataContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Gallery() {
  const { gallery } = useData()
  const categories = useMemo(() => ['Hamısı', ...new Set(gallery.map((g) => g.category))], [gallery])
  const [active, setActive] = useState('Hamısı')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'Hamısı' ? gallery : gallery.filter((g) => g.category === active)

  return (
    <div>
      <section className="bg-royal-gradient py-20 text-center text-white">
        <p className="section-eyebrow text-gold-300">Qalereya</p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Xatirələr Qalereyası</h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading eyebrow="Bizdən İlham Alın" title="Keçmiş Tədbirlərimiz" />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === c ? 'bg-gold-400 text-royal-950 shadow-gold' : 'border border-royal-200 text-royal-700 hover:border-gold-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {filtered.map((g) => (
            <button
              key={g.id}
              onClick={() => setLightbox(g)}
              className="group block w-full overflow-hidden rounded-xl break-inside-avoid"
            >
              <img src={img(g.img)} alt={g.category} className="w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-royal-950/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <img src={img(lightbox.img)} alt={lightbox.category} className="max-h-[85vh] max-w-full rounded-2xl shadow-premium" />
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-3xl text-gold-300 hover:text-gold-100"
            aria-label="Bağla"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  )
}
