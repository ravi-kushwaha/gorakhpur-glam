import { services } from "../data/siteData";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-pink-500 font-semibold">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Makeup Packages
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Every service is customized according to skin tone, outfit,
            occasion and your unique personality.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03
              }}
              className="rounded-3xl bg-rose-50 p-8 shadow-lg border border-pink-100"
            >

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-8">
                {service.description}
              </p>

              <h4 className="text-3xl text-pink-500 font-bold">
                {service.price}
              </h4>

              <button className="mt-8 w-full bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition">
                Book Now
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}