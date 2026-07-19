export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800"
            alt="Professional Makeup"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div>

          <span className="text-pink-500 font-semibold uppercase tracking-widest">
            About Gorakhpur Glam
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-6">
            Beauty That Enhances Your Confidence
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-6">
            Gorakhpur Glam is a premium makeup studio dedicated to creating
            elegant and timeless looks for every occasion. Whether it's your
            wedding day, engagement, reception, party or fashion event,
            we believe every client deserves to look and feel their absolute best.
          </p>

          <p className="text-gray-600 leading-8 text-lg mb-10">
            Our experienced makeup artists use high-quality international
            products and the latest techniques to create flawless,
            long-lasting makeup that perfectly matches your personality,
            outfit and occasion.
          </p>

          <div className="grid grid-cols-2 gap-8">

            <div>
              <h3 className="text-4xl font-bold text-pink-500">150+</h3>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-pink-500">5★</h3>
              <p className="text-gray-600 mt-2">Customer Satisfaction</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-pink-500">100%</h3>
              <p className="text-gray-600 mt-2">Premium Products</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}