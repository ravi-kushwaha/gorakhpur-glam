import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma",
      review:
        "Absolutely loved my bridal look. It lasted all day and everyone complimented my makeup!",
    },
    {
      name: "Neha Patel",
      review:
        "Very professional and friendly. The makeup looked flawless in photos.",
    },
    {
      name: "Riya Verma",
      review:
        "Highly recommended. Amazing experience from start to finish.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Client Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-pink-50 rounded-3xl p-8 shadow-lg"
            >

              <div className="flex mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600">
                {item.review}
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}