import { useState } from 'react'
import { useData } from '../../context/DataContext.jsx'

export default function ReviewsAdmin() {
  const { reviews, addReview, deleteReview } = useData()
  const [form, setForm] = useState({ name: '', text: '', rating: 5 })

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.text) return
    addReview(form)
    setForm({ name: '', text: '', rating: 5 })
  }

  return (
    <div>
      <h2 className="font-display text-xl font-bold text-royal-900">Müştəri Rəylərini İdarə Et</h2>

      <form onSubmit={submit} className="mt-6 grid gap-4 rounded-2xl border border-royal-100 bg-white p-6 shadow-premium sm:grid-cols-2">
        <input placeholder="Müştəri adı" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="rounded-lg border border-royal-200 px-3 py-2.5 text-sm" />
        <select value={form.rating} onChange={(e) => setForm((f) => ({ ...f, rating: Number(e.target.value) }))} className="rounded-lg border border-royal-200 px-3 py-2.5 text-sm">
          {[5, 4, 3, 2, 1].map((r) => <option key={r} value={r}>{r} ulduz</option>)}
        </select>
        <textarea placeholder="Rəy mətni" value={form.text} onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))} className="rounded-lg border border-royal-200 px-3 py-2.5 text-sm sm:col-span-2" rows={3} />
        <button type="submit" className="btn-gold sm:col-span-2">Əlavə et</button>
      </form>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <div key={r.id} className="rounded-2xl border border-royal-100 bg-white p-5 shadow-premium">
            <div className="flex items-start justify-between">
              <p className="font-display text-sm font-bold text-royal-900">{r.name}</p>
              <button onClick={() => deleteReview(r.id)} className="text-xs font-semibold text-red-500">Sil</button>
            </div>
            <div className="mt-1 text-gold-400">{'★'.repeat(r.rating)}</div>
            <p className="mt-2 text-xs italic text-royal-600">"{r.text}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}
