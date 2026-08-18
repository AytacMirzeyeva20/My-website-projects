import { useState } from 'react'
import { useData } from '../../context/DataContext.jsx'
import { img } from '../../assets/imageMap.js'
import imageMap from '../../assets/imageMap.js'

export default function GalleryAdmin() {
  const { gallery, addGalleryItem, deleteGalleryItem } = useData()
  const [form, setForm] = useState({ img: 'birth.avif', category: 'Dekorasiya' })

  const submit = (e) => {
    e.preventDefault()
    addGalleryItem(form)
  }

  return (
    <div>
      <h2 className="font-display text-xl font-bold text-royal-900">Qalereyanı İdarə Et</h2>

      <form onSubmit={submit} className="mt-6 flex flex-wrap items-end gap-3 rounded-2xl border border-royal-100 bg-white p-6 shadow-premium">
        <div>
          <label className="text-xs font-semibold text-royal-600">Şəkil</label>
          <select value={form.img} onChange={(e) => setForm((f) => ({ ...f, img: e.target.value }))} className="mt-1 block rounded-lg border border-royal-200 px-3 py-2 text-sm">
            {Object.keys(imageMap).map((k) => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-royal-600">Kateqoriya</label>
          <input value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className="mt-1 block rounded-lg border border-royal-200 px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="btn-gold">Əlavə et</button>
      </form>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {gallery.map((g) => (
          <div key={g.id} className="group relative overflow-hidden rounded-xl">
            <img src={img(g.img)} alt={g.category} className="h-32 w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-royal-950/60 opacity-0 transition group-hover:opacity-100">
              <button onClick={() => deleteGalleryItem(g.id)} className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">Sil</button>
            </div>
            <span className="absolute bottom-1 left-1 rounded bg-white/90 px-1.5 py-0.5 text-[10px] font-semibold text-royal-800">{g.category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
