import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
export default function Contact() {
  return (
   <>
  
      <div className="bg-white  mt-9 dark:bg-black dark:text-white">
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <img 
          src="https://static.zara.net/assets/public/ff2a/bcdb/fa2e4b599b9c/43ec5a32d230/image-landscape-fill-4b6e1923-3bd6-4ad4-8533-97bb35a9cc84-default_0/image-landscape-fill-4b6e1923-3bd6-4ad4-8533-97bb35a9cc84-default_0.jpg?ts=1778773512641&w=1342" 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6">
      Əlaqə
          </h1>
        </div>
      </div>

 <div className="flex  flex-col gap-30 md:flex-row">
        <div className='mr-40'>
          <h1 className="font-bold text-[20px] ml-5 mt-5 md:text-[30px]">Bizə mesaj göndərin</h1>
          <p className="text-[#4b5563] ml-5 dark:text-white">
           Aşağıdakı formanı doldurun, biz sizinlə 24 saat ərzində əlaqə saxlayacağıq.
          </p>

          <div className="flex gap-6 mt-10 ml-5 flex-wrap">
            <div className="flex flex-col">
              <label htmlFor="">Ad</label>
              <input type="text" placeholder="Ad..." className="border border-gray-500 rounded-lg px-4 py-2" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Soyad</label>
              <input type="text" placeholder="Soyad..." className="border border-gray-500 rounded-lg px-4 py-2" />
            </div>
          </div>

          <div className="flex flex-col ml-5 mt-6">
            <label htmlFor="">Email Adres</label>
            <input type="email" placeholder="Email" className="border border-gray-500 rounded-lg px-4 py-2 w-75" />
          </div>
<div className="flex flex-col mt-6 ml-5">
            <label htmlFor="">Mövzu</label>
            <select className="border border-gray-500 w-62.5 p-2 rounded-lg">
              <option>Destek</option>
              <option>Geyim</option>
              <option>Canta</option>
              <option>Ayaqqabi</option>
              <option>Diger</option>
            </select>
          </div>

          <div className="flex flex-col mt-6 ml-5">
            <label htmlFor="">Mesaj</label>
            <textarea className="border border-gray-500 rounded-lg w-80 h-30 p-2 md:w-100"></textarea>
          </div>

          <button
            onClick={() => alert("Message sent!")}
            className="rounded-lg px-10 py-2 bg-gray-600 text-white ml-5 mt-6 hover:bg-amber-300"
          >
            Mesaj gonderin
          </button>
        </div>

    
        <div>
          <h1 className="font-bold text-[30px] ml-5 mt-5"> Əlaqə İnformasiya </h1>
          <p className="text-[#4b5563] ml-5">
       Bu əlaqə vasitələrindən hər hansı biri ilə bizimlə əlaqə saxlaya bilərsiniz.
          </p>

          <div className="ml-5 mt-10 space-y-6">

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-lg hover:bg-amber-300 dark:text-black dark:bg-white">
                <FaLocationDot />
              </div>
              <h3 className="font-bold text-lg">Bizi ziyarət edin</h3>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-lg hover:bg-amber-300 dark:text-black dark:bg-white ">
              <FaPhoneAlt />
              </div>
              <h3 className="font-bold text-lg">Zəng edin</h3>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-lg hover:bg-amber-300  dark:text-black dark:bg-white">
              <CgMail />
              </div>
              <h3 className="font-bold text-lg">Email</h3>
            </div>
<div className='mb-3'>
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.249439498668!2d94.87531067384901!3d20.165337116875964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30b7cf95f9148547%3A0x1ef5102b34d799ae!2sShopping%20women%20clothes!5e0!3m2!1saz!2saz!4v1779550035085!5m2!1saz!2saz"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
            </div>
          </div>
          </div>
          </div>
      </div>

   </>
  )
}
