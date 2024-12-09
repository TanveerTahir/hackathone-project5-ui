import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import FeatueredProduct from "./components/FeaturedProduct";
import AdSection from "./components/AdSection";
import AdSection2 from "./components/AdSection2";
import Footer from "./components/Footer";
import FeaturedPost from "./components/FeaturedPost";

export default function Home() {
  return (

    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <FeatueredProduct />
      <AdSection />
      <AdSection2 />
      <FeaturedPost />
      <Footer />
    </div>
  );
}
