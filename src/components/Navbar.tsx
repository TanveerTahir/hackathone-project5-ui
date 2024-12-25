import Link from "next/link";
import { BsTelephone, } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaRegHeart } from "react-icons/fa6"
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaRegEnvelope, FaChild } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import { BiMenuAltRight } from "react-icons/bi";
import React from "react";


const montserra = Montserrat({
    subsets:['latin'],
    display:'swap',
    weight:['400'],
})

const Navbar = () => {
    return (
        <div className={montserra.className}>
            {/* annoucement bar */}
        <div className={`${montserra.className} h-[58px] md:flex flex-row py-3 justify-between items-center bg-topnav text-white hidden`}>
        <p className="md:flex items-center gap-2 pl-5 hidden">
         <BsTelephone />(225) 555-0118 
         <FaRegEnvelope />michelle.rivera@example.com
        </p>
        <p>Follow Us  and get a chance to win 80% off</p>
        <p className="flex items-center gap-2 pr-5">Follow Us : 
         <FaInstagram />
         <FaYoutube />
         <FaFacebook />
         <FaTwitter />
        </p>
        </div>

        {/* navbar white */}
        <div className=" bg-white flex justify-around h-[78px] py-5 md:flex-row md:justify-between items-center">
            <h1 className={`${montserra.className}font-bold text-2xl pl-5  text-topnav font-`}>Bandage</h1>
            <ul className="hidden md:flex md:flex-row md:justify-between md:items-center font-bold gap-5  text-topnav  hover:font-medium">
                
                
                <li><Link href="/">Home</Link></li>
                <li><Link href="/productlist">Product List</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/pricing">Pricing</Link></li> 
                <li><Link href="/team">Team</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div className="text-gray-400 flex md:text-primery md:flex justify-center items-center gap-2">
                <p className="hidden md:flex gap-2 font-bold"> <FaChild />Login/Register</p>
                <div className="flex justify-center items-center gap-2 pr-5">
                <FaSearch />
                <FaShoppingCart /><p className="hidden">1</p>
                <FaRegHeart className="hidden md:flex"/><p className="hidden md:flex">1</p>
                <BiMenuAltRight className="flex md:hidden"/>


                </div>
            </div>

        </div>

        {/* grid section */}



        





        </div>
    )
}

export default Navbar;