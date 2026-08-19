import { useEffect, useState } from "react";
import image1 from "../asset/image1.jpg";
import image2 from "../asset/image2.jpg";
import image3 from "../asset/image3.jpg";
import image4 from "../asset/image4.jpg";
import image5 from "../asset/image5.jpg";
import image6 from "../asset/image6.jpg";
interface GymClass {
  id: number;
  title: string;
  description: string;
  img: string;
  instructor: string;
  duration: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "Strength" | "Cardio" | "Yoga" | "Pilates";
}

const images: Record<string, string> = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
};

function Exploreclass() {
  const [classes, setClasses] = useState<GymClass[]>([]);
  const[search,setSearch]=useState("");


  useEffect(() => {
    fetch("http://localhost:3000/gym")
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error("Error:", error));
  }, []);
const searchedClass=classes.filter((item)=>{
 return    item.title.toLowerCase().includes(search.toLowerCase())
});
  return (
    <div className="min-h-screen bg-[#fff7fa]">
      <section className="relative overflow-hidden bg-pink-950 px-6 py-24 text-white md:px-12 lg:px-20">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-20 h-96 w-96 rounded-full bg-rose-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-pink-300">
            FIT & GLOW
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
            Find the class
            <span className="text-pink-300"> that moves you.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-pink-100/80">
            Explore our premium fitness classes designed to build strength,
            improve your endurance and help you feel your best.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">

        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-pink-500">
              Our Programs
            </p>

            <h2 className="text-4xl font-black text-pink-950 md:text-5xl">
              Explore Classes
            </h2>
          </div>
<p className="max-w-md text-sm leading-6 text-gray-500">
            From high-energy cardio to mindful yoga, choose the perfect
            workout for your goals.
          </p>
          
        </div>
<div  className="mx-auto mb-10 max-w-6xl px-6" >
<input type="text" placeholder="Search..." className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-5 text-gray-800 outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
  value={search} onChange={(e)=>setSearch(e.target.value)}/>
</div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {searchedClass.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-[28px] border border-pink-100 bg-white shadow-lg shadow-pink-100/50 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-200/50"
            >

              <div className="relative h-64 overflow-hidden">

                <img
                  src={images[item.img]}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-pink-950/70 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wide text-pink-700 backdrop-blur">
                  {item.category}
                </span>

                <span className="absolute bottom-5 right-5 rounded-full bg-pink-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
                  {item.level}
                </span>

              </div>
              <div className="p-7">

                <h3 className="text-2xl font-black text-pink-950">
                  {item.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 border-y border-gray-100 py-5">

                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      Instructor
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      {item.instructor}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      Duration
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      {item.duration} min
                    </p>
                  </div>

                </div>

                <button
                  className="mt-6 w-full rounded-2xl bg-pink-950 py-4 font-bold text-white transition duration-300 hover:bg-pink-600"
                >
                  View Class
                </button>

              </div>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Exploreclass;