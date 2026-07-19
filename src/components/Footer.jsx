import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-pink-400">
              MakeupStudio
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Luxury bridal, HD, party and fashion makeup services.
              Creating unforgettable beauty experiences.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">
              Contact
            </h3>

            <p className="flex items-center gap-3 text-gray-400">
              <FaPhoneAlt />
              +91 9876543210
            </p>

            <p className="mt-4 text-gray-400">
              Ahmedabad, Gujarat
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">

              <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />

              <FaFacebookF className="hover:text-pink-400 cursor-pointer transition" />

              <FaWhatsapp className="hover:text-pink-400 cursor-pointer transition" />

            </div>

          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-center text-gray-500">
          © 2026 MakeupStudio. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}