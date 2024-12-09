import Image from "next/image";
import Link from "next/link";
import { BsTelephone, } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaRegHeart } from "react-icons/fa6"
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaRegEnvelope, FaChild } from "react-icons/fa";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets:['latin'],
    display:'swap'
})

const Navbar = () => {
    return (
        <div className={montserrat.className}>
            {/* top navbar */}
        <div className="flex flex-row py-3 justify-between items-center bg-topnav text-white">
        <p className="flex items-center gap-2 pl-5">
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

        {/* second navbar white */}
        <div className=" bg-white py-5 flex justify-between items-center">
            <h1 className="font-bold text-2xl pl-5  text-topnav">Bandage</h1>
            <ul className="flex items-center font-bold gap-5  text-topnav">
                <li>Home</li>
                <li className="font-medium">Shop</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Pages</li>
            </ul>
            <div className=" text-primery flex justify-center items-center gap-2">
                <p className="flex gap-2 font-bold"> <FaChild />Login/Register</p>
                <div className="flex justify-center items-center gap-2 pr-5">
                <FaSearch />
                <FaShoppingCart />1
                <FaRegHeart />1


                </div>
            </div>

        </div>
        </div>
    )
}

export default Navbar;