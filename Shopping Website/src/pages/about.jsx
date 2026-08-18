import React from 'react'
import { FaAward } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GiCottonFlower } from "react-icons/gi";
import { FaTruckMoving } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
export default function About() {
  const { t, i18n } = useTranslation();
    
      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
  return (
    <>
      <div className="bg-white dark:bg-black">
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <img 
          src="https://fastarz.com/wp-content/uploads/2024/08/best-turkish-dress-brands-1.jpg" 
          alt="About Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-amber-400 tracking-[0.3em] uppercase text-sm mb-4">
           {t("Haqqımızda")}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6">
            {t("Öz Hekayəmiz")}
          </h1>
          <p className="text-white/80 max-w-2xl text-lg">
            {t("Keyfiyyət, zövq və premium təcrübə - hər bir detalda")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-400"></div>
            <img 
              src="https://img.shopcider.com/hermes/posting/tiny-image-1779353604000-zxj4as.jpeg?x-oss-process=image/resize,w_2100,m_lfit/quality,Q_80/interlace,1" 
              alt="Brand Story" 
              className="w-full h-125 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-400"></div>
          </div>
          <div className="space-y-6">
            <span className="text-amber-500 tracking-widest uppercase text-sm font-medium">
              2018-ci ildən
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">
              Luxue - <span className="text-amber-500 italic">Zövqün</span> Evi
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Luxue brendi 2018-ci ildə Azərbaycanda premium moda sahəsində yeni bir era açmaq visionu ilə yaranıb. Məqsədimiz qadınlara yalnız paltar deyil, özünü kəşf etmək, özünə inanmaq hissini bəxş etməkdir.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hər bir kolleksiyamız beynəlxalq trendlər və yerli bəyənməlar nəzərə alınaraq hazırlanır. Bizəviyik ki, hər qadın unikalıdr və gözəlliyi özünəməxsus tərzdə ifadə etməyi haqqını çatır.
            </p>
            <div className="pt-4">
              <Link to="/clothes">
              <button className="bg-gray-900 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-amber-500 transition duration-300">
                Kolleksiyamıza Bax
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <span className="text-4xl lg:text-6xl font-serif font-bold text-amber-400">5000+</span>
              <p className="text-white/60 uppercase tracking-widest text-sm">Məmnun Müştəri</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl lg:text-6xl font-serif font-bold text-amber-400">150+</span>
              <p className="text-white/60 uppercase tracking-widest text-sm">Kolleksiya</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl lg:text-6xl font-serif font-bold text-amber-400">5+</span>
              <p className="text-white/60 uppercase tracking-widest text-sm">İllər Təcrübə</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl lg:text-6xl font-serif font-bold text-amber-400">50+</span>
              <p className="text-white/60 uppercase tracking-widest text-sm">Brend</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 tracking-widest uppercase text-sm font-medium">
              Bizim Dəyərlər
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mt-4">
              Nəyə İnanırıq?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
            <div className="text-center p-8 group hover:bg-gray-50 transition duration-500 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-amber-400 transition duration-300">
                <FaAward className="w-8 h-8 text-gray-900 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Keyfiyyət</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ən yaxşı materiallar və işçiliklə hazırlanmış hər bir parça
              </p>
            </div>

            <div className="text-center p-8 group hover:bg-gray-50 transition duration-500 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-amber-400 transition duration-300">
                <FaHeart className="w-8 h-8 text-gray-900 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Ehtiram</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hər müştəriyə şəxsi yanaşma və premium xidmət
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-8 group hover:bg-gray-50 transition duration-500 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-amber-400 transition duration-300">
                <GiCottonFlower className="w-8 h-8 text-gray-900 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Sürdürüləbilirlik</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ekoloji cəhətdən təmiz və etibarlı materiallar
              </p>
            </div>

            <div className="text-center p-8 group hover:bg-gray-50 transition duration-500 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-amber-400 transition duration-300">
                <FaTruckMoving className="w-8 h-8 text-gray-900 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Çatdırılma</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sürətli və etibarlı çatdırılma xidməti
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80" 
            alt="CTA" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
            Öz <span className="italic text-amber-400">Zövqünlə</span> Tanış Ol
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Ən son kolleksiyalarımızı kəşf edin və özünəməxsus stilinizi tapın. Luxury artıq sizin əlinizdə.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 text-white px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-amber-600 transition duration-300">
              Alış-verişə Başla
            </button>
            <button className="border border-white text-white px-10 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-black transition duration-300">
              Bizimlə Əlaqə
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
