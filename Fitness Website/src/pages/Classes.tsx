import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../asset/image1.jpg";
import image2 from "../asset/image2.jpg";
import image3 from "../asset/image3.jpg";
import image4 from "../asset/image4.jpg";
import image5 from "../asset/image5.jpg";
import image6 from "../asset/image6.jpg";
interface Gym {
  id: number;
  title: string;
  description: string;
  img: string;
}

function Classes() {
  const [gym, setGym] = useState<Gym[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/gym")
      .then((res) => res.json())
      .then((data) => setGym(data));
  }, []);

  const images: Record<string, string> = {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  };

  return (
    <section className="bg-pink-50 px-6 py-20 md:px-12 lg:px-20" id="classes">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-black uppercase tracking-wide text-pink-950 md:text-5xl">
          Our Classes
        </h1>

        <p className="mt-5 max-w-4xl text-base leading-7 text-gray-700">
          Discover a variety of classes designed to challenge your body,
          improve your strength and help you become the best version of
          yourself.
        </p>
      </div>
    <div className="mx-auto mt-12 grid max-w-[1600px] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {gym.map((item) => (
          <div
            key={item.id}
           className="group relative h-105 overflow-hidden rounded-2xl shadow-lg">
            <img
              src={images[item.img]}
              alt={item.title}
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-linear-to-t from-pink-950/90 via-pink-700/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 w-full p-6 transition duration-500 group-hover:translate-y-10 group-hover:opacity-0">
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                {item.title}
              </h2>
            </div>

            <div className="absolute inset-0 flex translate-y-8 flex-col items-center justify-center px-6 text-center opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

              <span className="mb-4 rounded-full bg-pink-300 px-4 py-1 text-sm font-bold uppercase tracking-wider text-pink-950">
                Fitness Class
              </span>

              <h2 className="text-3xl font-black text-white">
                {item.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/90">
                {item.description}
              </p>
<Link to="exploreclass">
              <button className="mt-6 rounded-full bg-white px-6 py-3 font-bold text-pink-700 transition duration-300 hover:bg-pink-200 hover:text-pink-950">
                Explore Class
              </button>
</Link>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Classes;