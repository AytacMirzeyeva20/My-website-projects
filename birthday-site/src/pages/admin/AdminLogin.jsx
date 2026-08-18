import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import { img } from '../../assets/imageMap.js'

export default function AdminLogin() {
  const { login, isAuthed } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (isAuthed) return <Navigate to="/admin" replace />

  const submit = (e) => {
    e.preventDefault()
    if (login(username, password)) {
      navigate('/admin')
    } else {
      setError('İstifadəçi adı və ya şifrə yanlışdır.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-royal-gradient px-6">
      <div className="glass w-full max-w-sm rounded-3xl p-8 shadow-premium">
        <div className="flex flex-col items-center">
          <img src={img('logo.jpg')} alt="Velvet & Gold" className="h-14 w-14 rounded-full object-cover ring-2 ring-gold-400" />
          <h1 className="mt-4 font-display text-xl font-bold text-royal-900">Admin Panel</h1>
          <p className="text-xs text-royal-600">Velvet & Gold idarəetmə paneli</p>
        </div>

        <form onSubmit={submit} className="mt-8 space-y-4">
          {error && <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">{error}</p>}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-royal-700">İstifadəçi adı</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 bg-white/80 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-royal-700">Şifrə</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full rounded-lg border border-royal-200 bg-white/80 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
          </div>
          <button type="submit" className="btn-gold w-full justify-center">Daxil ol</button>
          <p className="text-center text-[11px] text-royal-500">Demo: admin / velvet2026</p>
        </form>
      </div>
    </div>
  )
}
