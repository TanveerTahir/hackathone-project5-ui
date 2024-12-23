import { HiArrowSmallRight } from "react-icons/hi2";
import { PiGreaterThanLight } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";


import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaRegHeart,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Pricing() {
  return (
    <div>
      <nav className="w-full h-[91px] flex justify-around items-center fixed z-10">
        <div className=" bg-white flex justify-around h-[78px] py-5 md:flex-row md:justify-between  items-center gap-[200px]">
          <h1 className={`font-bold text-2xl pl-5  text-topnav font-`}>
            Bandage
          </h1>
          <ul className="hidden md:flex md:flex-row md:justify-between md:items-center font-bold gap-5  text-topnav  hover:font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="text-gray-400 flex md:text-primery md:flex justify-center items-center gap-6">
            <p className="hidden md:flex gap-2 font-bold">Login</p>
            <div className="flex justify-center items-center gap-2 pr-5">
              <button className="bg-primery text-white text-xs px-5 py-3 rounded-lg flex justify-center items-center gap-1">
                {" "}
                Become a member <HiArrowSmallRight />
              </button>
              {/* <FaSearch  className="hidden md:hidden"/>
<FaShoppingCart /><p className="hidden md:hidden lg:hidden">1</p>
<FaRegHeart className="hidden md:flex"/><p className="hidden md:flex">1</p>
<BiMenuAltRight className="flex md:hidden"/> */}
            </div>
          </div>
        </div>
      </nav>

                                                      {/* pricing section */}
                                                      <br /> <br /> <br /><br /> <br /> <br />


                                                      <div className="w-full h-[384px]">
                                                        <div className="w-full h-[180px] flex justify-center ">
                                                            <div>
                                                                <p className="w-[427px] h-[50px] text-center">PRICING</p>
                                                                <h3 className="w-[427px] h-[80px] text-5xl font-bold text-center">Simple Pricing</h3>
                                                                <p className="w-[427px] h-[50px] flex gap-5 text-sm justify-center items-center"> <span className=" hover:text-[#737373]">Home</span><PiGreaterThanLight className="text-[#bdbdbd]"/><span className=" hover:text-[#737373]">Pricing</span></p>
                                                            </div>
                                                        </div>

                                                      </div>

                                                      {/* pricing */}
                                                      <div className=" w-full h-[1168px] bg-footbar">
                                                        <div>
                                                            <div className="w-{1050px] flex items-center justify-center border-2 pt-12 pb-12">
                                                            <div className="w-[633px] [h-100px] flex flex-col justify-center items-center">
                                                                <h3 className="text-logocol text-2xl font-bold text-center">Pricing</h3>
                                                                <p className="text-secnavitemcol text-xs text-center pb-12">Problems trying to resolve the conflict between <br />
                                                                the two major realms of Classical physics Netonian mechanics</p> 
                                                                <div className="w-[311px] h-11 flex justify-center items-center space-x-4x-4 gap-4">
                                                                    <p className="text-xs text-center gap-3">Monthly
                                                                    </p>
                                                                 <p className="border-[#b2e3ff] rounded-full w-[45px] h-[25px] text-xs border-2">
                                                                    <p className="bg-primery rounded-full w-[50%] h-full text-secnavitemcol gap-3 text-xs">
                                                                </p>
                                                                </p>
                                                                    
                                                                    <p className="text-xs">Yearly </p>
                                                                    <p className="bg-[#2be3ff] rounded-full px-2 py-1 text-xs">Save25%</p>
                                                                </div>
                                                            </div>
                                                           
                                                            
                                                            </div>


                                                             {/* pricing cards */}
                                                             <div>
                                                                <div className="w-[985px] h-[704px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center" >
                                                                    <div className="bg-white hover:text-white w-[329px] h-[664px] rounded-lg hover:bg-logocol hover:w-[327px] hover:h-[704px] ">
                                                                        <FaCircleCheck className="text-snbtn" />

                                                                    </div>
                                                                </div>
                                                                </div>
                                                        </div>

                                                     
                                                       </div>
</div>

  );
}
