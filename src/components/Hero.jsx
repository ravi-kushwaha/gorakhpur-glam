import Services from "../components/Services";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-100 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-medium">
            ✨ Professional Makeup Studio
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Enhance Your
            <span className="text-pink-500"> Natural Beauty</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Welcome to <strong>Gorakhpur Glam</strong>, where beauty meets elegance.
            We specialize in Bridal Makeup, Party Makeup, HD Makeup, Airbrush Makeup,
            Engagement Looks, Reception Makeup and Professional Beauty Services to
            make your special moments unforgettable.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition">
              Book Appointment
            </button>

            <button className="border border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-4 rounded-full font-semibold transition">
              View Gallery
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700"
            alt="Makeup Artist"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}