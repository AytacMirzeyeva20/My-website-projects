import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Search, Pencil, Trash2, Package, AlertTriangle, Filter } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const CATEGORIES = ['All', 'Clothes', 'Bags', 'Shoes', 'Accessories', 'New'];

function DeleteModal({ product, onConfirm, onCancel, loading }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#13131f] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-rose-500/15 flex items-center justify-center">
            <AlertTriangle size={18} className="text-rose-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Delete Product</p>
            <p className="text-white/30 text-xs">This action cannot be undone</p>
          </div>
        </div>
        <p className="text-white/60 text-sm mb-6">
          Are you sure you want to delete <span className="text-white font-medium">"{product?.name}"</span>?
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 rounded-xl border border-white/10 text-white/60 text-sm hover:text-white hover:border-white/20 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 px-4 py-2.5 rounded-xl bg-rose-500 text-white text-sm font-medium hover:bg-rose-400 transition-all disabled:opacity-50"
          >
            {loading ? 'Deleting…' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminProducts() {
  const navigate = useNavigate();
  const { products, deleteProduct, loading } = useAdmin();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = useMemo(() => {
    return products
      .filter((p) => category === 'All' || p.category === category)
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }, [products, search, category]);

  const handleDelete = async () => {
    setDeleting(true);
    const result = await deleteProduct(deleteTarget.id);
    setDeleting(false);
    setDeleteTarget(null);
    if (result.success) showToast('Product deleted successfully');
    else showToast(result.error, 'error');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
   
      {toast && (
        <div className={`
          fixed top-6 right-6 z-50 px-4 py-3 rounded-xl text-sm font-medium shadow-2xl transition-all
          ${toast.type === 'success'
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
            : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}
        `}>
          {toast.msg}
        </div>
      )}

      {deleteTarget && (
        <DeleteModal
          product={deleteTarget}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
          loading={deleting}
        />
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold tracking-tight">Products</h1>
          <p className="text-white/30 text-sm mt-1">{filtered.length} items</p>
        </div>
        <Link
          to="/admin/products/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-pink-500 hover:bg-pink-400 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-lg shadow-pink-500/25"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Add Product</span>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="Search products…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/3 border border-white/10 rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-0.5">
          <Filter size={14} className="text-white/30 shrink-0" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`
                shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all
                ${category === cat
                  ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                  : 'text-white/40 border border-white/5 hover:text-white/70 hover:border-white/10'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-white/20">
          <Package size={40} className="mb-3 opacity-30" />
          <p className="text-sm">No products found</p>
          <Link to="/admin/products/new" className="mt-3 text-pink-400 text-xs hover:text-pink-300">
            Add your first product →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl border border-white/5 bg-white/2 overflow-hidden hover:border-white/10 hover:bg-white/4 transition-all duration-200"
            >
      
              <div className="relative h-48 bg-white/2 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => navigate(`/admin/products/edit/${product.id}`)}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
                    title="Edit"
                  >
                    <Pencil size={15} />
                  </button>
                  <button
                    onClick={() => setDeleteTarget(product)}
                    className="p-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/40 text-rose-400 transition-all backdrop-blur-sm"
                    title="Delete"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
                <span className="absolute top-2 left-2 bg-black/60 text-white/60 text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {product.category}
                </span>
              </div>

              <div className="p-4">
                <p className="text-white text-sm font-medium leading-tight mb-1 truncate">{product.name}</p>
                <p className="text-pink-400 text-sm font-bold">${product.price?.toFixed(2)}</p>
                {product.stock !== undefined && (
                  <p className={`text-[11px] mt-1 ${product.stock < 10 ? 'text-amber-400' : 'text-white/30'}`}>
                    {product.stock < 10 ? `⚠ Only ${product.stock} left` : `${product.stock} in stock`}
                  </p>
                )}
              </div>

              <div className="px-4 pb-4 flex gap-2">
                <Link
                  to={`/admin/products/edit/${product.id}`}
                  className="flex-1 text-center py-2 rounded-lg border border-white/10 text-white/50 text-xs hover:text-white hover:border-white/20 transition-all"
                >
                  Edit
                </Link>
                <button
                  onClick={() => setDeleteTarget(product)}
                  className="flex-1 py-2 rounded-lg border border-rose-500/20 text-rose-400/70 text-xs hover:text-rose-400 hover:border-rose-500/40 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
