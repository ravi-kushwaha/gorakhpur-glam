import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* Adds space so the navbar doesn't cover content */}
        <Pricing />
      </div>
      <Footer />
    </>
  );
}