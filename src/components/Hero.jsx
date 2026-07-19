import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#fff8f7] via-[#ffeef5] to-[#fffaf8]">

      {/* Background Decorations */}

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-pink-200 blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-pink-100 blur-3xl opacity-50"></div>

      {/* Main Container */}

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="uppercase tracking-[8px] text-pink-500 font-semibold mb-6">
            Luxury Makeup Artist
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">

            Beauty

            <br />

            Beyond

            <span className="text-pink-500">
              {" "}Imagination
            </span>

          </h1>

          <p className="mt-8 text-gray-600 text-lg leading-8 max-w-xl">

            We specialize in Bridal Makeup,
            Engagement Makeup,
            Party Makeup,
            HD Makeup,
            Airbrush Makeup and Fashion Styling
            using premium international products.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#booking"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-xl transition"
            >
              Book Appointment

              <ArrowRight size={20} />
            </a>

            <a
              href="#gallery"
              className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full flex items-center gap-3 hover:bg-pink-500 hover:text-white transition"
            >
              <Play size={18} />

              View Portfolio
            </a>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>

              <h2 className="text-4xl font-bold text-pink-500">
                500+
              </h2>

              <p className="text-gray-600 mt-2">
                Happy Brides
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-pink-500">
                8+
              </h2>

              <p className="text-gray-600 mt-2">
                Years Experience
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-pink-500">
                1200+
              </h2>

              <p className="text-gray-600 mt-2">
                Clients
              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e?auto=format&fit=crop&w=900&q=80"
            alt="Makeup Artist"
            className="rounded-[40px] shadow-2xl w-full h-[700px] object-cover"
          />

          {/* Floating Card */}

          <div className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-2xl p-6">

            <h3 className="text-2xl font-bold text-pink-500">
              ★★★★★
            </h3>

            <p className="text-gray-700 mt-2">
              Rated 5.0 by
            </p>

            <p className="font-bold text-gray-900">
              1200+ Happy Clients
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}