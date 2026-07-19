import { ArrowLeftRight } from "lucide-react";

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-pink-500 font-semibold">
            Transformation
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Before & After
          </h2>

          <p className="mt-5 text-gray-600">
            See the stunning transformation created by our professional makeup artistry.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Before */}

          <div className="rounded-3xl overflow-hidden shadow-xl">

            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900"
              alt="Before"
              className="w-full h-[500px] object-cover"
            />

            <div className="bg-gray-900 text-white text-center py-4 text-xl font-bold">
              BEFORE
            </div>

          </div>

          {/* After */}

          <div className="rounded-3xl overflow-hidden shadow-xl">

            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900"
              alt="After"
              className="w-full h-[500px] object-cover"
            />

            <div className="bg-pink-500 text-white text-center py-4 text-xl font-bold">
              AFTER
            </div>

          </div>

        </div>

        <div className="flex justify-center mt-12">

          <ArrowLeftRight
            size={48}
            className="text-pink-500"
          />

        </div>

      </div>

    </section>
  );
}