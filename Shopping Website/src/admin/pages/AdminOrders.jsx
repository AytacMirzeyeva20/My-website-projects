import React, { useState, useMemo } from 'react';
import {
  ShoppingBag, Clock, CheckCircle, XCircle, Layers,
  TrendingUp, ChevronDown, Trash2, AlertTriangle, Search, Filter,
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const STATUS_OPTIONS = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

const STATUS_CONFIG = {
  pending:    { color: 'bg-amber-500/15 text-amber-400 border-amber-500/25',   dot: 'bg-amber-400',   icon: Clock },
  processing: { color: 'bg-blue-500/15 text-blue-400 border-blue-500/25',     dot: 'bg-blue-400',    icon: Layers },
  shipped:    { color: 'bg-violet-500/15 text-violet-400 border-violet-500/25', dot: 'bg-violet-400', icon: TrendingUp },
  delivered:  { color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25', dot: 'bg-emerald-400', icon: CheckCircle },
  cancelled:  { color: 'bg-rose-500/15 text-rose-400 border-rose-500/25',     dot: 'bg-rose-400',    icon: XCircle },
};

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border ${cfg.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {status}
    </span>
  );
}

function StatusSelect({ value, onChange }) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none pl-3 pr-8 py-1.5 bg-white/3 border border-white/10 rounded-lg text-white/60 text-xs focus:outline-none focus:border-pink-500/40 transition-all cursor-pointer hover:border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {STATUS_OPTIONS.map((s) => (
          <option key={s} value={s} className="bg-[#13131f] capitalize">{s}</option>
        ))}
      </select>
      <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
    </div>
  );
}

