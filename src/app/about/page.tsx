// import { FaGreaterThan } from "react-icons/fa6";
// import { BsListCheck } from "react-icons/bs";
// import { HiViewGrid } from "react-icons/hi";
// import { BsTelephone, } from "react-icons/bs";
// import { FaSearch, FaShoppingCart } from "react-icons/fa";
// import { FaRegEnvelope, FaChild } from "react-icons/fa";
// import { BiMenuAltRight } from "react-icons/bi";
import { HiArrowSmallRight } from "react-icons/hi2";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaRegHeart } from "react-icons/fa6"
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function About () {
    return(
        <div>
                <nav className="w-full h-[91px] flex justify-around items-center fixed z-10">

                <div className=" bg-white flex justify-around h-[78px] py-5 md:flex-row md:justify-between  items-center gap-[200px]">
            <h1 className={`font-bold text-2xl pl-5  text-topnav font-`}>Bandage</h1>
            <ul className="hidden md:flex md:flex-row md:justify-between md:items-center font-bold gap-5  text-topnav  hover:font-medium">
                
                
                <li><Link href="/">Home</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div className="text-gray-400 flex md:text-primery md:flex justify-center items-center gap-6">
                <p className="hidden md:flex gap-2 font-bold">Login</p>
                <div className="flex justify-center items-center gap-2 pr-5">

                    <button className="bg-primery text-white text-xs px-5 py-3 rounded-lg flex justify-center items-center gap-1"> Become a member <HiArrowSmallRight /></button>
                {/* <FaSearch  className="hidden md:hidden"/>
                <FaShoppingCart /><p className="hidden md:hidden lg:hidden">1</p>
                <FaRegHeart className="hidden md:flex"/><p className="hidden md:flex">1</p>
                <BiMenuAltRight className="flex md:hidden"/> */}


                </div>
            </div>

        </div>

                </nav>

                {/* ============================                hero                                       section    ============================== */}
                 
                 <section className="w-full h-screen flex flex-col">
                    <div className="w-full h-[729px] absolute top-10 left-10 flex justify-center ">
                        <div className="w-full h-[544px] flex justify-center items-center">

                        <div className="w-[599px] h-[321px] md:w-1/2">
                            <p className="text-secnavitemcol text-xs pb-5">ABOUT COMPANY</p>
                            <h1 className="text-logocol  text-4xl font-bold pb-5">ABOUT US</h1>
                            <p className="text-[#737373]  text-xs pb-5">We know how large objects will act.<br />
                                but things on a small scale
                            </p>
                            <button className="bg-primery text-white text-xs font-light px-7 py-3 rounded-lg hover:bg-gradient-to-r">Get Quote Now</button>
                            
                        </div>
                        </div>
                        
                        <Image alt="hero image" src={'/images/hb.png'} width={200} height={200} className="w-[720px]  h-[729px] z-0 justify-self-"/>
                    </div>

                 </section>


<section className="pt-[120px]">
    <div className="w-full h-[236px] flex justify-center items-center gap-20">
        <div>
            <p className="text-red-700 text-xs ">Problems trying</p>
            <p className="text-logocol text-lg font-bold pt-5 ">Met minim Mollie non desert </p>
               <p className="text-logocol font-bold ">Alamo est sit cliquey dolor do </p>
                <p className="text-logocol font-bold ">met sent.</p>
        </div>
        <div><p className="text-secnavitemcol text-xs ">Problems trying to resolve the conflict between the two major realms of </p>
        <p className="text-secnavitemcol text-xs">Classical physics: Newtonian mechanics </p></div>
        
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
    <div className="text-center">
        <h2 className="text-logocol text-2xl font-bold">15k</h2>
        <p className="text-secnavitemcol text-xs">Happy Customers</p>
    </div>
    <div className="text-center">
        <h2 className="text-logocol text-2xl font-bold">150k</h2>
        <p className="text-secnavitemcol text-xs">Monthly Visitors</p>
    </div>
    <div className="text-center">
        <h2 className="text-logocol text-2xl font-bold">15</h2>
        <p className="text-secnavitemcol text-xs">Countries Worldwide</p>
    </div>
    <div className="text-center">
        <h2 className="text-logocol text-2xl font-bold">100+</h2>
        <p className="text-secnavitemcol text-xs">Top Partners</p>
    </div>
    </div>
</section>
   


                {/* embed video link: switzerland  youtube video link embeded */}
                
                            
                            <div>
                                <div className="w-full h-[764] flex justify-center items-center">
                                    <div className="w-full h-[764px] flex justify-center items-center">
                                    <iframe width="[989px]" height="[540px]" src="https://www.youtube.com/embed/HkPykDjw_uY?si=XbA1UVd72EZFR0fz" title="YouTube video player" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrer-policy="strict-origin-when-cross-origin" allow-fullscreen></iframe>

                                    </div>
                                </div>
                            </div>

                            {/* team introduction ,,, Meet our Team  */}

                            <div className="w-full h-[826px] flex justify-center items-center">
                                <div className="w-full h-[826px] flex justify-center items-center">
                                    <div className="grid grid-cols-3 gap-10">
                                        <div className="w-[329px] h-[383px]">
                                            <Image alt="team1" width={200} height={200} src={'/images/team-1-user-1.jpg'} className="w-full"/>
                                            <p className="text-logocol text-xs font-bold text-center pt-10">Username</p>
                                            <p className="text-secnavitemcol text-xs text-center py-2">Profession</p>
                                            <p className="text-primery flex items-center gap-5 justify-center py-2"><FaInstagram /><FaFacebook /><FaTwitter /></p>

                                        </div>

                                        <div className="w-[329px] h-[383px]">
                                            <Image alt="team2" width={200} height={200} src={'/images/team-1-user-2.jpg'} className="w-full"/>
                                            <p className="text-logocol text-xs font-bold text-center pt-10">Username</p>
                                            <p className="text-secnavitemcol text-xs text-center py-2">Profession</p>
                                            <p className="text-primery flex items-center gap-5 justify-center py-2"><FaInstagram /><FaFacebook /><FaTwitter /></p>

                                        </div>

                                        <div className="w-[329px] h-[383px]">
                                            <Image alt="team3" width={200} height={200} src={'/images/team-1-user-3.jpg'} className="w-full"/>
                                            <p className="text-logocol text-xs font-bold text-center pt-10">Username</p>
                                            <p className="text-secnavitemcol text-xs text-center py-2">Profession</p>
                                            <p className="text-primery flex items-center gap-5 justify-center py-2"><FaInstagram /><FaFacebook /><FaTwitter /></p>

                                        </div>

                                    </div>
                                </div>
                            </div>


                            
                 {/* Associate partners companies */}

                 <div className="w-full h-[479px] bg-[#fafafa] pt-12 pb-12">
                    <div className="w-full h-[479px] justify-center">
                        <div className="w-full h-[120px]">
                        <h2 className="text-logocol font-bold text-lg text-center">Big Companies Are Here</h2>
                        <p className="text-secnavitemcol text-xs  text-center">problem trying to resolve the conflict between</p>
                        <p className="text-secnavitemcol text-xs  text-center">the two major realms of Classical physics Newtonian mechanics</p>
                        </div>  

                        <div className="w-full ">
                    <div className=" flex justify-center">
                
                <div className="w-full h-[175px] flex justify-center items-center bg-footbar ">
                   <div className="w-[1052px] flex justify-around items-center gap-x-10">
                    <Image src={"/images/col-md-2.png"} alt="" height={200} width={200} className="w-[103px] h-[34px]"></Image>
                    <Image src={"/images/fa-brands-2.png"} alt="" height={200} width={200} className="w-[83px] h-[59px]"></Image>
                    <Image src={"/images/fa-brands-3.png"} alt="" height={200} width={200} className="w-[102px] h-[75px]"></Image>
                    <Image src={"/images/fa-brands-4.png"} alt="" height={200} width={200} className="w-[102x] h-[41px]"></Image>
                    <Image src={"/images/fa-brands-5.png"} alt="" height={200} width={200} className="w-[104px] h-[62px]"></Image>
                    <Image src={"/images/fa-brands-6.png"} alt="" height={200} width={200} className="w-[76px] h-[72px]"></Image>
                   </div>
                    
                </div> 

                </div>
                    </div>


                    </div>



                 </div>


                 <div className="w-full h-[479px] justify-center">
                   
                    <div className="w-full h-[640px] flex">
                        <div className="bg-[#2a7cc7] w-full h-[637px] text-white pl-2 pt-5 flex justify-center items-center">
                            <div className="w-full h-[430px] flex justify-center items-center ">

                                <div className="w-[438px] h-[238px] space-y-8">
                                <p className="text-white text-sm">WORK WITH US</p>
                            <h2 className="text-white text-4xl">Now Let's grow yours</h2>
                            <p className="text-white text-sm">The gradual accumulation of information about atomic and
                     <br />   small-scale behavior during the first quarter of the 20th</p>
                            <button className="border-white border-solid border-2 rounded-md text-xs py-2 px-5 mt-5">Button</button>

                                </div>
                            </div>
                        </div>
                        <div>
                            <Image alt="comapny ads" width={200} height={200} src={'/images/unsplash_vjMgqUkS8q8.png'} className="w-full h-[640px]"/>
                        </div>
                    </div>
                 </div>
                <br />
                <br />
                <br />
                <br />
                <br /><br />
                       
                
                            {/* foooooooooooooooooooooooooooooter */}
                
                
                
                
                            <div className=" w-full h[488px]">
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