import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "Party Makeup",
    price: "₹2,999",
    subtitle: "Perfect for Parties & Events",
    features: [
      "Professional Makeup",
      "Hair Styling",
      "False Eyelashes",
      "Touch-up Kit",
      "Premium Products",
    ],
  },
  {
    title: "HD Bridal Makeup",
    price: "₹14,999",
    subtitle: "Most Popular Package",
    featured: true,
    features: [
      "HD / Airbrush Makeup",
      "Luxury International Products",
      "Professional Hair Styling",
      "Saree / Dupatta Draping",
      "Premium Lashes",
      "Touch-up Kit",
      "Complete Bridal Finish",
    ],
  },
  {
    title: "Fashion Makeup",
    price: "₹5,999",
    subtitle: "For Shoots & Fashion Events",
    features: [
      "Studio Makeup",
      "Hair Styling",
      "Premium Lashes",
      "Photoshoot Ready Finish",
      "Long Lasting Makeup",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[6px] text-pink-500 font-semibold">
            Pricing
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Choose Your Perfect Package
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Premium makeup services designed to make every special moment
            unforgettable.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`relative rounded-3xl p-8 shadow-xl transition duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                plan.featured
                  ? "bg-pink-500 text-white scale-105"
                  : "bg-white"
              }`}
            >

              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>

              <p
                className={`mt-2 ${
                  plan.featured
                    ? "text-pink-100"
                    : "text-gray-500"
                }`}
              >
                {plan.subtitle}
              </p>

              <h2 className="text-5xl font-bold my-8">
                {plan.price}
              </h2>

              <div className="space-y-4">

                {plan.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={20} />
                    <span>{feature}</span>
                  </div>

                ))}

              </div>

              <button
                className={`mt-10 w-full py-4 rounded-xl font-semibold transition ${
                  plan.featured
                    ? "bg-white text-pink-500 hover:bg-gray-100"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                }`}
              >
                Book Appointment
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}