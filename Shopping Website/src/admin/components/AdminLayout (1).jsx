import React, { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Package, ShoppingBag, Menu, X,
  ChevronRight, Bell, Settings, Store, LogOut,
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import AdminLogin from './AdminLogin';

const navItems = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { path: '/admin/products', label: 'Products', icon: Package },
  { path: '/admin/orders', label: 'Orders', icon: ShoppingBag },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 const [isAuth, setIsAuth] = useState(false);
 console.log('isAuth:', isAuth, 'session:', sessionStorage.getItem('admin_auth'));
  const location = useLocation();
  const navigate = useNavigate();
  const { stats } = useAdmin();

  const isActive = (item) =>
    item.exact
      ? location.hash === '#' + item.path
      : location.hash.startsWith('#' + item.path);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsAuth(false);
  };

  if (!isAuth) {
    return <AdminLogin onLogin={() => setIsAuth(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex font-sans">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

   
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-30 flex flex-col
          bg-[#0d0d14] border-r border-white/5
          transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        <div className="px-6 py-7 flex items-center justify-between border-b border-white/5">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg shadow-pink-500/25">
              <Store size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm tracking-wide">Luxue</p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest">Admin Panel</p>
            </div>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/40 hover:text-white">
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          <p className="text-white/20 text-[10px] uppercase tracking-widest px-3 mb-4">Main Menu</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group
                  ${active
                    ? 'bg-pink-500/15 text-pink-400 border border-pink-500/20'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <Icon size={17} className={active ? 'text-pink-400' : 'text-white/40 group-hover:text-white/70'} />
                <span className="flex-1">{item.label}</span>
                {item.label === 'Orders' && stats.pendingOrders > 0 && (
                  <span className="bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {stats.pendingOrders}
                  </span>
                )}
                {active && <ChevronRight size={14} className="text-pink-400/60" />}
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-white/5">
            <p className="text-white/20 text-[10px] uppercase tracking-widest px-3 mb-4">Store</p>
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200 group"
            >
              <Store size={17} className="text-white/40 group-hover:text-white/70" />
              <span>View Store</span>
            </Link>
          </div>
        </nav>

        <div className="px-4 py-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-medium">Admin</p>
              <p className="text-white/30 text-[10px]">admin@luxue.az</p>
            </div>
            <button
              onClick={handleLogout}
              title="Çıxış"
              className="p-1.5 rounded-lg text-white/20 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-10 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-white/50 hover:text-white">
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-1 text-white/30 text-sm">
              <Link to="/admin" className="hover:text-white/60 transition-colors">Admin</Link>
              {location.hash !== '#/admin' && (
                <>
                  <ChevronRight size={14} />
                  <span className="text-white/60 capitalize">
                    {location.hash.replace('#/', '').split('/').pop()}
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {stats.pendingOrders > 0 && (
              <div className="relative">
                <button className="text-white/40 hover:text-white/70 transition-colors p-1">
                  <Bell size={18} />
                </button>
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-pink-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {stats.pendingOrders}
                </span>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-white/30 hover:text-rose-400 hover:bg-rose-500/10 text-xs transition-all"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Çıxış</span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
