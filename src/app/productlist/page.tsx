import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa6";
import { BsListCheck } from "react-icons/bs";
import { HiViewGrid } from "react-icons/hi";
import Link from "next/link";
import { BsTelephone, } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaRegHeart } from "react-icons/fa6"
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaRegEnvelope, FaChild } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import React from "react";







const ProductList = () => {
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
            

            {/* main section */}


            <div className="w-full bg-footbar">
                <div className=" flex justify-center">

                <div className="w-[1000px] h-[92px] flex justify-between items-center ">
                <h3>Shop</h3>
                <p className="flex items-center gap-4">Home  <span className="text-gray-400">  <FaGreaterThan /> </span> <span className="text-secnavitemcol">Shop</span></p>
                </div>

                </div>
                
                

                <div className="w-full h-[271px] bg-footbar">
                <div className="w-full h-[271px] flex justify-center md:justify-start pl-5">
                    <div>
                        <Image src={'/images/card-item.png'} alt="card1" width={205} height={223}  />
                    
                    </div>

                    <div>
                        <Image src={'/images/card-item (1).png'} alt="card2" width={205} height={223}  />
                    
                    </div>

                    <div>
                        <Image src={'/images/card-item (3).png'} alt="card3" width={205} height={223}  />
                    
                    </div>

                    <div>
                        <Image src={'/images/card-item (2).png'} alt="card4" width={205} height={223}  />
                    
                    </div>

                    <div>
                        <Image src={'/images/col-md-4.png'} alt="card5" width={205} height={223}  />
                    
                    </div>


                </div>
                </div>
            </div>

            {/* third nav */}

            <div className=" flex justify-center">

                <div className="w-[1000px] h-[98px] flex justify-between items-center ">
                   <p className="text-secnavitemcol">Showing all 12 results</p>
                   <p className="flex items-center gap-4">Views:  <span className="text-gray-400 border-l-slate-500"> <HiViewGrid /></span> <span className="text-secnavitemcol border-l-slate-500"><BsListCheck /></span></p>
                  <p> <button className="bg-[#DDDDDD] text-secnavitemcol py-3 px-7">Popularity</button>
                  <button className="bg-primery text-white py-3 px-5 rounded-md">filter</button></p> 
                </div>    

                 


        </div>

        {/* Associate partners companies */}

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









            {/* fooooooooooooooooooooooooooter end */}



             <div>
                        
                        {/* cards section */}
            
                         {/* image section */}
                         <div className="my-[48px]">
                            <div className="grid sm:grid-col-1 md:grid-col-3 lg:grid-cols-4 justify-center items-center place-items-center gap-20 mb-20">
                                <div>
                                    <Image src={'/images/product-cover-5.png'} alt="pc-1" width={239} height={427} />
                                   <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
            
                                <div>
                                    <Image src={'/images/fixed-height.png'} alt="pc-2" width={239} height={427} />
                                    <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
            
                                <div>
                                    <Image src={'/images/product-cover-5 (1).png'} alt="pc-3" width={239} height={427} />
                                    <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
            
                                <div>
                                    <Image src={'/images/product-cover-5 (2).png'} alt="pc-4" width={239} height={427} />
                                    <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
            
                                <div>
                                    <Image src={'/images/product-cover-5 (3).png'} alt="pc-5" width={239} height={427} />
                                    <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
                                <div>
                                    <Image src={'/images/fixed-height (1).png'} alt="pc-6" width={239} height={427} />
                                    <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
                                <div>
                                    <Image src={'/images/product-cover-5 (4).png'} alt="pc-7" width={239} height={427} />
                                    <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
                                <div>
                                    <Image src={'/images/fixed-height (2).png'} alt="pc-8" width={239} height={427} />
                                    <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
                                <div>
                                    <Image src={'/images/fixed-height.png'} alt="pc-2" width={239} height={427} />
                                    <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
            
                                <div>
                                    <Image src={'/images/product-cover-5 (1).png'} alt="pc-3" width={239} height={427} />
                                    <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
            
                                <div>
                                    <Image src={'/images/product-cover-5 (2).png'} alt="pc-4" width={239} height={427} />
                                    <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
            
                                <div>
                                    <Image src={'/images/product-cover-5 (3).png'} alt="pc-5" width={239} height={427} />
                                    <div className="flexbox justify-center items-center">
                                   <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                                    <p className="text-secnavitemcol text-center px-4">English Department</p>
                                    <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                                    <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                                   </div>
                                </div>
                                </div>
                                </div>
                        </div>


                        {/* page button */}

                        <div className="flex justify-center">
                        <button className="p-5 border-2 border-footbar bg-footbar text-secnavitemcol">first</button>
                        <button className="p-5 border-2 border-footbar text-primery">1</button>
                        <button className="p-5 border-2 border-footbar bg-primery text-white">2</button>
                        <button className="p-5 border-2 border-footbar text-primery">3</button>
                        <button className="p-5 border-2 border-footbar text-primery">next</button>
                        </div>
                        






        </div>
    )
}

export default ProductList;