function DeleteModal({ order, onConfirm, onCancel, loading }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#13131f] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-rose-500/15 flex items-center justify-center">
            <AlertTriangle size={18} className="text-rose-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Delete Order</p>
            <p className="text-white/30 text-xs">This cannot be undone</p>
          </div>
        </div>
        <p className="text-white/60 text-sm mb-6">
          Delete order <span className="text-white font-mono">#{order?.id}</span>?
        </p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 px-4 py-2.5 rounded-xl border border-white/10 text-white/60 text-sm hover:text-white transition-all">
            Cancel
          </button>
          <button onClick={onConfirm} disabled={loading} className="flex-1 px-4 py-2.5 rounded-xl bg-rose-500 text-white text-sm font-medium hover:bg-rose-400 transition-all disabled:opacity-50">
            {loading ? 'Deleting…' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}

const DEMO_ORDERS = [
  { id: 1001, customer: 'Aynur Həsənova', email: 'aynur@email.az', total: 145.00, status: 'pending', date: '2025-06-01', items: 3 },
  { id: 1002, customer: 'Leyla Məmmədova', email: 'leyla@email.az', total: 89.99, status: 'processing', date: '2025-05-31', items: 2 },
  { id: 1003, customer: 'Günel Əliyeva', email: 'gunel@email.az', total: 230.50, status: 'shipped', date: '2025-05-30', items: 5 },
  { id: 1004, customer: 'Xədicə İsmayılova', email: 'xadice@email.az', total: 67.00, status: 'delivered', date: '2025-05-28', items: 1 },
  { id: 1005, customer: 'Nigar Quliyeva', email: 'nigar@email.az', total: 312.75, status: 'delivered', date: '2025-05-27', items: 4 },
  { id: 1006, customer: 'Sevinc Rəhimova', email: 'sevinc@email.az', total: 55.00, status: 'cancelled', date: '2025-05-25', items: 1 },
];

export default function AdminOrders() {
  const { orders: apiOrders, updateOrderStatus, deleteOrder, loading } = useAdmin();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState(null);
  const [localOrders, setLocalOrders] = useState(DEMO_ORDERS);

  const orders = apiOrders.length > 0 ? apiOrders : localOrders;
  const isDemo = apiOrders.length === 0;

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleStatusChange = async (id, status) => {
    if (isDemo) {
      setLocalOrders((prev) => prev.map((o) => o.id === id ? { ...o, status } : o));
      showToast('Order status updated');
      return;
    }
    const result = await updateOrderStatus(id, status);
    if (result.success) showToast('Order status updated');
    else showToast(result.error, 'error');
  };

  const handleDelete = async () => {
    setDeleting(true);
    if (isDemo) {
      setLocalOrders((prev) => prev.filter((o) => o.id !== deleteTarget.id));
      setDeleting(false);
      setDeleteTarget(null);
      showToast('Order deleted');
      return;
    }
    const result = await deleteOrder(deleteTarget.id);
    setDeleting(false);
    setDeleteTarget(null);
    if (result.success) showToast('Order deleted');
    else showToast(result.error, 'error');
  };

  const filtered = useMemo(() => {
    return orders
      .filter((o) => statusFilter === 'All' || o.status === statusFilter)
      .filter((o) => {
        const q = search.toLowerCase();
        return (
          String(o.id).includes(q) ||
          (o.customer || '').toLowerCase().includes(q) ||
          (o.email || '').toLowerCase().includes(q)
        );
      });
  }, [orders, statusFilter, search]);

  const statusCounts = useMemo(() => {
    const map = { All: orders.length };
    STATUS_OPTIONS.forEach((s) => {
      map[s] = orders.filter((o) => o.status === s).length;
    });
    return map;
  }, [orders]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {toast && (
        <div className={`
          fixed top-6 right-6 z-50 px-4 py-3 rounded-xl text-sm font-medium shadow-2xl
          ${toast.type === 'success'
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
            : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}
        `}>
          {toast.msg}
        </div>
      )}

      {deleteTarget && (
        <DeleteModal
          order={deleteTarget}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
          loading={deleting}
        />
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold tracking-tight">Orders</h1>
          <p className="text-white/30 text-sm mt-1">
            {filtered.length} orders
            {isDemo && (
              <span className="ml-2 text-amber-400/60 text-[11px] border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 rounded-full">
                Demo data — connect /orders endpoint
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <Filter size={14} className="text-white/30 shrink-0" />
        {['All', ...STATUS_OPTIONS].map((s) => {
          const active = statusFilter === s;
          const cfg = STATUS_CONFIG[s];
          return (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`
                shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                ${active
                  ? cfg ? cfg.color + ' border' : 'bg-white/10 text-white border border-white/20'
                  : 'text-white/40 border border-white/5 hover:text-white/60 hover:border-white/10'}
              `}
            >
              <span className="capitalize">{s}</span>
              {statusCounts[s] > 0 && (
                <span className={`text-[10px] font-bold ${active ? 'opacity-80' : 'opacity-50'}`}>
                  {statusCounts[s]}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="relative">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          type="text"
          placeholder="Search by order ID, customer name or email…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white/3 border border-white/10 rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-pink-500/50 transition-all"
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-white/20">
          <ShoppingBag size={40} className="mb-3 opacity-30" />
          <p className="text-sm">No orders found</p>
        </div>
      ) : (
        <div className="rounded-2xl border border-white/5 overflow-hidden">
  
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  {['Order', 'Customer', 'Items', 'Total', 'Status', 'Date', ''].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-white/25 text-[11px] uppercase tracking-widest font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/4">
                {filtered.map((order) => (
                  <tr key={order.id} className="hover:bg-white/2 transition-colors">
                    <td className="px-5 py-4">
                      <span className="text-white font-mono text-sm">#{order.id}</span>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-white text-sm font-medium">{order.customer || 'Unknown'}</p>
                      {order.email && <p className="text-white/30 text-xs">{order.email}</p>}
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-white/50 text-sm">{order.items || '—'}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-white font-semibold text-sm">₼{(order.total || 0).toFixed(2)}</span>
                    </td>
                    <td className="px-5 py-4">
                      <StatusSelect
                        value={order.status || 'pending'}
                        onChange={(s) => handleStatusChange(order.id, s)}
                      />
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-white/30 text-xs">{order.date || '—'}</span>
                    </td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => setDeleteTarget(order)}
                        className="p-1.5 rounded-lg text-white/20 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
                        title="Delete order"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden divide-y divide-white/4">
            {filtered.map((order) => (
              <div key={order.id} className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-mono text-sm font-semibold">#{order.id}</span>
                  <button onClick={() => setDeleteTarget(order)} className="p-1.5 text-white/20 hover:text-rose-400 transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
                <div>
                  <p className="text-white text-sm">{order.customer || 'Unknown'}</p>
                  {order.email && <p className="text-white/30 text-xs">{order.email}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <StatusSelect
                    value={order.status || 'pending'}
                    onChange={(s) => handleStatusChange(order.id, s)}
                  />
                  <span className="text-white font-bold">₼{(order.total || 0).toFixed(2)}</span>
                </div>
                <p className="text-white/20 text-xs">{order.date || '—'} · {order.items || 0} items</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
