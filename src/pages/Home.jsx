import FAQ from "../components/FAQ";
import Booking from "../components/Booking";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Stats from "../components/Stats";
import BeforeAfter from "../components/BeforeAfter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Pricing />
      <Booking />
      <Gallery />
      <Testimonials />
      <FAQ />
      <BeforeAfter />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}