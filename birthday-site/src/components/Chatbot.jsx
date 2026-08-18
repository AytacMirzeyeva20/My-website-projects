import { useEffect, useRef, useState } from 'react'
import { useData } from '../context/DataContext.jsx'

function buildReply(text, { packages, cakes }) {
  const t = text.toLowerCase()

  if (/(qiymət|price|neçəyə|maya)/.test(t)) {
    return `Paketlərimiz ${Math.min(...packages.map((p) => p.price))}₼-dən başlayır. Silver ${packages[0].price}₼, Gold ${packages[1].price}₼, Platinum ${packages[2].price}₼. Dəqiq qiymət üçün "Book Now" səhifəsindəki Qiymət Kalkulyatorundan istifadə edə bilərsiniz.`
  }
  if (/(paket|package)/.test(t)) {
    return `3 premium paketimiz var: Silver, Gold və Platinum. Hər paketə dekorasiya, tort və çəkiliş daxildir. Ətraflı məlumat üçün "Packages" səhifəsinə baxın.`
  }
  if (/(tort|cake)/.test(t)) {
    return `Cake Shop bölməsində ${cakes.length}+ premium tort dizaynımız var, ${Math.min(...cakes.map((c) => c.price))}₼-dən başlayır. İstədiyiniz dizaynı seçib birbaşa sifariş edə bilərsiniz.`
  }
  if (/(dekorasiya|decor)/.test(t)) {
    return `Bənövşəyi-qızılı balon qövsləri, gül divarları, neon lövhələr və glamour masalar ilə premium dekorasiya təklif edirik. Gallery bölməsində nümunələrə baxa bilərsiniz.`
  }
  if (/(foto|video|çəkiliş)/.test(t)) {
    return `Peşəkar foto və video çəkiliş xidmətimiz var — 1 saatdan tam günə qədər paketlər mövcuddur. Gold və Platinum paketlərə daxildir.`
  }
  if (/(musiqi|music)/.test(t)) {
    return `Canlı musiqi xidməti Platinum paketə daxildir, digər paketlərə əlavə xidmət kimi əlavə edilə bilər.`
  }
  if (/(sifariş|order|book)/.test(t)) {
    return `Sifariş vermək üçün "Book Now" səhifəsindəki formu doldurun — tarix, məkan, qonaq sayı və paket seçimini qeyd edin, komandamız tezliklə sizinlə əlaqə saxlayacaq.`
  }
  if (/(salam|hi|hello)/.test(t)) {
    return `Salam! 👋 Velvet & Gold-a xoş gəlmisiniz. Qiymətlər, paketlər, tortlar və ya sifariş haqqında sual verə bilərsiniz.`
  }
  return `Bu barədə komandamız sizə daha ətraflı kömək edə bilər. Zəhmət olmasa "Contact" səhifəsindən bizimlə əlaqə saxlayın və ya sualınızı fərqli şəkildə soruşun — qiymətlər, paketlər, tort, dekorasiya, çəkiliş və ya sifariş haqqında.`
}

export default function Chatbot() {
  const { packages, cakes } = useData()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Salam! Mən Velvet & Gold köməkçisiyəm 💜✨ Qiymətlər, paketlər və ya tortlar haqqında soruşa bilərsiniz.' },
  ])
  const [input, setInput] = useState('')
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = () => {
    const text = input.trim()
    if (!text) return
    const userMsg = { from: 'user', text }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: buildReply(text, { packages, cakes }) }])
    }, 500)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[440px] w-[320px] flex-col overflow-hidden rounded-2xl border border-royal-200 bg-white shadow-premium sm:w-[360px]">
          <div className="flex items-center justify-between bg-royal-gradient px-4 py-3 text-white">
            <div>
              <p className="font-display text-sm font-bold">Velvet & Gold Köməkçisi</p>
              <p className="text-[11px] text-royal-200">Onlayn · Adətən dərhal cavab verir</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Bağla" className="text-lg text-gold-300 hover:text-gold-100">✕</button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-lavender/40 px-3 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.from === 'bot' ? 'bg-white text-royal-800 shadow' : 'bg-royal-700 text-white'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="flex items-center gap-2 border-t border-royal-100 bg-white p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Sualınızı yazın..."
              className="flex-1 rounded-full border border-royal-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <button onClick={send} className="btn-gold !px-4 !py-2 text-xs">
              Göndər
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chatbot"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-royal-gradient text-2xl text-gold-300 shadow-premium ring-2 ring-gold-400 transition hover:scale-105"
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}
