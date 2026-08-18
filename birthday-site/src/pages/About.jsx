import { img } from '../assets/imageMap.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function About() {
  return (
    <div>
      <section className="relative bg-royal-gradient py-24 text-center text-white">
        <p className="section-eyebrow text-gold-300">Bizim Haqqımızda</p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Zərafət, Detal və Sənət</h1>
        <p className="mx-auto mt-4 max-w-xl px-6 text-royal-200">
          Velvet & Gold — xanımlar üçün premium ad günü tədbirlərinin təşkilində etibarlı tərəfdaşınız.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <img src={img('birthday.jpg')} alt="Şirkət haqqında" className="rounded-3xl shadow-premium" />
        <div className="reveal">
          <p className="section-eyebrow">Hekayəmiz</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-royal-900">Şirkət Haqqında</h2>
          <p className="mt-5 leading-relaxed text-royal-600">
            Velvet & Gold 7 ildən artıqdır ki, xanımların ən xüsusi günlərini unudulmaz edir. Komandamız dekorasiyadan tutmuş tort dizaynınadək hər detala diqqətlə yanaşır və hər tədbiri fərdiləşdirir.
          </p>
          <p className="mt-4 leading-relaxed text-royal-600">
            Məqsədimiz sadəcə tədbir təşkil etmək deyil — sizin üçün əbədi xatirələr yaratmaqdır.
          </p>
        </div>
      </section>

      <section className="bg-lavender/50 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3 lg:px-10">
          {[
            { title: 'Missiya', text: 'Hər xanımın ad gününü zərafət, incəlik və premium keyfiyyətlə xüsusi etmək.', icon: '🎯' },
            { title: 'Vizyon', text: 'Regionda ad günü tədbirləri sənayesində etibarlılıq və zövq standartı olmaq.', icon: '🔮' },
            { title: 'Nəyə görə biz?', text: 'Fərdi yanaşma, peşəkar komanda, premium material və vaxtında icra.', icon: '💎' },
          ].map((c) => (
            <div key={c.title} className="card-lift rounded-2xl bg-white p-8 text-center shadow-premium">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-royal-gradient text-2xl">{c.icon}</div>
              <h3 className="mt-5 font-display text-xl font-bold text-royal-900">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-royal-600">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading eyebrow="Komandamız" title="Zövqlə İşləyən Peşəkarlar" desc="Dekorator, patissier, fotoqraf və hadisə menecerlərindən ibarət komandamız hər tədbirə şəxsi qayğı ilə yanaşır." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {['flower1.jpg', 'decor.webp', 'gift2.jpg', 'cake4.jpg'].map((im, i) => (
            <img key={i} src={img(im)} alt="Komanda işi" className="card-lift h-64 w-full rounded-2xl object-cover shadow-premium" />
          ))}
        </div>
      </section>
    </div>
  )
}
