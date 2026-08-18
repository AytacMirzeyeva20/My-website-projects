import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ImageIcon, Save, Loader2 } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const CATEGORIES = ['Clothes', 'Bags', 'Shoes', 'Accessories', 'New'];

const EMPTY_FORM = {
  name: '',
  price: '',
  category: 'Clothes',
  image: '',
  description: '',
  stock: '',
};

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">{label}</label>
      {children}
      {error && <p className="text-rose-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

function Input({ className = '', ...props }) {
  return (
    <input
      {...props}
      className={`
        w-full px-4 py-2.5 bg-white/3 border border-white/10 rounded-xl
        text-white text-sm placeholder-white/20
        focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all
        ${className}
      `}
    />
  );
}

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required';
  if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0)
    errors.price = 'Valid price is required';
  if (!form.category) errors.category = 'Category is required';
  if (form.stock !== '' && (isNaN(Number(form.stock)) || Number(form.stock) < 0))
    errors.stock = 'Stock must be a non-negative number';
  return errors;
}

export default function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const { products, addProduct, updateProduct } = useAdmin();

  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (isEditing) {
      const product = products.find((p) => String(p.id) === String(id));
      if (product) {
        setForm({
          name: product.name || '',
          price: product.price != null ? String(product.price) : '',
          category: product.category || 'Clothes',
          image: product.image || '',
          description: product.description || '',
          stock: product.stock != null ? String(product.stock) : '',
        });
      }
    }
  }, [id, products, isEditing]);

  const set = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setSaving(true);
    const payload = {
      name: form.name.trim(),
      price: parseFloat(form.price),
      category: form.category,
      image: form.image.trim(),
      description: form.description.trim(),
      ...(form.stock !== '' ? { stock: parseInt(form.stock, 10) } : {}),
    };

    const result = isEditing
      ? await updateProduct(id, { ...payload, id })
      : await addProduct(payload);

    setSaving(false);

    if (result.success) {
      showToast(isEditing ? 'Product updated!' : 'Product created!');
      setTimeout(() => navigate('/admin/products'), 1000);
    } else {
      showToast(result.error || 'Something went wrong', 'error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Toast */}
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

      {/* Back */}
      <button
        onClick={() => navigate('/admin/products')}
        className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Products
      </button>

      <div className="rounded-2xl border border-white/5 bg-white/2 overflow-hidden">
        <div className="px-6 py-5 border-b border-white/5">
          <h1 className="text-white font-bold text-lg">
            {isEditing ? 'Edit Product' : 'Add New Product'}
          </h1>
          <p className="text-white/30 text-xs mt-1">
            {isEditing ? 'Update the product details below' : 'Fill in the details to add a new product'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column */}
            <div className="space-y-5">
              <Field label="Product Name" error={errors.name}>
                <Input
                  type="text"
                  placeholder="e.g. Floral Summer Dress"
                  value={form.name}
                  onChange={set('name')}
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Price (₼)" error={errors.price}>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={form.price}
                    onChange={set('price')}
                  />
                </Field>
                <Field label="Stock" error={errors.stock}>
                  <Input
                    type="number"
                    min="0"
                    placeholder="Optional"
                    value={form.stock}
                    onChange={set('stock')}
                  />
                </Field>
              </div>

              <Field label="Category">
                <select
                  value={form.category}
                  onChange={set('category')}
                  className="w-full px-4 py-2.5 bg-white/3 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-pink-500/50 transition-all appearance-none cursor-pointer"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#13131f]">{cat}</option>
                  ))}
                </select>
              </Field>

              <Field label="Description">
                <textarea
                  placeholder="Short product description…"
                  value={form.description}
                  onChange={set('description')}
                  rows={4}
                  className="w-full px-4 py-2.5 bg-white/3 border border-white/10 rounded-xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all resize-none"
                />
              </Field>
            </div>

            <div className="space-y-5">
              <Field label="Image URL">
                <Input
                  type="text"
                  placeholder="https://…"
                  value={form.image}
                  onChange={(e) => {
                    setPreviewError(false);
                    set('image')(e);
                  }}
                />
              </Field>

              <div className="rounded-xl border border-white/5 bg-white/2 overflow-hidden aspect-square flex items-center justify-center">
                {form.image && !previewError ? (
                  <img
                    src={form.image}
                    alt="Preview"
                    className="w-full h-full object-contain p-4"
                    onError={() => setPreviewError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-white/15">
                    <ImageIcon size={32} />
                    <p className="text-xs">
                      {previewError ? 'Invalid image URL' : 'Preview will appear here'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-white/5">
            <button
              type="button"
              onClick={() => navigate('/admin/products')}
              className="px-5 py-2.5 rounded-xl border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/20 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-6 py-2.5 bg-pink-500 hover:bg-pink-400 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-lg shadow-pink-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
              {saving ? 'Saving…' : isEditing ? 'Update Product' : 'Create Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
