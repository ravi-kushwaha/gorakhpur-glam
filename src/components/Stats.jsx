import { Users, Heart, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Heart size={40} />,
    number: "500+",
    title: "Bridal Makeovers",
  },
  {
    icon: <Users size={40} />,
    number: "1200+",
    title: "Happy Clients",
  },
  {
    icon: <Award size={40} />,
    number: "8+",
    title: "Years Experience",
  },
  {
    icon: <Sparkles size={40} />,
    number: "100%",
    title: "Premium Products",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="text-center"
            >

              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-4 text-lg">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}