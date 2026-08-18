import { useData } from '../../context/DataContext.jsx'

export default function PackagesAdmin() {
  const { packages, updatePackage } = useData()

  const updateFeature = (pkgId, idx, value) => {
    const pkg = packages.find((p) => p.id === pkgId)
    const features = [...pkg.features]
    features[idx] = value
    updatePackage(pkgId, { features })
  }

  return (
    <div>
      <h2 className="font-display text-xl font-bold text-royal-900">Paketləri İdarə Et</h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {packages.map((p) => (
          <div key={p.id} className="rounded-2xl border border-royal-100 bg-white p-6 shadow-premium">
            <input
              value={p.name}
              onChange={(e) => updatePackage(p.id, { name: e.target.value })}
              className="w-full rounded-lg border border-royal-200 px-3 py-2 font-display text-lg font-bold text-royal-900"
            />
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm text-royal-500">Qiymət:</span>
              <input
                type="number"
                value={p.price}
                onChange={(e) => updatePackage(p.id, { price: Number(e.target.value) })}
                className="w-24 rounded-lg border border-royal-200 px-3 py-1.5 text-sm"
              />
              <span className="text-sm text-royal-500">₼</span>
            </div>
            <div className="mt-4 space-y-2">
              {p.features.map((f, idx) => (
                <input
                  key={idx}
                  value={f}
                  onChange={(e) => updateFeature(p.id, idx, e.target.value)}
                  className="w-full rounded-lg border border-royal-200 px-3 py-1.5 text-xs"
                />
              ))}
            </div>
            <label className="mt-4 flex items-center gap-2 text-xs font-semibold text-royal-600">
              <input type="checkbox" checked={!!p.popular} onChange={(e) => updatePackage(p.id, { popular: e.target.checked })} />
              Ən Populyar kimi göstər
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
