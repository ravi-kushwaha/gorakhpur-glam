import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-28 bg-[#fffaf9]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-pink-500 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Book Your Appointment
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14">

          {/* Form */}
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-xl p-4"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your event..."
              className="w-full border rounded-xl p-4"
            />

            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl transition">
              Send Inquiry
            </button>

          </form>

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <Phone className="text-pink-500" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-pink-500" />
              <p>hello@makeupstudio.com</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-pink-500" />
              <p>Ahmedabad, Gujarat, India</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}