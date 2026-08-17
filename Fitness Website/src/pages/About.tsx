function About() {
  const features = [
    {
      icon: "🏋️",
      title: "State of the Art Facilities",
      description:
        "We provide modern fitness equipment and premium facilities designed to help you reach your fitness goals.",
    },
    {
      icon: "👥",
      title: "100's of Diverse Classes",
      description:
        "Choose from a wide range of classes designed for every fitness level, from beginners to advanced athletes.",
    },
    {
      icon: "🎓",
      title: "Expert and Pro Trainers",
      description:
        "Train with experienced professionals who are dedicated to helping you become stronger and healthier.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl font-black uppercase tracking-wide text-pink-900 md:text-5xl">
            More Than Just Gym.
          </h2>

          <p className="mt-5 max-w-5xl text-base font-medium leading-7 text-gray-700">
            We provide world class fitness equipment, trainers and classes
            to get you to your ultimate fitness goals with ease. We provide
            true care into each and every member.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-gray-200 bg-white px-8 py-12 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-pink-300 hover:shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-pink-200 bg-pink-100 text-2xl transition duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-pink-950">
                {feature.title}
              </h3>
              <p className="mt-5 leading-7 text-gray-600">
                {feature.description}
              </p>
              <button className="mt-6 font-bold text-pink-400 underline underline-offset-4 transition hover:text-pink-600">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;