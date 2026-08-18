import React from 'react'
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SlEnvolope } from "react-icons/sl"
import { useTranslation } from 'react-i18next'
export default function Footer() {
  const { t, i18n } = useTranslation();
    
      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
  return (
    <>
      <div className="bg-black  w-full p-30 text-white ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      <div>
        <h3 className="font-bold">Luxue</h3>
        <p className="text-gray-400">
           {t("Ən son trendlər, premium keyfiyyət və tamamilə qadınlar üçün nəzərdə tutulmuş kolleksiya. İndi alış-verişə başla.")}
      </p>
      
       
        <div className="flex mt-5 gap-3 text-xl">
<FaTwitterSquare/>
<FaFacebook />
<FaInstagramSquare/>
        </div>
      </div>
      <div>
        <h3 className="font-bold">{t("Informasiya")}</h3>
        <ul className="text-gray-400">
          <li>{t("Haqqımızda")} </li>
          <li>{t("Kolleksiya")}</li>
          <li>{t("Destek")}</li>
          <li>{t("Bize mesaj gonderin")}</li>
           <li>{t("Əlaqə")}</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold">{t("Musteri Desteyi")}</h3>
        <ul className="text-gray-400">
           <li>{t("Haqqımızda")}</li>
          <li>{t("Kolleksiya")}</li>
          <li>{t("Destek")}</li>
          <li>{t("Bize mesaj gonderin")}</li>
           <li>{t("Əlaqə")}</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-3">{t("Sualiniz Varmi?")}</h3>
        <ul className="text-gray-400">
          <li className="mb-3 flex gap-2">
         <MdPlace className='text-xl'  />
            Zirve kucesi 25,Baki,Azerbaycan
          </li>
          <li className="mb-3 flex gap-2" >
           <FaPhone className='text-xl'/>
            +2 392 3929 210
          </li>
          <li className='mb-3 flex gap-2'>
            <SlEnvolope className='text-xl' />
            	info@luxue.com
            </li>
        </ul>
      </div>
    </div>
    </div>


    </>
  )
}
