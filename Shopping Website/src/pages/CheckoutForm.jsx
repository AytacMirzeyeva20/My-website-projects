import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CheckoutForm({ onClose, totalPrice, totalItems }) {
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    cardNumber: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1); // 1 = personal, 2 = payment
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'cardNumber') {
      value = value.replace(/\D/g, '').slice(0, 16);
      value = value.replace(/(.{4})/g, '$1 ').trim();
    }
    if (name === 'cvv') {
      value = value.replace(/\D/g, '').slice(0, 3);
    }
    if (name === 'phone') {
      value = value.replace(/[^\d+\s\-()]/g, '').slice(0, 15);
    }

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateStep1 = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Ad tələb olunur';
    if (!form.lastName.trim()) e.lastName = 'Soyad tələb olunur';
    if (!form.phone.trim()) e.phone = 'Telefon nömrəsi tələb olunur';
    return e;
  };

  const validateStep2 = () => {
    const e = {};
    const raw = form.cardNumber.replace(/\s/g, '');
    if (raw.length !== 16) e.cardNumber = 'Kart nömrəsi 16 rəqəm olmalıdır';
    if (form.cvv.length !== 3) e.cvv = 'CVV 3 rəqəm olmalıdır';
    return e;
  };

  const handleNext = () => {
    const e = validateStep1();
    if (Object.keys(e).length) return setErrors(e);
    setStep(2);
  };

  const handleSubmit = () => {
    const e = validateStep2();
    if (Object.keys(e).length) return setErrors(e);

    setLoading(true);
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      navigate('/admin/pages/AdminOrders');
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(10,10,20,0.65)', backdropFilter: 'blur(6px)' }}
    >
      <div
        className="relative w-full max-w-md mx-4 rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 60%, #16213e 100%)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07)',
          fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            height: 3,
            background: 'linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)',
          }}
        />

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#f59e0b', letterSpacing: '0.18em' }}>
              {step === 1 ? '01 / 02 — Şəxsi məlumat' : '02 / 02 — Ödəniş'}
            </p>
            <h2 className="text-white text-xl font-bold mt-1">
              {step === 1 ? 'Sifarişi tamamla' : 'Kart məlumatları'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
            style={{ background: 'rgba(255,255,255,0.07)', color: '#94a3b8' }}
          >
            ✕
          </button>
        </div>

        <div className="px-6 mb-5">
          <div className="flex gap-2">
            <div
              className="h-1 rounded-full flex-1 transition-all duration-500"
              style={{ background: '#f59e0b' }}
            />
            <div
              className="h-1 rounded-full flex-1 transition-all duration-500"
              style={{ background: step === 2 ? '#f59e0b' : 'rgba(255,255,255,0.1)' }}
            />
          </div>
        </div>

  
        <div className="px-6 pb-6">
          {step === 1 ? (
            <div className="flex flex-col gap-4">
              <Field
                label="Ad"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
                placeholder="Adınız"
              />
              <Field
                label="Soyad"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                error={errors.lastName}
                placeholder="Soyadınız"
              />
              <Field
                label="Telefon nömrəsi"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="+994 XX XXX XX XX"
                type="tel"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
          
              <div
                className="rounded-xl p-4 mb-1"
                style={{
                  background: 'linear-gradient(135deg, #1e3a5f, #0f2947)',
                  border: '1px solid rgba(245,158,11,0.2)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <p className="text-xs text-gray-400 mb-3 uppercase tracking-widest">Kart nömrəsi</p>
                <p
                  className="text-white text-lg font-mono tracking-widest"
                  style={{ letterSpacing: '0.2em' }}
                >
                  {form.cardNumber || '•••• •••• •••• ••••'}
                </p>
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-xs text-gray-400">Ad Soyad</p>
                    <p className="text-white text-sm font-semibold">
                      {form.firstName || '—'} {form.lastName}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">CVV</p>
                    <p className="text-white text-sm font-mono">{'•'.repeat(form.cvv.length || 1)}</p>
                  </div>
                </div>
              </div>

              <Field
                label="Kart nömrəsi"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                error={errors.cardNumber}
                placeholder="0000 0000 0000 0000"
              />
              <Field
                label="CVV"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                error={errors.cvv}
                placeholder="•••"
                type="password"
              />
            </div>
          )}

      
          <div
            className="mt-5 rounded-xl px-4 py-3 flex justify-between items-center"
            style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.15)' }}
          >
            <span className="text-gray-400 text-sm">{totalItems} məhsul</span>
            <span className="text-amber-400 font-bold text-lg">{totalPrice} ₼</span>
          </div>

        
          <div className="flex gap-3 mt-5">
            {step === 2 && (
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', color: '#94a3b8' }}
              >
                ← Geri
              </button>
            )}
            <button
              onClick={step === 1 ? handleNext : handleSubmit}
              disabled={loading}
              className="flex-1 py-3 rounded-xl font-bold text-sm transition-all relative overflow-hidden"
              style={{
                background: loading
                  ? 'rgba(245,158,11,0.5)'
                  : 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                color: '#0f0f1a',
                boxShadow: loading ? 'none' : '0 4px 20px rgba(245,158,11,0.35)',
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="10" />
                  </svg>
                  Emal olunur...
                </span>
              ) : step === 1 ? (
                'Davam et →'
              ) : (
                'Sifariş ver ✓'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, error, placeholder, type = 'text' }) {
  return (
    <div>
      <label
        className="block text-xs font-semibold mb-1.5 uppercase tracking-wider"
        style={{ color: '#94a3b8', letterSpacing: '0.1em' }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: error ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
          color: '#f1f5f9',
          fontFamily: name === 'cardNumber' || name === 'cvv' ? 'monospace' : 'inherit',
        }}
        onFocus={(e) => {
          e.target.style.border = '1px solid rgba(245,158,11,0.6)';
          e.target.style.background = 'rgba(245,158,11,0.04)';
        }}
        onBlur={(e) => {
          e.target.style.border = error ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)';
          e.target.style.background = 'rgba(255,255,255,0.05)';
        }}
      />
      {error && <p className="text-xs mt-1" style={{ color: '#f87171' }}>{error}</p>}
    </div>
  );
}
