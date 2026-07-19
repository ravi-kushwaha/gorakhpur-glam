import { motion } from "framer-motion";

export default function About() {
  return (
    <section
  id="about"
  className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900"
            alt="Makeup Artist"
            className="rounded-[35px] shadow-2xl w-full h-[600px] object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-pink-500 font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-5 leading-tight">
            Every Face
            <br />
            Deserves
            <span className="text-pink-500"> Perfection.</span>
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            I specialize in bridal, engagement, reception, fashion,
            editorial and luxury party makeup. Every look is carefully
            designed according to your skin tone, face shape and personal
            style so you feel confident and beautiful.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-4xl font-bold text-pink-500">7+</h3>
              <p className="text-gray-600 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-4xl font-bold text-pink-500">500+</h3>
              <p className="text-gray-600 mt-2">
                Happy Brides
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-4xl font-bold text-pink-500">4.9★</h3>
              <p className="text-gray-600 mt-2">
                Client Rating
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h3 className="text-4xl font-bold text-pink-500">100%</h3>
              <p className="text-gray-600 mt-2">
                Premium Products
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}