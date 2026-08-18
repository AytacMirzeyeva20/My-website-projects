import React, { createContext, useContext, useEffect, useState } from 'react'

const DataContext = createContext(null)

const STORAGE_KEY = 'vg_data_v1'

const defaultData = {
  cakes: [
    { id: 'c1', name: 'Qızıl Damla Tortu', price: 95, img: 'cake2.jpg', desc: 'Vanil biskvit, qızıl damla və şam bəzəyi ilə.' },
    { id: 'c2', name: 'Qızılgül Baharı', price: 110, img: 'cake3.jpg', desc: 'Çəhrayı krem, təzə qızılgül və pion bəzəyi.' },
    { id: 'c3', name: 'Çəhrayı Ürək', price: 105, img: 'cake4.jpg', desc: 'Çəhrayı çiçək və ürək dizaynlı zərif tort.' },
    { id: 'c4', name: 'Payız Ləçəkləri', price: 120, img: 'cake5.webp', desc: 'Yeyilə bilən ləçəklərlə minimal, zərif üslub.' },
    { id: 'c5', name: 'İkiqat Kəpənək', price: 140, img: 'cake6.jpg', desc: 'İki mərtəbəli, kəpənək bəzəkli premium tort.' },
    { id: 'c6', name: 'Zümrüd Bağçası', price: 130, img: 'cake1.jpg', desc: 'Nanə-yaşıl zolaqlar, macaron və gül çələngi.' },
  ],
  packages: [
    {
      id: 'p1', name: 'Silver', price: 350,
      features: ['Əsas balon dekorasiyası', '1 saat foto çəkiliş', 'Standart tort (1 kg)', '10 qonağa qədər'],
    },
    {
      id: 'p2', name: 'Gold', price: 650,
      features: ['Premium qızılı-bənövşəyi dekorasiya', '2 saat foto + video', 'Premium tort (2 kg)', 'Gül divarı', '25 qonağa qədər'],
      popular: true,
    },
    {
      id: 'p3', name: 'Platinum', price: 1200,
      features: ['Tam lüks dekorasiya + neon lövhə', 'Tam gün foto/video çəkiliş', 'Dizayner tort (3 kg)', 'Canlı musiqi', 'Hədiyyə qutuları', '50 qonağa qədər'],
    },
  ],
  services: [
    { id: 's1', title: 'Ad Günü Dekorasiyası', desc: 'Bənövşəyi-qızılı balon qövsləri, gül divarları və neon lövhələr ilə xəyalınızdakı mühiti yaradırıq.', img: 'party.webp' },
    { id: 's2', title: 'Tort Sifarişi', desc: 'Zərif, əl işi premium tortlar — dadına və görünüşünə görə seçilir.', img: 'cake1.jpg' },
    { id: 's3', title: 'Foto Çəkilişi', desc: 'Peşəkar fotoqraflarla tədbirinizin ən gözəl anlarını əbədiləşdiririk.', img: 'flower.jpg' },
    { id: 's4', title: 'Video Çəkilişi', desc: 'Kinomatik üslubda highlight videolar və tam tədbir arxivi.', img: 'decor2.jpg' },
    { id: 's5', title: 'Canlı Musiqi', desc: 'Zövqünüzə uyğun canlı ifaçılarla unudulmaz atmosfer.', img: 'decor.webp' },
  ],
  gallery: [
    { id: 'g1', img: 'birth.avif', category: 'Dekorasiya' },
    { id: 'g2', img: 'party.webp', category: 'Dekorasiya' },
    { id: 'g3', img: 'decor.webp', category: 'Dekorasiya' },
    { id: 'g4', img: 'decor2.jpg', category: 'Dekorasiya' },
    { id: 'g5', img: 'cake2.jpg', category: 'Tort' },
    { id: 'g6', img: 'cake3.jpg', category: 'Tort' },
    { id: 'g7', img: 'cake4.jpg', category: 'Tort' },
    { id: 'g8', img: 'cake6.jpg', category: 'Tort' },
    { id: 'g9', img: 'cake1.jpg', category: 'Tort' },
    { id: 'g10', img: 'flower.jpg', category: 'Gül' },
    { id: 'g11', img: 'flower1.jpg', category: 'Gül' },
    { id: 'g12', img: 'gift.jpg', category: 'Hədiyyə' },
    { id: 'g13', img: 'gift1.jpg', category: 'Hədiyyə' },
    { id: 'g14', img: 'gift2.jpg', category: 'Hədiyyə' },
    { id: 'g15', img: 'deliv.jpg', category: 'Çatdırılma' },
    { id: 'g16', img: 'deliv1.jpg', category: 'Çatdırılma' },
  ],
  reviews: [
    { id: 'r1', name: 'Aysel M.', text: 'Hər şey xəyal etdiyimdən də gözəl idi! Dekorasiya və tort mükəmməl uyğunlaşmışdı.', rating: 5 },
    { id: 'r2', name: 'Nərgiz H.', text: 'Peşəkar komanda, vaxtında çatdırılma və inanılmaz zövq. Tövsiyə edirəm!', rating: 5 },
    { id: 'r3', name: 'Günel T.', text: 'Qonaqlarım tədbirin gözəlliyindən danışmaqdan doymadılar. Təşəkkürlər!', rating: 5 },
  ],
  orders: [],
}

export function DataProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : defaultData
    } catch {
      return defaultData
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const addOrder = (order) => {
    const newOrder = {
      id: 'ord_' + Date.now(),
      status: 'Gözləyir',
      createdAt: new Date().toISOString(),
      ...order,
    }
    setData((d) => ({ ...d, orders: [newOrder, ...d.orders] }))
    return newOrder
  }

  const updateOrderStatus = (id, status) => {
    setData((d) => ({
      ...d,
      orders: d.orders.map((o) => (o.id === id ? { ...o, status } : o)),
    }))
  }

  const addCake = (cake) => setData((d) => ({ ...d, cakes: [{ id: 'c_' + Date.now(), ...cake }, ...d.cakes] }))
  const updateCake = (id, patch) => setData((d) => ({ ...d, cakes: d.cakes.map((c) => (c.id === id ? { ...c, ...patch } : c)) }))
  const deleteCake = (id) => setData((d) => ({ ...d, cakes: d.cakes.filter((c) => c.id !== id) }))

  const updatePackage = (id, patch) => setData((d) => ({ ...d, packages: d.packages.map((p) => (p.id === id ? { ...p, ...patch } : p)) }))

  const updateService = (id, patch) => setData((d) => ({ ...d, services: d.services.map((s) => (s.id === id ? { ...s, ...patch } : s)) }))

  const addGalleryItem = (item) => setData((d) => ({ ...d, gallery: [{ id: 'g_' + Date.now(), ...item }, ...d.gallery] }))
  const deleteGalleryItem = (id) => setData((d) => ({ ...d, gallery: d.gallery.filter((g) => g.id !== id) }))

  const addReview = (review) => setData((d) => ({ ...d, reviews: [{ id: 'r_' + Date.now(), ...review }, ...d.reviews] }))
  const deleteReview = (id) => setData((d) => ({ ...d, reviews: d.reviews.filter((r) => r.id !== id) }))

  const resetData = () => setData(defaultData)

  return (
    <DataContext.Provider
      value={{
        ...data,
        addOrder,
        updateOrderStatus,
        addCake,
        updateCake,
        deleteCake,
        updatePackage,
        updateService,
        addGalleryItem,
        deleteGalleryItem,
        addReview,
        deleteReview,
        resetData,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
