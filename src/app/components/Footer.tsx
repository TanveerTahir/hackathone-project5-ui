import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaRegHeart } from "react-icons/fa6"

const Footer = () => {
    return (
        <div>
            <div className="bg-footbar flex items-center justify-around space-x-96 py-10">
                <h1 className="text-logocol font-bold">Bandage</h1>
                <div className="flex items-center gap-4 text-primery">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />

                </div>
                </div>
            <div className="flex justify-center gap-20 leading-8 text-xs py-5 my-10"> 

            <div className=""></div>
                <ul>
                    <li className="text-logocol ">Company Info</li>
                    <li className="text-secnavitemcol">About Us</li>
                    <li className="text-secnavitemcol">Carrier</li>
                    <li className="text-secnavitemcol">We are hiring</li>
                    <li className="text-secnavitemcol">Blog</li>
                </ul>
                <div className="">
                <ul>
                    <li className="text-logocol">Legal</li>
                    <li className="text-secnavitemcol">About Us</li>
                    <li className="text-secnavitemcol">Carrier</li>
                    <li className="text-secnavitemcol">We are hiring</li>
                    <li className="text-secnavitemcol">Blog</li>
                </ul>
                </div>
                <div className="">
                <ul>
                    <li className="text-logocol">Features</li>
                    <li className="text-secnavitemcol">Buisness Marketing</li>
                    <li className="text-secnavitemcol">User Analytic</li>
                    <li className="text-secnavitemcol">Live Chat</li>
                    <li className="text-secnavitemcol">Unlimited Support</li>
                </ul>
                </div>
                <div className="">
                <ul>
                    <li className="text-logocol">Resources</li>
                    <li className="text-secnavitemcol">IOS & Android</li>
                    <li className="text-secnavitemcol">Watch a Demo</li>
                    <li className="text-secnavitemcol">Customers</li>
                    <li className="text-secnavitemcol">API</li>
                </ul>
                </div>
            
                <div className="grid grid-c">
                <ul>
                    <li className="text-logocol">Get In Touch</li>
                    <br />
                    <li className="text-secnavitemcol flex flex-row"> <span className="flex "><input type="text" placeholder="Your Email" className="p-2 bg-footbar rounded text-xs" /><button className="bg-primery text-white font-thin text-xs p-2 rounded">Subscribe</button></span></li>
                    <li className="text-secnavitemcol">Lore Imp Sum dolor Amit</li>
                    <li className="text-secnavitemcol"></li>
                </ul>
                </div>

            </div>
            <div className="bg-footbar text-secnavitemcol text-sm py-5 pl-44"><p>Made With Love By Finland All Rights Reserverd replicate-TanveerTahir</p></div>
        </div>

    )
}
export default Footer;