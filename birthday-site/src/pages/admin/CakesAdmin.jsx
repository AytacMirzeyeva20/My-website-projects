import { useState } from 'react'
import { useData } from '../../context/DataContext.jsx'
import { img } from '../../assets/imageMap.js'
import imageMap from '../../assets/imageMap.js'

const emptyForm = { name: '', price: '', img: 'cake1.jpg', desc: '' }

export default function CakesAdmin() {
  const { cakes, addCake, updateCake, deleteCake } = useData()
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.price) return
    if (editingId) {
      updateCake(editingId, { ...form, price: Number(form.price) })
      setEditingId(null)
    } else {
      addCake({ ...form, price: Number(form.price) })
    }
    setForm(emptyForm)
  }

  const edit = (c) => {
    setForm({ name: c.name, price: c.price, img: c.img, desc: c.desc })
    setEditingId(c.id)
  }

  return (
    <div>
      <h2 className="font-display text-xl font-bold text-royal-900">Tortları İdarə Et</h2>

      <form onSubmit={submit} className="mt-6 grid gap-4 rounded-2xl border border-royal-100 bg-white p-6 shadow-premium sm:grid-cols-2">
        <input placeholder="Tort adı" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="rounded-lg border border-royal-200 px-3 py-2.5 text-sm" />
        <input placeholder="Qiymət (₼)" type="number" value={form.price} onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))} className="rounded-lg border border-royal-200 px-3 py-2.5 text-sm" />
        <select value={form.img} onChange={(e) => setForm((f) => ({ ...f, img: e.target.value }))} className="rounded-lg border border-royal-200 px-3 py-2.5 text-sm">
          {Object.keys(imageMap).map((k) => <option key={k} value={k}>{k}</option>)}
        </select>
        <input placeholder="Təsvir" value={form.desc} onChange={(e) => setForm((f) => ({ ...f, desc: e.target.value }))} className="rounded-lg border border-royal-200 px-3 py-2.5 text-sm" />
        <div className="flex gap-3 sm:col-span-2">
          <button type="submit" className="btn-gold">{editingId ? 'Yenilə' : 'Əlavə et'}</button>
          {editingId && (
            <button type="button" onClick={() => { setForm(emptyForm); setEditingId(null) }} className="btn-outline">Ləğv et</button>
          )}
        </div>
      </form>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cakes.map((c) => (
          <div key={c.id} className="rounded-2xl border border-royal-100 bg-white p-4 shadow-premium">
            <img src={img(c.img)} alt={c.name} className="h-40 w-full rounded-xl object-cover" />
            <div className="mt-3 flex items-start justify-between">
              <div>
                <p className="font-display text-sm font-bold text-royal-900">{c.name}</p>
                <p className="text-xs text-royal-500">{c.price}₼</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => edit(c)} className="text-xs font-semibold text-gold-600">Redaktə</button>
                <button onClick={() => deleteCake(c.id)} className="text-xs font-semibold text-red-500">Sil</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
