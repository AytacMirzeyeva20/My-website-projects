import React from 'react'
import { Link } from 'react-router-dom'
import Categories from './categories'
import { Handbag } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Building } from 'lucide-react';
import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t, i18n } = useTranslation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
  return (
    <>
  
    <div  className="bg-white text-black  dark:bg-black dark:text-white min-h-screen transition-all duration-300" >
   <div className="relative w-full h-[80vh] md:h-[90vh]  lg:h-screen overflow-hidden bg-gray-900">
    <div className="absolute  w-full h-full">
      <img 
        src="https://cdn-cloudflare.emporium.az/women/main-banner-desktop.jpg" 
        alt="Main Banner" 
        className="w-full h-full object-cover object-center"
      />
  
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center ">
      <span className="inline-block py-1 px-3 border border-white/30 text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
        {t("Yeni Mövsüm")}
      </span>
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
       {t( "Özünü") }<br />
        <span className="italic font-light">{t("Kəşf Et")}</span>
      </h2>
      <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-10 drop-shadow-md">
        {t("Ən son trendlər, premium keyfiyyət və tamamilə qadınlar üçün nəzərdə tutulmuş kolleksiya. İndi alış-verişə başla.")}
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <Link to="/products" className="w-full sm:w-auto">
          <button className="w-full bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-200 transition duration-300 shadow-lg">
            {t("Alış-veriş Et")}
          </button>
        </Link>
        <Link to="/collection">
        <button className="w-full sm:w-auto border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-black transition duration-300 shadow-lg">
          {t("Kolleksiya")}
        </button>
        </Link>
      </div>
    </div>
  </div>

    <div className="py-20 bg-white dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">{t("Kateqoriyalar")}</h3>
            <p className="text-gray-500 mt-2 dark:text-white">{t("Sevdiyin kateqoriyanı seç")}</p>
          </div>
          <a href="#" className="hidden md:block text-sm font-medium underline underline-offset-4 hover:text-gray-600">{t("Hamısına bax")}</a>
        </div>
        <Categories />
      </div>
    </div>
<div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://preview.colorlib.com/theme/fashi/img/latest-1.jpg"
                alt="Banner" 
                className="w-full rounded-2xl "
              />
              <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white px-6 py-4 rounded-xl">
                <p className="text-3xl font-bold">50%</p>
                <p className="text-sm">{t("ENDİRİM")}</p>
              </div>
            </div>
            <div className="text-white">
              <span className="inline-block py-1 px-3 border border-white/30 text-xs font-bold tracking-widest uppercase mb-4">
                {t("Kampaniya")}
              </span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                {t("Yaz Kolleksiyası")}
                <span className="block text-pink-400">Endirimdə</span>
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {t("Yeni yaz mövsümü üçün nəzərdə tutulmuş kolleksiyamızda 50%-ə qədər endirimlər.")}
                {t("Premium keyfiyyətli məhsullarımızı indi alaraq mövsümü qarşılayın")}
              </p>
              <Link to="/products">
              <button className="bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-200 transition duration-300">
                {t("İndi Al")}
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white border-b border-gray-100 mt-7.5 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-50 p-4 rounded-xl dark:bg-black dark:text-white">
                <Handbag />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{t("Pulsuz Çatdırılma")}</h4>
                <p className="text-gray-500 text-sm mt-1 dark:text-white ">{t("₼100+ sifarişlər üçün")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-gray-50 p-4 rounded-xl  dark:bg-black dark:text-white  ">
               <Building />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white ">{t("Asan Qaytarılma")}</h4>
                <p className="text-gray-500 text-sm mt-1 dark:text-white ">{t("30 gün ərzində")}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-gray-50 p-4 rounded-xl  dark:bg-black dark:text-white  ">
               <Clock />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white ">{t("Təhlükəsiz Ödəniş")}</h4>
                <p className="text-gray-500 text-sm mt-1 dark:text-white ">{t("100% qorunan")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
    </>
  )
}
