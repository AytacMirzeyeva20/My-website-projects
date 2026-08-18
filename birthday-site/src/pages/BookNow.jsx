import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useData } from '../context/DataContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PriceCalculator from '../components/PriceCalculator.jsx'

const extraServices = ['Foto çəkilişi', 'Video çəkilişi', 'Canlı musiqi', 'Gül divarı', 'Neon lövhə']

export default function BookNow() {
  const { addOrder, packages } = useData()
  const [params] = useSearchParams()
  const presetPackage = params.get('package')
  const presetCake = params.get('cake')

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    venue: '',
    guests: '',
    package: presetPackage || packages[1]?.id || '',
    extras: [],
    cake: presetCake || '',
    notes: '',
  })
  const [estimate, setEstimate] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const toggleExtra = (name) => {
    setForm((f) => ({
      ...f,
      extras: f.extras.includes(name) ? f.extras.filter((e) => e !== name) : [...f.extras, name],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.fullName || !form.phone || !form.date || !form.guests) {
      setError('Zəhmət olmasa ad, telefon, tarix və qonaq sayını doldurun.')
      return
    }
    setError('')
    addOrder({ ...form, estimate: estimate?.total })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold-400 text-4xl">✓</div>
        <h1 className="mt-6 font-display text-3xl font-bold text-royal-900">Sifarişiniz Qəbul Edildi!</h1>
        <p className="mt-4 text-royal-600">
          Təşəkkür edirik, {form.fullName}! Komandamız ən qısa zamanda sizinlə əlaqə saxlayacaq.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-outline mt-8">Yeni Sifariş</button>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-royal-gradient py-20 text-center text-white">
        <p className="section-eyebrow text-gold-300">Book Now</p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Premium Sifariş Forması</h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading eyebrow="Tədbirinizi Planlayın" title="Detalları Doldurun" />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-royal-100 bg-white p-6 shadow-premium sm:p-8">
            {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Ad və Soyad *</label>
                <input value={form.fullName} onChange={(e) => update('fullName', e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Telefon *</label>
                <input value={form.phone} onChange={(e) => update('phone', e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Email</label>
              <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Tədbir Tarixi *</label>
                <input type="date" value={form.date} onChange={(e) => update('date', e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Qonaq Sayı *</label>
                <input type="number" min="1" value={form.guests} onChange={(e) => update('guests', e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Məkan</label>
              <input value={form.venue} onChange={(e) => update('venue', e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Paket Seçimi</label>
              <select value={form.package} onChange={(e) => update('package', e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm">
                {packages.map((p) => (
                  <option key={p.id} value={p.id}>{p.name} — {p.price}₼</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Tort (istəyə görə)</label>
              <input value={form.cake} onChange={(e) => update('cake', e.target.value)} placeholder="Məs: Qızıl Damla Tortu" className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Əlavə Xidmətlər</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {extraServices.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggleExtra(s)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      form.extras.includes(s) ? 'border-gold-400 bg-gold-400 text-royal-950' : 'border-royal-200 text-royal-600 hover:border-gold-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Əlavə Qeyd</label>
              <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows={4} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
            </div>

            {estimate && (
              <div className="rounded-xl bg-lavender/60 px-4 py-3 text-sm text-royal-700">
                Seçdiyiniz kalkulyator qiyməti: <span className="font-bold text-gold-700">{estimate.total}₼</span>
              </div>
            )}

            <button type="submit" className="btn-gold w-full justify-center">Sifarişi Təsdiqlə</button>
          </form>

          <div>
            <PriceCalculator onEstimate={(est) => { setEstimate(est); update('package', est.pkg) }} />
          </div>
        </div>
      </section>
    </div>
  )
}
