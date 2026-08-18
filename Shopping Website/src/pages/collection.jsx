import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export default function Collection() {
   const { t, i18n } = useTranslation();
      
        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        }
  return (
    <>
    <div className='dark:bg-black'>
      <div className="bg-white dark:bg-black">
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1920&q=80" 
          alt="Collection Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-amber-400 tracking-[0.3em] uppercase text-sm mb-4">
            {t("Yeni Mövsüm")}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4">
           {t( "Kolleksiya")}
          </h1>
          <p className="text-white/80 max-w-xl text-2lg ">
            {t("Ən son trendlər, premium keyfiyyət və tamamilə qadınlar üçün nəzərdə tutulmuş kolleksiya.")}
          </p>
        </div>
      </div>
    </div>  
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mr-5 ml-5 dark:bg-black">
  <div className="col-span-1 row-span-2">
    <Link to="/clothes">
    <img 
      src="https://img1.shopcider.com/product/1778575142000-d5X3eS.jpg?x-oss-process=image/resize,w_700,m_lfit/quality,Q_70/format,webp" 
      alt="Product 1" 
      className="w-full h-full object-cover rounded-lg"
    />
    </Link>
  </div>
  <div className="col-span-1 row-span-2">
    <Link to="/clothes">
    <img 
      src="https://img1.shopcider.com/product/1778575142000-JikrWH.jpg?x-oss-process=image/resize,w_700,m_lfit/quality,Q_70/format,webp" 
      alt="Product 2" 
      className="w-full h-full object-cover rounded-lg"
    />
    </Link>
  </div>
  <div className="col-span-2">
    <Link to="/clothes">
    <img 
      src="https://img.shopcider.com/hermes/posting/tiny-image-1779351566000-snbg6w.jpeg?x-oss-process=image/resize,w_2100,m_lfit/quality,Q_80/interlace,1" 
      alt="Product 3" 
      className="w-full h-full object-cover rounded-lg"
    />
    </Link>
  </div>
  <div className="col-span-1">
    <Link to="/clothes">
    <img 
      src="https://img.shopcider.com/hermes/posting/tiny-image-1779351573000-xix7ds.jpeg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1" 
      alt="Product 4" 
      className="w-full h-full object-cover rounded-lg"
    />
    </Link>
  </div>
  <div className="col-span-1">
    <Link to="/clothes">
    <img 
      src="https://img.shopcider.com/hermes/posting/tiny-image-1779351621000-k65xrc.png?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_80/interlace,1/format,jpg" 
      alt="Product 5" 
      className="w-full h-full object-cover rounded-lg"
    />
    </Link>
  </div>
</div>


<div className="py-16 lg:py-24 bg-white dark:bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900">
        Shop by <span className="text-amber-500 italic">Brand</span>
      </h2>
      <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
      <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105">
        <img 
          src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/mango_v5.jpg" 
          alt="Mango" 
          className="h-12 lg:h-40 w-auto object-contain"
        />
      </div>
      
      <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105">
        <img 
          src="https://content.asos-media.com/-/media/homepages/ww/2025/september/22-mena-row-apac-ie/logo_abercrombie_870x500_resized_logo2.png" 
          alt="Abercrombie" 
          className="h-12 lg:h-40 w-auto object-contain"
        />
      </div>
      
      <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105">
        <img 
          src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/huda-beauty_v2.jpg" 
          alt="Huda Beauty" 
          className="h-12 lg:h-40 w-auto object-contain"
        />
      </div>
      
      <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105">
        <img 
          src="https://content.asos-media.com/-/media/homepages/ww/2025/june/ww-eu-brand-logos/row-mena-au/elf_v2.jpg" 
          alt="e.l.f." 
          className="h-12 lg:h-40 w-auto object-contain"
        />
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
