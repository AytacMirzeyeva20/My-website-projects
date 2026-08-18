import { Link } from 'react-router-dom'
import { img } from '../assets/imageMap.js'

export default function Footer() {
  return (
    <footer className="bg-royal-gradient text-royal-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={img('logo.jpg')} alt="Velvet & Gold logo" className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-400" />
            <span className="font-display text-lg font-bold">Velvet &amp; Gold</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-royal-200">
            Xanımlar üçün premium ad günü tədbirlərinin təşkili — dekorasiyadan tortadək, hər detal zərafətlə hazırlanır.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-gold-400">Menyu</h4>
          <ul className="mt-4 space-y-2 text-sm text-royal-200">
            <li><Link to="/" className="hover:text-gold-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-300">About</Link></li>
            <li><Link to="/packages" className="hover:text-gold-300">Packages</Link></li>
            <li><Link to="/gallery" className="hover:text-gold-300">Gallery</Link></li>
            <li><Link to="/book-now" className="hover:text-gold-300">Book Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-gold-400">Xidmətlər</h4>
          <ul className="mt-4 space-y-2 text-sm text-royal-200">
            <li>Ad günü dekorasiyası</li>
            <li>Tort sifarişi</li>
            <li>Foto çəkilişi</li>
            <li>Video çəkilişi</li>
            <li>Canlı musiqi</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-gold-400">Əlaqə</h4>
          <ul className="mt-4 space-y-2 text-sm text-royal-200">
            <li>+994 50 123 45 67</li>
            <li>hello@velvetgold.az</li>
            <li>Bakı, Azərbaycan</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {['Instagram', 'Facebook', 'TikTok'].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/50 text-xs font-bold text-gold-300 transition hover:bg-gold-400 hover:text-royal-950"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="divider-gold mx-6 lg:mx-10" />

      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-royal-300 lg:px-10">
        © {new Date().getFullYear()} Velvet &amp; Gold Events. Bütün hüquqlar qorunur.
      </div>
    </footer>
  )
}
