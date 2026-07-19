import { Calendar, Clock, User, Phone } from "lucide-react";

export default function Booking() {
  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[6px] text-pink-500 font-semibold">
            Book Appointment
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Reserve Your Makeup Session
          </h2>

          <p className="mt-4 text-gray-600">
            Fill in your details and we'll contact you to confirm your booking.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">Full Name</label>

              <div className="relative mt-2">
                <User className="absolute left-4 top-4 text-pink-500" size={20} />

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-xl pl-12 pr-4 py-4"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold">Phone Number</label>

              <div className="relative mt-2">
                <Phone className="absolute left-4 top-4 text-pink-500" size={20} />

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border rounded-xl pl-12 pr-4 py-4"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold">Appointment Date</label>

              <div className="relative mt-2">
                <Calendar className="absolute left-4 top-4 text-pink-500" size={20} />

                <input
                  type="date"
                  className="w-full border rounded-xl pl-12 pr-4 py-4"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold">Preferred Time</label>

              <div className="relative mt-2">
                <Clock className="absolute left-4 top-4 text-pink-500" size={20} />

                <input
                  type="time"
                  className="w-full border rounded-xl pl-12 pr-4 py-4"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="font-semibold">Select Service</label>

              <select className="w-full border rounded-xl p-4 mt-2">
                <option>Bridal Makeup</option>
                <option>Party Makeup</option>
                <option>HD Makeup</option>
                <option>Airbrush Makeup</option>
                <option>Fashion Makeup</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="font-semibold">Additional Details</label>

              <textarea
                rows="5"
                placeholder="Tell us about your event..."
                className="w-full border rounded-xl p-4 mt-2"
              />
            </div>

            <div className="md:col-span-2">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl text-lg font-semibold transition">
                Request Appointment
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}