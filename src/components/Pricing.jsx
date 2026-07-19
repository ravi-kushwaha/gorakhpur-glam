import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "Party Makeup",
    price: "₹2,999",
    features: [
      "Professional Makeup",
      "Hairstyling",
      "False Eyelashes",
      "Touch-up Kit",
    ],
  },
  {
    title: "Bridal Makeup",
    price: "₹14,999",
    features: [
      "HD/Airbrush Makeup",
      "Premium Products",
      "Hairstyling",
      "Draping",
      "Lashes",
      "Touch-up Kit",
    ],
    featured: true,
  },
  {
    title: "Fashion Makeup",
    price: "₹5,999",
    features: [
      "Studio Makeup",
      "Hair Styling",
      "Lashes",
      "Photoshoot Ready",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-pink-500 font-semibold">
            Pricing
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Choose Your Package
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 shadow-xl transition hover:-translate-y-2 ${
                plan.featured
                  ? "bg-pink-500 text-white"
                  : "bg-pink-50"
              }`}
            >
              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>

              <p className="text-5xl font-bold my-8">
                {plan.price}
              </p>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full py-4 rounded-xl font-semibold ${
                  plan.featured
                    ? "bg-white text-pink-500"
                    : "bg-pink-500 text-white"
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}