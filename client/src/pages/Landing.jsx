import Navbar from "component"
import Footer from "../components/Footer";
import Hero from "../components/landing/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default Landing;
