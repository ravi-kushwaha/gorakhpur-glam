import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#fff9f7] flex items-center justify-center z-[99999]">
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-6xl md:text-7xl font-bold"
        >
          <span className="text-pink-500">Gorakhpur</span>
          <span className="text-gray-900">Glam</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 uppercase tracking-[8px] text-gray-500"
        >
          Luxury Makeup Studio
        </motion.p>

        <div className="flex justify-center mt-10 gap-3">
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="w-4 h-4 rounded-full bg-pink-500"
          />

          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              repeat: Infinity,
            }}
            className="w-4 h-4 rounded-full bg-pink-400"
          />

          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              repeat: Infinity,
            }}
            className="w-4 h-4 rounded-full bg-pink-300"
          />
        </div>

      </div>
    </div>
  );
}