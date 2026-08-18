import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import { img } from '../../assets/imageMap.js'
import Overview from './Overview.jsx'
import OrdersAdmin from './OrdersAdmin.jsx'
import CakesAdmin from './CakesAdmin.jsx'
import PackagesAdmin from './PackagesAdmin.jsx'
import ServicesAdmin from './ServicesAdmin.jsx'
import GalleryAdmin from './GalleryAdmin.jsx'
import ReviewsAdmin from './ReviewsAdmin.jsx'
import { useData } from '../../context/DataContext.jsx'

const nav = [
  { to: '/admin', label: 'İcmal', end: true, icon: '📊' },
  { to: '/admin/orders', label: 'Sifarişlər', icon: '🧾' },
  { to: '/admin/cakes', label: 'Tortlar', icon: '🎂' },
  { to: '/admin/packages', label: 'Paketlər', icon: '🎁' },
  { to: '/admin/services', label: 'Xidmətlər', icon: '💫' },
  { to: '/admin/gallery', label: 'Qalereya', icon: '🖼️' },
  { to: '/admin/reviews', label: 'Rəylər', icon: '⭐' },
]

export default function AdminDashboard() {
  const { logout } = useAuth()
  const { orders } = useData()
  const navigate = useNavigate()
  const pendingCount = orders.filter((o) => o.status === 'Gözləyir').length

  return (
    <div className="flex min-h-screen bg-lavender/40">
      <aside className="hidden w-64 flex-col bg-royal-gradient text-white lg:flex">
        <div className="flex items-center gap-3 px-6 py-6">
          <img src={img('logo.jpg')} alt="Velvet & Gold" className="h-10 w-10 rounded-full object-cover ring-2 ring-gold-400" />
          <div>
            <p className="font-display text-sm font-bold">Velvet & Gold</p>
            <p className="text-[10px] text-royal-300">Admin Panel</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 px-4">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  isActive ? 'bg-gold-400 text-royal-950' : 'text-royal-200 hover:bg-white/10'
                }`
              }
            >
              <span className="flex items-center gap-2">
                <span>{n.icon}</span> {n.label}
              </span>
              {n.to === '/admin/orders' && pendingCount > 0 && (
                <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">{pendingCount}</span>
              )}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={() => { logout(); navigate('/admin/login') }}
          className="mx-4 mb-6 rounded-xl border border-gold-400/50 px-4 py-2.5 text-sm font-semibold text-gold-300 hover:bg-white/10"
        >
          Çıxış et
        </button>
      </aside>

      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-royal-100 bg-white px-6 py-4 lg:px-10">
          <h1 className="font-display text-lg font-bold text-royal-900">İdarəetmə Paneli</h1>
          <div className="flex items-center gap-3">
            {pendingCount > 0 && (
              <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                🔔 {pendingCount} yeni sifariş
              </span>
            )}
            <button onClick={() => { logout(); navigate('/admin/login') }} className="text-sm font-semibold text-royal-600 lg:hidden">
              Çıxış
            </button>
          </div>
        </header>

        <main className="px-6 py-8 lg:px-10">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="orders" element={<OrdersAdmin />} />
            <Route path="cakes" element={<CakesAdmin />} />
            <Route path="packages" element={<PackagesAdmin />} />
            <Route path="services" element={<ServicesAdmin />} />
            <Route path="gallery" element={<GalleryAdmin />} />
            <Route path="reviews" element={<ReviewsAdmin />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
