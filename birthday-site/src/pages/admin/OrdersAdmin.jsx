import { useState } from 'react'
import { useData } from '../../context/DataContext.jsx'

const statuses = ['Gözləyir', 'Təsdiqləndi', 'Tamamlandı', 'Ləğv edildi']

export default function OrdersAdmin() {
  const { orders, updateOrderStatus } = useData()
  const [filter, setFilter] = useState('Hamısı')
  const [selected, setSelected] = useState(null)

  const filtered = filter === 'Hamısı' ? orders : orders.filter((o) => o.status === filter)

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-xl font-bold text-royal-900">Bütün Sifarişlər</h2>
        <div className="flex flex-wrap gap-2">
          {['Hamısı', ...statuses].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                filter === s ? 'bg-gold-400 text-royal-950' : 'border border-royal-200 text-royal-600'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-royal-100 bg-white shadow-premium">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-royal-100 bg-lavender/40 text-xs uppercase tracking-wide text-royal-500">
              <th className="px-4 py-3">Müştəri</th>
              <th className="px-4 py-3">Telefon</th>
              <th className="px-4 py-3">Tarix</th>
              <th className="px-4 py-3">Paket</th>
              <th className="px-4 py-3">Qonaq</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Bax</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} className="border-b border-royal-50 hover:bg-lavender/20">
                <td className="px-4 py-3 font-semibold text-royal-800">{o.fullName}</td>
                <td className="px-4 py-3 text-royal-600">{o.phone}</td>
                <td className="px-4 py-3 text-royal-600">{o.date}</td>
                <td className="px-4 py-3 text-royal-600">{o.package}</td>
                <td className="px-4 py-3 text-royal-600">{o.guests}</td>
                <td className="px-4 py-3">
                  <select
                    value={o.status}
                    onChange={(e) => updateOrderStatus(o.id, e.target.value)}
                    className="rounded-full border border-royal-200 px-2 py-1 text-xs font-semibold"
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <button onClick={() => setSelected(o)} className="text-xs font-semibold text-gold-600 hover:underline">Ətraflı</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-royal-400">Sifariş tapılmadı.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-royal-950/60 p-6" onClick={() => setSelected(null)}>
          <div className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-premium" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display text-lg font-bold text-royal-900">Sifariş Detalları</h3>
            <dl className="mt-4 space-y-2 text-sm">
              {Object.entries(selected).map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-royal-50 py-1.5">
                  <dt className="font-semibold text-royal-500">{k}</dt>
                  <dd className="text-right text-royal-800">{Array.isArray(v) ? v.join(', ') : String(v)}</dd>
                </div>
              ))}
            </dl>
            <button onClick={() => setSelected(null)} className="btn-outline mt-6 w-full justify-center">Bağla</button>
          </div>
        </div>
      )}
    </div>
  )
}
