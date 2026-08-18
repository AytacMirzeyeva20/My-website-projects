import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-6xl font-bold text-gold-500">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-royal-900">Səhifə Tapılmadı</h1>
      <p className="mt-2 text-royal-600">Axtardığınız səhifə mövcud deyil.</p>
      <Link to="/" className="btn-gold mt-8">Ana Səhifəyə Qayıt</Link>
    </div>
  )
}
