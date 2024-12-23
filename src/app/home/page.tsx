import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import FeatueredProduct from "@/components/FeaturedProduct";
import AdSection from "@/components/AdSection";
import AdSection2 from "@/components/AdSection2";
import FeaturedPost from "@/components/FeaturedPost";
import Footer from "@/components/Footer";



export default function HomePage () {
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