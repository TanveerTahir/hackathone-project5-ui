import { FaGreaterThan } from "react-icons/fa6";
import Link from "next/link";
import { BsTelephone, } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaRegHeart, FaRegStar } from "react-icons/fa6"
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaRegEnvelope, FaChild } from "react-icons/fa";
import { BiMenuAltRight, BiSolidShow } from "react-icons/bi";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { PiGreaterThanLight } from "react-icons/pi";
import PartnerCompanies from "@/components/PartnerCompanies";



export default function Product () {
    return(
        <div>


            {/* Announcement bar green color  */}

            <div className="h-[58px] md:flex flex-row py-3 justify-between items-center bg-[#23856D] text-white hidden">
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


                            {/* second navbar white */}
        <div className=" bg-white flex justify-around h-[78px] py-5 md:flex-row md:justify-between items-center">
            <h1 className="font-bold text-2xl pl-5  text-topnav font-">Bandage</h1>
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



                         {/* product section */}


            <div className=" flex justify-center bg-[#FAFAFA]">
            
                        <div className="w-[1000px] h-[92px] flex justify-start  gap-2 items-center ">
                            <h3>Home</h3>
                            <p className="flex items-center gap-4 text-gray-400"><FaGreaterThan />Shop<span 
                            className="text-gray-400"></span></p>
                        </div>
            </div>
            <div className="w-full h-[598px] flex justify-center bg-[#fafafa]">

            <div className="w-[1050px] h-[598px] bg-[#FAFAFA] flex justify-center gap-8 mb-48">

                {/* left */}

                <div className="w-full h-[598px]">

                <div className="w-full h-[450px]">
                <Image src={'/images/single-product-1-cover-2.jpg'} alt="product-hero" width={300} height={300} 
                className="w-[506px] h-[450px]" />


                </div>
                
                <div className="flex flexbox gap-4 mt-4">

                <Image src={'/images/single-product-1-cover-2.jpg'} alt="product-hero" width={300} height={300} 
                className="w-[100px] h-[75px]" />
                
                <Image src={'/images/carouselCaptions.png'} alt="product-hero" width={300} height={300} 
                className="w-[100px] h-[75px]" />

                </div>

                </div>
                
                

                {/* right */}
                <div className="mt-4 w-full leading-10 ">

                <h3 className="text-topnav text-xl">Floating Phone</h3>
                <div>
                <p className="flex text-secnavitemcol text-xs font-bold gap-1 "> <span className="flex text-yellow-500"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar /></span>10 Reviews</p>
                </div>
                <p className="text-topnav font-bold ">$1,39.33</p>
                <div>
                <p className="text-secnavitemcol text-xs font-bold">Availability</p>
                <p className="text-primery text-xs font-bold">In Stock</p>
                </div>
                
                <p className="text-secnavitemcol text-xs border-b-1 w-[445px] py-8">Met minim Mollie non desert Alamo est sit cliquey dolor <br /> 
                    do met sent. RELIT official consequent door ENIM RELIT Mollie. <br />
                    Excitation venial consequent sent nostrum met.</p>
                    <hr className="mr-10 "/>

                    <Image src={'/images/product-colors.png'} alt="product-hero" width={300} height={300} 
                className="w-[150px] h-[30px] my-6" />
                <div className="flex justify-start items-center gap-3">
                    <button className="w-[148px] h-[44px] bg-primery text-white rounded-md text-sm font-bold">Select Options</button>
                   <div className="flex w-[445px] gap-3">
                    <p className=" w-[40px] h-[40px] bg-white border rounded-full flex items-center justify-center"> <FaRegHeart /></p>               
                    <span className="w-[40px] h-[40px] bg-white border rounded-full flex items-center justify-center"><FaShoppingCart /></span>               
                    <span className="w-[40px] h-[40px] bg-white border rounded-full flex items-center justify-center"><BiSolidShow /></span>
                    </div>               
                    </div> 
                    </div>
                </div>
             </div>
             

             {/* 2nd product section */}


             <div className="w-full h-[572px] bg-[#ffffff]">
                <div className="h-[91px] w-full">
                    <div className="h-[72px] w-[1051px] flex justify-center items-center"> 
                        <div className="w-[479px] flex justify-between">
                            <p className="text-xs text-secnavitemcol">
                                Description
                            </p>
                            <p className="text-xs text-secnavitemcol">
                                Additional Information
                            </p>
                            <p className="text-xs text-secnavitemcol">
                                Reviews 0
                            </p>
                        </div>
                    </div>
                </div>

                {/* Next hero */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
                <Image src={'/images/unsplash_QANOF9iJlFs.png'} alt=" chair" width={300} height={300}  className="w-[337px] h-[392px]"/>
                <div className="w-[332px] h-[427px]">
                    <h2 className="text-xl font-bold text-topnav pb-6">the quick fox jumps over </h2>
                    <p className="text-secnavitemcol text-sm pt-3 pb-4">Met minim Mollie non desert Alamo est sit <br />
                     cliquey dolor do met sent. RELIT official <br />
                     consequent door ENIM RELIT Mollie. <br />
                     Excitation venial consequent sent nostrum <br />
                     met.</p>

<p className="text-secnavitemcol text-sm pt-3 pb-4">Met minim Mollie non desert Alamo est sit <br />
                     cliquey dolor do met sent. RELIT official <br />
                     consequent door ENIM RELIT Mollie. <br />
                     Excitation venial consequent sent nostrum <br />
                     met.</p>

<p className="text-secnavitemcol text-sm pt-3 pb-4"> Met minim Mollie non desert Alamo est sit <br />
                     cliquey dolor do met sent. RELIT official <br />
                     consequent door ENIM RELIT Mollie. <br />
                     Excitation venial consequent sent nostrum <br />
                     met.</p>

                </div>
                <div>
                    <h2 className="text-xl font-bold text-topnav pb-4">the quick fox jumps over</h2>
                    <ul className="">
                    <li className="text-secnavitemcol text-xs text-bold pt-3 pb-3 flex gap-4"><PiGreaterThanLight />the quick fox jumps over the lazy dog</li>
                    <li className="text-secnavitemcol text-xs text-bold pt-3 pb-3 flex gap-4"><PiGreaterThanLight />the quick fox jumps over the lazy dog</li>
                    <li className="text-secnavitemcol text-xs text-bold pt-3 pb-3 flex gap-4"><PiGreaterThanLight />the quick fox jumps over the lazy dog</li>
                    <li className="text-secnavitemcol text-xs text-bold pt-3 pb-3 flex gap-4"><PiGreaterThanLight />the quick fox jumps over the lazy dog</li>
                    </ul>
                    <h2 className="text-xl font-bold text-topnav pt-3 pb-3">the quick fox jumps over</h2>
                    <ul className="">
                    <li className="text-secnavitemcol text-xs text-bold pt-3 pb-3 flex gap-4"><PiGreaterThanLight />the quick fox jumps over the lazy dog</li>
                    <li className="text-secnavitemcol text-xs text-bold pt-3 pb-3 flex gap-4"><PiGreaterThanLight />the quick fox jumps over the lazy dog</li>
                    <li className="text-secnavitemcol text-xs text-bold pt-3 pb-3 flex gap-4"><PiGreaterThanLight />the quick fox jumps over the lazy dog</li>
                    <li className="text-secnavitemcol text-xs text-bold pt-3 pb-3 flex gap-4"><PiGreaterThanLight />the quick fox jumps over the lazy dog</li>
                    </ul>
                    
                </div>
             </div>

             </div>

             {/* best seller product */}

            <div className="w-full h-[1086px] bg-[#fafafa]">
                
                    <div className="flex justify-center items-center w-full ">

                    <div className="w-[1040px] h-[96px] flex justify-center items-center ">

                    <div className="w-full gap-y-4  ">
                        <h3 className="pb-2 text-2xl font-bold">BESTSELLER PRODUCTS</h3>
                        <hr className="pb-4"/> 
                    </div>
                    </div>
                    </div>
                    
                    
                
                <br />

                 {/* cards section  */}
                                        
                                     {/* image section */}
                                     
                        {/* <div className="grid sm:grid-col-1 md:grid-col-3 lg:grid-cols-4 justify-center items-center place-items-center gap-20 mb-20"> */}
                                                            
                     <div className="flex justify-center items-center">
                        <div className="w- full flex justify-center items-center ">


                        <div className="w-full h-[884px]">

<div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-center items-center gap-5">

    {/* card 1 */}
   <div className="w-[240px] h-[442px] bg-[#ffffff]">
   <Image src={'/images/pot5.png'} alt="pc-2" width={200} height={200} className="w-[239px] h-[280px]" />
    <div className="flexbox justify-center items-center">
       <h3 className="text-logocol pl-6 font-bold pt-6 pb-3">Graphic Design</h3>
       <p className="text-secnavitemcol pl-6 font-bold pb-3">English Department</p>
       <p className="pl-6 pt- pb-3"> <span className="text-[#bdbdbd] text-sm font-bold">$16.48</span> <span className="text-[#23856D] font-bold">$6.48</span></p>
       </div>
   </div>

    {/* card 2 */}
    <div className="w-[240px] h-[442px] bg-[#ffffff]">
   <Image src={'/images/pot2.png'} alt="pot2" width={200} height={200} className="w-[239px] h-[280px]" />
    <div className="flexbox justify-center items-center">
       <h3 className="text-logocol pl-6 font-bold pt-6 pb-3">Graphic Design</h3>
       <p className="text-secnavitemcol pl-6 font-bold pb-3">English Department</p>
       <p className="pl-6 pt- pb-3"> <span className="text-[#bdbdbd] text-sm font-bold">$16.48</span> <span className="text-[#23856D] font-bold">$6.48</span></p>
       </div>
   </div>

    {/* card 3 */}
    <div className="w-[240px] h-[442px] bg-[#ffffff]">
   <Image src={'/images/pot3.png'} alt="pot3" width={200} height={200} className="w-[239px] h-[280px]" />
    <div className="flexbox justify-center items-center">
       <h3 className="text-logocol pl-6 font-bold pt-6 pb-3">Graphic Design</h3>
       <p className="text-secnavitemcol pl-6 font-bold pb-3">English Department</p>
       <p className="pl-6 pt- pb-3"> <span className="text-[#bdbdbd] text-sm font-bold">$16.48</span> <span className="text-[#23856D] font-bold">$6.48</span></p>
       </div>
   </div>

    {/* card 4 */}
    <div className="w-[240px] h-[442px] bg-[#ffffff]">
   <Image src={'/images/pot7.png'} alt="pot4" width={200} height={200} className="w-[239px] h-[280px]" />
    <div className="flexbox justify-center items-center">
       <h3 className="text-logocol pl-6 font-bold pt-6 pb-3">Graphic Design</h3>
       <p className="text-secnavitemcol pl-6 font-bold pb-3">English Department</p>
       <p className="pl-6 pt- pb-3"> <span className="text-[#bdbdbd] text-sm font-bold">$16.48</span> <span className="text-[#23856D] font-bold">$6.48</span></p>
       </div>
   </div>

    {/* card 5 */}
    <div className="w-[240px] h-[442px] bg-[#ffffff]">
   <Image src={'/images/pot8.png'} alt="pot5" width={200} height={200} className="w-[239px] h-[280px]" />
    <div className="flexbox justify-center items-center">
       <h3 className="text-logocol pl-6 font-bold pt-6 pb-3">Graphic Design</h3>
       <p className="text-secnavitemcol pl-6 font-bold pb-3">English Department</p>
       <p className="pl-6 pt- pb-3"> <span className="text-[#bdbdbd] text-sm font-bold">$16.48</span> <span className="text-[#23856D] font-bold">$6.48</span></p>
       </div>
   </div>

    {/* card 6 */}
    <div className="w-[240px] h-[442px] bg-[#ffffff]">
   <Image src={'/images/pot4.png'} alt="pot6" width={200} height={200} className="w-[239px] h-[280px]" />
    <div className="flexbox justify-center items-center">
       <h3 className="text-logocol pl-6 font-bold pt-6 pb-3">Graphic Design</h3>
       <p className="text-secnavitemcol pl-6 font-bold pb-3">English Department</p>
       <p className="pl-6 pt- pb-3"> <span className="text-[#bdbdbd] text-sm font-bold">$16.48</span> <span className="text-[#23856D] font-bold">$6.48</span></p>
       </div>
   </div>

    {/* card 7 */}
    <div className="w-[240px] h-[442px] bg-[#ffffff]">
   <Image src={'/images/pot6.png'} alt="pot7" width={200} height={200} className="w-[239px] h-[280px]" />
    <div className="flexbox justify-center items-center">
       <h3 className="text-logocol pl-6 font-bold pt-6 pb-3">Graphic Design</h3>
       <p className="text-secnavitemcol pl-6 font-bold pb-3">English Department</p>
       <p className="pl-6 pt- pb-3"> <span className="text-[#bdbdbd] text-sm font-bold">$16.48</span> <span className="text-[#23856D] font-bold">$6.48</span></p>
       </div>
   </div>

    {/* card 8 */}
    <div className="w-[240px] h-[442px] bg-[#ffffff]">
   <Image src={'/images/pot1.png'} alt="pot8" width={200} height={200} className="w-[239px] h-[280px]" />
    <div className="flexbox justify-center items-center">
       <h3 className="text-logocol pl-6 font-bold pt-6 pb-3">Graphic Design</h3>
       <p className="text-secnavitemcol pl-6 font-bold pb-3">English Department</p>
       <p className="pl-6 pt- pb-3"> <span className="text-[#bdbdbd] text-sm font-bold">$16.48</span> <span className="text-[#23856D] font-bold">$6.48</span></p>
       </div>
   </div>
    
 </div>
</div>
                        </div>


                        


                     </div>
            </div>



             {/* Associate partners companies */}
            
                    <PartnerCompanies />
            
                        {/* foooooooooooooooooooooooooooooter */}
            
            
            
            
                        <div className="h[488px]">
                        <div className="bg-footbar flex items-center justify-around space-x-96 py-10">
                            <h1 className="text-logocol font-bold">Bandage</h1>
                            <div className="flex items-center gap-4 text-primery">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
            
                            </div>
                            </div>
                        <div className="h-[272px] flex justify-center gap-20 leading-8 text-xs py-5 my-10"> 
            
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
                        <div className="bg-footbar h-[74px] text-secnavitemcol text-sm py-5 pl-44"><p>Made With Love By Finland All Rights Reserverd replicate-TanveerTahir</p></div>




        </div>
        </div>

    );
}