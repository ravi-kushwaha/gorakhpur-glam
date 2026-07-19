import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "./Lightbox";

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e?auto=format&fit=crop&w=900&q=80",
    title: "Luxury Bridal Makeup",
    category: "Bridal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    title: "Party Makeup",
    category: "Party",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    title: "HD Makeup",
    category: "HD",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    title: "Airbrush Makeup",
    category: "Airbrush",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    title: "Reception Makeup",
    category: "Reception",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    title: "Fashion Makeup",
    category: "Fashion",
  },
];

const categories = [
  "All",
  "Bridal",
  "Party",
  "HD",
  "Airbrush",
  "Reception",
  "Fashion",
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredGallery =
    selectedCategory === "All"
      ? gallery
      : gallery.filter(
          (item) => item.category === selectedCategory
        );

  const openImage = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <section
        id="gallery"
        className="py-28 bg-[#fff8f7]"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[6px] text-pink-500 font-semibold">
              Portfolio
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Makeup Portfolio
            </h2>

            <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
              Browse our latest bridal, party,
              fashion and HD makeup transformations.
            </p>

          </div>

          {/* Filter Buttons */}

          <div className="flex flex-wrap justify-center gap-4 mb-16">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-white hover:bg-pink-100"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          {/* Gallery */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <AnimatePresence>

              {filteredGallery.map((item, index) => (

                <motion.div
                  key={item.title}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  onClick={() => openImage(index)}
                  className="group relative overflow-hidden rounded-[30px] shadow-2xl cursor-pointer"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[430px] object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition">

                    <div className="absolute bottom-6 left-6">

                      <span className="bg-pink-500 px-4 py-2 rounded-full text-white text-sm">
                        {item.category}
                      </span>

                      <h3 className="text-white text-2xl font-bold mt-4">
                        {item.title}
                      </h3>

                    </div>

                    <div className="absolute top-5 right-5 bg-white rounded-full w-12 h-12 flex items-center justify-center">

                      <Search className="text-pink-500" />

                    </div>

                  </div>

                </motion.div>

              ))}

            </AnimatePresence>

          </div>

        </div>
      </section>

      <Lightbox
        images={filteredGallery}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNext={() =>
          setCurrentIndex((prev) =>
            prev === filteredGallery.length - 1 ? 0 : prev + 1
          )
        }
        onPrevious={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? filteredGallery.length - 1 : prev - 1
          )
        }
      />
    </>
  );
}