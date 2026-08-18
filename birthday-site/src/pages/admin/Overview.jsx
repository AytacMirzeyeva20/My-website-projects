import { useData } from '../../context/DataContext.jsx'

export default function Overview() {
  const { orders } = useData()
  const today = new Date().toDateString()

  const stats = [
    { label: 'Ümumi Sifariş', value: orders.length, icon: '🧾', color: 'bg-royal-gradient' },
    { label: 'Bugünkü Sifarişlər', value: orders.filter((o) => new Date(o.createdAt).toDateString() === today).length, icon: '📅', color: 'bg-gradient-to-br from-gold-400 to-gold-600' },
    { label: 'Gözləyən', value: orders.filter((o) => o.status === 'Gözləyir').length, icon: '⏳', color: 'bg-gradient-to-br from-royal-400 to-royal-600' },
    { label: 'Tamamlanan', value: orders.filter((o) => o.status === 'Tamamlandı').length, icon: '✅', color: 'bg-gradient-to-br from-green-500 to-green-700' },
    { label: 'Ləğv Edilən', value: orders.filter((o) => o.status === 'Ləğv edildi').length, icon: '❌', color: 'bg-gradient-to-br from-red-500 to-red-700' },
  ]

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className={`${s.color} rounded-2xl p-5 text-white shadow-premium`}>
            <div className="text-2xl">{s.icon}</div>
            <p className="mt-3 font-display text-3xl font-bold">{s.value}</p>
            <p className="text-xs text-white/80">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-royal-100 bg-white p-6 shadow-premium">
        <h2 className="font-display text-lg font-bold text-royal-900">Son Sifarişlər</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-royal-100 text-xs uppercase tracking-wide text-royal-500">
                <th className="py-2 pr-4">Müştəri</th>
                <th className="py-2 pr-4">Tarix</th>
                <th className="py-2 pr-4">Qonaq</th>
                <th className="py-2 pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 6).map((o) => (
                <tr key={o.id} className="border-b border-royal-50">
                  <td className="py-3 pr-4 font-semibold text-royal-800">{o.fullName}</td>
                  <td className="py-3 pr-4 text-royal-600">{o.date}</td>
                  <td className="py-3 pr-4 text-royal-600">{o.guests}</td>
                  <td className="py-3 pr-4">
                    <span className="rounded-full bg-lavender px-3 py-1 text-xs font-semibold text-royal-700">{o.status}</span>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-6 text-center text-royal-400">Hələ sifariş yoxdur.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
