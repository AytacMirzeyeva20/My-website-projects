import { useData } from '../../context/DataContext.jsx'
import { img } from '../../assets/imageMap.js'

export default function ServicesAdmin() {
  const { services, updateService } = useData()

  return (
    <div>
      <h2 className="font-display text-xl font-bold text-royal-900">Xidmətləri İdarə Et</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.id} className="flex gap-4 rounded-2xl border border-royal-100 bg-white p-4 shadow-premium">
            <img src={img(s.img)} alt={s.title} className="h-24 w-24 shrink-0 rounded-xl object-cover" />
            <div className="flex-1 space-y-2">
              <input
                value={s.title}
                onChange={(e) => updateService(s.id, { title: e.target.value })}
                className="w-full rounded-lg border border-royal-200 px-3 py-1.5 text-sm font-bold"
              />
              <textarea
                value={s.desc}
                onChange={(e) => updateService(s.id, { desc: e.target.value })}
                rows={2}
                className="w-full rounded-lg border border-royal-200 px-3 py-1.5 text-xs"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
