import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorsPick from "@/components/editorspick";
import BestSeller from "@/components/bestsellert";
import FeaturedPost from "@/components/FeaturedPost";
import Footer from "@/components/Footer";
import VitaClassic from "@/components/vitaclassic";
import NeuralUniverse from "@/components/neuraluniverse";





export default function HomePage () {
return (
    <div>
     <Navbar />
      <Hero />
      <BestSeller />
      <VitaClassic />
      <EditorsPick />
      <NeuralUniverse />
      <FeaturedPost />
      <Footer />
    </div>

);
}