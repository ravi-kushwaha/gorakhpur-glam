import { useState } from "react";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "Basic HD Engagement Makeup",
    price: "₹12,500",
    features: [
      "HD Makeup",
      "Hairstyling",
      "Saree/Dupatta Draping",
      "Basic Skin Prep",
      "Eyelashes included",
      "Coloured lenses included",
    ],
  },
  {
    title: "Luxury HD Engagement Makeup",
    price: "₹15,500",
    features: [
      "HD Makeup",
      "Hairstyling",
      "Saree/Dupatta Draping",
      "5 step Professional Skin Care Routine",
      "Eyelashes included",
      "Hair Extentions included",
      "Coloured lenses included",
    ],
  },
  {
    title: "Basic HD Bridal Makeup",
    price: "₹19,500",
    features: [
      "HD Bridal Makeup",
      "Bridal Hairstyling",
      "Saree/Dupatta Draping",
      "Basic Skin Prep",
      "Eyelashes included",
      "Coloured lenses included",
    ],
  },
  {
    title: "Luxury HD Bridal Makeup",
    price: "₹24,500",
    subtitle: "Most Popular Package",
    featured: true,
    features: [
      "Luxury HD Bridal Makeup",
      "Luxury International Products",
      "Bridal Hair Styling",
      "Saree / Dupatta Draping",
      "Premium Lashes",
      "Hair Extentions",
      "5 step Professional Skin Care Routine",
    ],
  },
  {
    title: "Party Makeup",
    isTiered: true,
    prices: {
      "Basic HD": "₹3,000",
      "Advance HD": "₹4,500",
      "Luxury HD": "₹5,500"
    },
    subtitle: "Perfect for Parties & Events",
    features: [
      "Professional Makeup",
      "Hair Styling",
      "False Eyelashes",
      "Colour lenses (Luxury HD)",
      "Premium & Basic Products",
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
  const [selectedTier, setSelectedTier] = useState("Basic HD");

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
            Premium makeup services designed to make every special moment unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 shadow-xl transition duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col justify-between ${
                plan.featured
                  ? "bg-pink-500 text-white scale-105"
                  : "bg-white text-gray-900"
              }`}
            >
              <div>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-3xl font-bold">
                  {plan.title}
                </h3>

                <p className={`mt-2 ${plan.featured ? "text-pink-100" : "text-gray-500"}`}>
                  {plan.subtitle}
                </p>

                {plan.isTiered && (
                  <div className="mt-6 flex gap-2 bg-gray-100 p-1.5 rounded-xl justify-between">
                    {Object.keys(plan.prices).map((tier) => (
                      <button
                        key={tier}
                        onClick={() => setSelectedTier(tier)}
                        className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all ${
                          selectedTier === tier
                            ? "bg-pink-500 text-white shadow-sm"
                            : "text-gray-600"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                )}

                <h2 className="text-4xl font-bold my-8">
                  {plan.isTiered ? plan.prices[selectedTier] : plan.price}
                </h2>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={20} className={plan.featured ? "text-white" : "text-pink-500"} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/91XXXXXXXXXX?text=Hi, I want to book the ${encodeURIComponent(plan.title)} ${plan.isTiered ? `(${selectedTier})` : ""} package.`}
                target="_blank"
                rel="noreferrer"
                className={`mt-10 block text-center w-full py-4 rounded-xl font-semibold transition ${
                  plan.featured
                    ? "bg-white text-pink-500 hover:bg-gray-100"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                }`}
              >
                Book Appointment
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}