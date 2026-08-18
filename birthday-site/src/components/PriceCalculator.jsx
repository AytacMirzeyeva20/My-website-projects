import { useMemo, useState } from 'react'
import { useData } from '../context/DataContext.jsx'

const decorTiers = { none: 0, standard: 80, premium: 180 }
const cakeTiers = { none: 0, standard: 95, premium: 160 }
const photoTiers = { none: 0, '1h': 60, 'full-day': 150 }
const videoTiers = { none: 0, highlight: 90, full: 200 }
const musicTiers = { none: 0, live: 220 }

export default function PriceCalculator({ onEstimate }) {
  const { packages } = useData()
  const [guests, setGuests] = useState(20)
  const [pkg, setPkg] = useState(packages[1]?.id || '')
  const [decor, setDecor] = useState('premium')
  const [cake, setCake] = useState('standard')
  const [photo, setPhoto] = useState('1h')
  const [video, setVideo] = useState('highlight')
  const [music, setMusic] = useState('none')

  const total = useMemo(() => {
    const base = packages.find((p) => p.id === pkg)?.price || 0
    const guestFee = Math.max(0, guests - 15) * 4
    return (
      base +
      guestFee +
      decorTiers[decor] +
      cakeTiers[cake] +
      photoTiers[photo] +
      videoTiers[video] +
      musicTiers[music]
    )
  }, [guests, pkg, decor, cake, photo, video, music, packages])

  return (
    <div className="glass rounded-3xl border border-white/60 p-6 shadow-premium sm:p-8">
      <p className="section-eyebrow">Qiymət Kalkulyatoru</p>
      <h3 className="mt-2 font-display text-2xl font-bold text-royal-900">Təxmini qiymətinizi hesablayın</h3>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Qonaq sayı: {guests}</label>
          <input
            type="range"
            min="5"
            max="150"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-2 w-full accent-gold-500"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Paket</label>
          <select value={pkg} onChange={(e) => setPkg(e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2 text-sm">
            {packages.map((p) => (
              <option key={p.id} value={p.id}>{p.name} — {p.price}₼</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Dekorasiya</label>
          <select value={decor} onChange={(e) => setDecor(e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2 text-sm">
            <option value="none">Yoxdur</option>
            <option value="standard">Standart (+80₼)</option>
            <option value="premium">Premium (+180₼)</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Tort</label>
          <select value={cake} onChange={(e) => setCake(e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2 text-sm">
            <option value="none">Yoxdur</option>
            <option value="standard">Standart (+95₼)</option>
            <option value="premium">Premium (+160₼)</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Foto çəkiliş</label>
          <select value={photo} onChange={(e) => setPhoto(e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2 text-sm">
            <option value="none">Yoxdur</option>
            <option value="1h">1 saat (+60₼)</option>
            <option value="full-day">Tam gün (+150₼)</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Video çəkiliş</label>
          <select value={video} onChange={(e) => setVideo(e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2 text-sm">
            <option value="none">Yoxdur</option>
            <option value="highlight">Highlight (+90₼)</option>
            <option value="full">Tam çəkiliş (+200₼)</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Canlı musiqi</label>
          <select value={music} onChange={(e) => setMusic(e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2 text-sm">
            <option value="none">Yoxdur</option>
            <option value="live">Canlı ifaçı (+220₼)</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-royal-gradient p-6 text-white sm:flex-row">
        <div>
          <p className="text-xs uppercase tracking-widest text-royal-200">Təxmini ümumi qiymət</p>
          <p className="font-display text-3xl font-bold text-gold-300">{total}₼</p>
        </div>
        {onEstimate && (
          <button onClick={() => onEstimate({ total, guests, pkg })} className="btn-gold">
            Bu seçimlə sifariş et
          </button>
        )}
      </div>
    </div>
  )
}
