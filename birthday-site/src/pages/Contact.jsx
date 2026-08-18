import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <div>
      <section className="bg-royal-gradient py-20 text-center text-white">
        <p className="section-eyebrow text-gold-300">Əlaqə</p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Bizimlə Əlaqə Saxlayın</h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading eyebrow="Sualınız Var?" title="Komandamız Sizinlə" />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              { label: 'Telefon', value: '+994 50 123 45 67', icon: '📞' },
              { label: 'Email', value: 'hello@velvetgold.az', icon: '✉️' },
              { label: 'Ünvan', value: 'Nizami küç. 203, Bakı, Azərbaycan', icon: '📍' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-royal-100 bg-white p-5 shadow-premium">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-royal-gradient text-xl">{c.icon}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-royal-500">{c.label}</p>
                  <p className="font-display text-base font-bold text-royal-900">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-royal-100 shadow-premium">
              <iframe
                title="Google Xəritə"
                src="https://www.google.com/maps?q=Baku,Azerbaijan&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>

            <div className="flex gap-3">
              {['Instagram', 'Facebook', 'TikTok'].map((s) => (
                <a key={s} href="#" className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400 text-sm font-bold text-gold-600 hover:bg-gold-400 hover:text-royal-950">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="space-y-5 rounded-3xl border border-royal-100 bg-white p-6 shadow-premium sm:p-8">
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-400 text-3xl">✓</div>
                <p className="mt-5 font-display text-xl font-bold text-royal-900">Mesajınız Göndərildi!</p>
                <p className="mt-2 text-sm text-royal-600">Ən qısa zamanda sizinlə əlaqə saxlayacağıq.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Ad Soyad</label>
                  <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-royal-600">Mesaj</label>
                  <textarea rows={5} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className="mt-2 w-full rounded-lg border border-royal-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
                </div>
                <button type="submit" className="btn-gold w-full justify-center">Göndər</button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
