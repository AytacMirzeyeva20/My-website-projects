# Velvet & Gold — Premium Ad Günü Tədbirləri

React + Tailwind CSS ilə hazırlanmış premium, tam responsiv websayt.

## Quraşdırma

```bash
npm install
npm run dev
```

Sayt `http://localhost:5173` ünvanında açılacaq.

## Build

```bash
npm run build
npm run preview
```

## Admin Panel

- URL: `/admin/login`
- Demo istifadəçi adı: `admin`
- Demo şifrə: `velvet2026`

Admin panelindən sifarişlərə baxa, status dəyişə, tort/paket/xidmət/qalereya/rəyləri idarə edə bilərsiniz. Bütün məlumatlar brauzerin `localStorage`-də saxlanılır (demo backend). İstehsal mühiti üçün bunu real backend/API ilə əvəz etməyiniz tövsiyə olunur, həmçinin `src/context/AuthContext.jsx` daxilindəki demo istifadəçi adını/şifrəni dəyişin.

## Struktur

```
src/
  assets/images/     — bütün şəkillər
  assets/imageMap.js — şəkil adlarını import edən mərkəzi fayl
  components/        — Navbar, Footer, Chatbot, PriceCalculator və s.
  context/           — DataContext (bütün sayt məlumatları), AuthContext (admin login)
  pages/             — Home, About, Services, Packages, CakeShop, Gallery, BookNow, Contact
  pages/admin/       — Admin panel səhifələri
```

## Qeyd — AI Chatbot

Floating chatbot qayda-əsaslı (rule-based) cavab sistemi ilə işləyir və heç bir xarici API tələb etmir. İstəsəniz `src/components/Chatbot.jsx` daxilindəki `buildReply` funksiyasını real bir AI API (məs. Anthropic API) ilə əvəz edə bilərsiniz.
