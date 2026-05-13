import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Metodologia from "./components/Metodologia";
import CTA from "./components/CTA";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import Galeria from "./components/Galeria";
import VideoSection from "./components/VideoSection";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Metodologia />
      <Galeria />
      <VideoSection />
      <CTA />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </>
  );
}
