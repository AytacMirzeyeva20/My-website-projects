import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Package, ShoppingBag, DollarSign,
  Clock, CheckCircle, XCircle, ArrowUpRight, Layers,
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

function StatCard({ icon: Icon, label, value, sub, color, to }) {
  const colorMap = {
    pink: 'from-pink-500/20 to-rose-500/5 border-pink-500/20 text-pink-400',
    violet: 'from-violet-500/20 to-purple-500/5 border-violet-500/20 text-violet-400',
    emerald: 'from-emerald-500/20 to-green-500/5 border-emerald-500/20 text-emerald-400',
    amber: 'from-amber-500/20 to-yellow-500/5 border-amber-500/20 text-amber-400',
  };
  const Wrapper = to ? Link : 'div';
  return (
    <Wrapper
      to={to}
      className={`
        relative overflow-hidden rounded-2xl border bg-linear-to-br p-5
        ${colorMap[color]}
        ${to ? 'hover:scale-[1.02] transition-transform duration-200 cursor-pointer' : ''}
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
          <p className="text-white text-2xl font-bold tracking-tight">{value}</p>
          {sub && <p className="text-white/30 text-xs mt-1">{sub}</p>}
        </div>
        <div className={`p-2.5 rounded-xl bg-white/5`}>
          <Icon size={20} className="opacity-80" />
        </div>
      </div>
      {to && (
        <ArrowUpRight size={14} className="absolute bottom-4 right-4 opacity-30 hover:opacity-60 transition-opacity" />
      )}
    </Wrapper>
  );
}

const STATUS_CONFIG = {
  pending:    { label: 'Pending',    color: 'bg-amber-500/15 text-amber-400 border-amber-500/20',   icon: Clock },
  processing: { label: 'Processing', color: 'bg-blue-500/15 text-blue-400 border-blue-500/20',     icon: Layers },
  shipped:    { label: 'Shipped',    color: 'bg-violet-500/15 text-violet-400 border-violet-500/20', icon: TrendingUp },
  delivered:  { label: 'Delivered',  color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20', icon: CheckCircle },
  cancelled:  { label: 'Cancelled',  color: 'bg-rose-500/15 text-rose-400 border-rose-500/20',     icon: XCircle },
};

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full border ${cfg.color}`}>
      {status}
    </span>
  );
}

export default function AdminDashboard() {
  const { stats, products, orders, loading } = useAdmin();

  const recentOrders = useMemo(() => [...orders].slice(0, 5), [orders]);
  const lowStockProducts = useMemo(
    () => products.filter((p) => (p.stock !== undefined ? p.stock < 10 : false)).slice(0, 4),
    [products]
  );

  const categoryCount = useMemo(() => {
    const map = {};
    products.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 5);
  }, [products]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
  
      <div>
        <h1 className="text-white text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-white/30 text-sm mt-1">Welcome back — here's what's happening</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={DollarSign}
          label="Total Revenue"
          value={`₼${stats.totalRevenue.toFixed(2)}`}
          sub="Lifetime"
          color="emerald"
        />
        <StatCard
          icon={ShoppingBag}
          label="Total Orders"
          value={stats.totalOrders}
          sub={`${stats.pendingOrders} pending`}
          color="violet"
          to="/admin/orders"
        />
        <StatCard
          icon={Package}
          label="Products"
          value={stats.totalProducts}
          sub="In catalogue"
          color="pink"
          to="/admin/products"
        />
        <StatCard
          icon={Clock}
          label="Pending"
          value={stats.pendingOrders}
          sub="Needs action"
          color="amber"
          to="/admin/orders"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-white/5 bg-white/2 p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-semibold text-sm">Recent Orders</h2>
            <Link to="/admin/orders" className="text-pink-400 text-xs hover:text-pink-300 transition-colors">
              View all →
            </Link>
          </div>
          {recentOrders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-white/20">
              <ShoppingBag size={32} className="mb-3 opacity-30" />
              <p className="text-sm">No orders yet</p>
            </div>
          ) : (
            <div className="space-y-2">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/3 transition-colors border border-transparent hover:border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
                      <ShoppingBag size={14} />
                    </div>
                    <div>
                      <p className="text-white text-xs font-medium">#{order.id}</p>
                      <p className="text-white/30 text-[11px]">{order.customer || 'Customer'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <StatusBadge status={order.status || 'pending'} />
                    <p className="text-white text-xs font-semibold">₼{(order.total || 0).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/2 p-5">
          <h2 className="text-white font-semibold text-sm mb-5">Categories</h2>
          {categoryCount.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-white/20">
              <Package size={32} className="mb-3 opacity-30" />
              <p className="text-sm">No products</p>
            </div>
          ) : (
            <div className="space-y-3">
              {categoryCount.map(([cat, count]) => {
                const pct = Math.round((count / stats.totalProducts) * 100);
                return (
                  <div key={cat}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/60 text-xs capitalize">{cat}</span>
                      <span className="text-white/40 text-xs">{count}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-pink-500 to-rose-400 rounded-full transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {lowStockProducts.length > 0 && (
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <h2 className="text-amber-400 font-semibold text-sm">Low Stock Alert</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {lowStockProducts.map((p) => (
              <Link
                key={p.id}
                to={`/admin/products/edit/${p.id}`}
                className="flex items-center gap-2 p-3 rounded-xl bg-white/2 border border-white/5 hover:border-amber-500/20 transition-colors"
              >
                <img src={p.image} alt={p.name} className="w-8 h-8 object-contain rounded-lg bg-white/5" />
                <div className="min-w-0">
                  <p className="text-white text-xs font-medium truncate">{p.name}</p>
                  <p className="text-amber-400 text-[11px]">{p.stock} left</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
