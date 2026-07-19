import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}) {
  // Prevent page scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowRight":
          onNext();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "Escape":
          onClose();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onNext, onPrevious, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute top-8 right-8 bg-white rounded-full p-3 hover:scale-110 transition"
        >
          <X size={28} />
        </button>

        {/* Previous */}

        <button
          onClick={onPrevious}
          className="absolute left-8 bg-white rounded-full p-4 hover:scale-110 transition"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Next */}

        <button
          onClick={onNext}
          className="absolute right-8 bg-white rounded-full p-4 hover:scale-110 transition"
        >
          <ChevronRight size={30} />
        </button>

        {/* Image */}

        <motion.img
          key={currentIndex}
          src={images[currentIndex].image}
          alt={images[currentIndex].title}
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
          }}
          transition={{
            duration: 0.3,
          }}
          className="max-w-[90vw] max-h-[85vh] rounded-3xl shadow-2xl"
        />

        {/* Bottom Information */}

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-8 text-center text-white"
        >
          <span className="bg-pink-500 px-5 py-2 rounded-full text-sm">
            {images[currentIndex].category}
          </span>

          <h2 className="text-3xl font-bold mt-5">
            {images[currentIndex].title}
          </h2>

          <p className="text-gray-300 mt-3">
            Image {currentIndex + 1} of {images.length}
          </p>

          <p className="text-gray-400 mt-4 text-sm">
            Use ← → keys to navigate • Esc to close
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}