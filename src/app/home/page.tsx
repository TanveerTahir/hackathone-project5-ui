import Link from "next/link";
import { BsTelephone, } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaRegHeart } from "react-icons/fa6"
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaRegEnvelope, FaChild } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import { BiMenuAltRight } from "react-icons/bi";
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