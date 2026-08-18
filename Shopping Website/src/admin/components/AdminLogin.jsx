import React, { useState } from 'react';
import { Store, Eye, EyeOff, Lock, User, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin123';

export default function AdminLogin({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (form.username === ADMIN_USER && form.password === ADMIN_PASS) {
        sessionStorage.setItem('admin_auth', 'true');
       navigate('/admin');
      } else {
        setError('İstifadəçi adı və ya şifrə səhvdir');
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-violet-500/8 rounded-full blur-3xl" />
      </div>

      <div
        className={`relative w-full max-w-sm transition-all duration-100 ${shake ? 'translate-x-2' : ''}`}
        style={{
          animation: shake ? 'shake 0.4s ease-in-out' : 'none',
        }}
      >
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-6px); }
            80% { transform: translateX(6px); }
          }
        `}</style>

        <div className="bg-[#0d0d14] border border-white/8 rounded-2xl p-8 shadow-2xl">
        
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg shadow-pink-500/30 mb-4">
              <Store size={24} className="text-white" />
            </div>
            <h1 className="text-white text-xl font-bold tracking-tight">Luxue Admin</h1>
            <p className="text-white/30 text-sm mt-1">Daxil olmaq üçün məlumatlarını yaz</p>
          </div>

          {error && (
            <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-3 mb-5">
              <AlertCircle size={15} className="text-rose-400 shrink-0" />
              <p className="text-rose-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
        
            <div>
              <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                İstifadəçi adı
              </label>
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
                <input
                  type="text"
                  value={form.username}
                  onChange={(e) => { setForm(p => ({ ...p, username: e.target.value })); setError(''); }}
                  placeholder="admin"
                  autoComplete="username"
                  className="w-full pl-10 pr-4 py-3 bg-white/3 border border-white/10 rounded-xl text-white text-sm placeholder-white/15 focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                Şifrə
              </label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => { setForm(p => ({ ...p, password: e.target.value })); setError(''); }}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full pl-10 pr-10 py-3 bg-white/3 border border-white/10 rounded-xl text-white text-sm placeholder-white/15 focus:outline-none focus:border-pink-500/50 focus:bg-white/5 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/50 transition-colors"
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !form.username || !form.password}
              className="w-full py-3 bg-pink-500 hover:bg-pink-400 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-pink-500/20 mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Yoxlanır…
                </span>
              ) : (
                'Daxil ol'
              )}
            </button>
          </form>

          <p className="text-white/15 text-xs text-center mt-6">
            Bu səhifə yalnız adminlər üçündür
          </p>
        </div>
      </div>
    </div>
  );
}
