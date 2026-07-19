export default function Services() {
  const services = [
    {
      title: "Bridal Makeup",
      icon: "👰",
      description:
        "Premium bridal makeup with long-lasting finish for your special day.",
    },
    {
      title: "HD Makeup",
      icon: "💄",
      description:
        "High-definition makeup that looks flawless both in person and on camera.",
    },
    {
      title: "Airbrush Makeup",
      icon: "✨",
      description:
        "Lightweight airbrush makeup for a natural, smooth and elegant finish.",
    },
    {
      title: "Party Makeup",
      icon: "🎉",
      description:
        "Perfect makeup for parties, birthdays and evening events.",
    },
    {
      title: "Engagement Makeup",
      icon: "💍",
      description:
        "Elegant engagement makeup designed to match your outfit and personality.",
    },
    {
      title: "Reception Makeup",
      icon: "🌸",
      description:
        "Professional reception makeup for a glamorous and unforgettable look.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-pink-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-pink-500 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Makeup Services We Offer
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            We provide professional makeup services using premium products
            to make every occasion memorable.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="text-6xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}