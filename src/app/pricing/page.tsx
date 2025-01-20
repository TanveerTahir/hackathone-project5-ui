import { HiArrowSmallRight } from "react-icons/hi2";
import { PiGreaterThanLight } from "react-icons/pi";
import { FaCircleCheck, FaGreaterThan, FaInstagram, FaFacebook, FaYoutube, FaTwitter, } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "@/components/Footer";

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
      <br /> <br /> <br />
      <br /> <br /> <br />
      <div className="w-full h-[384px]">
        <div className="w-full h-[180px] flex justify-center ">
          <div>
            <p className="w-[427px] h-[50px] text-center">PRICING</p>
            <h3 className="w-[427px] h-[80px] text-5xl font-bold text-center">
              Simple Pricing
            </h3>
            <p className="w-[427px] h-[50px] flex gap-5 text-sm justify-center items-center">
              {" "}
              <span className=" hover:text-[#737373]">Home</span>
              <PiGreaterThanLight className="text-[#bdbdbd]" />
              <span className=" hover:text-[#737373]">Pricing</span>
            </p>
          </div>
        </div>
      </div>
      {/* pricing */}
      <div className=" w-full h-[1168px] bg-footbar">

        <div>
          <div className="w-{1050px] flex items-center justify-center border-2 pt-12 pb-12">
            <div className="w-[633px] [h-100px] flex flex-col justify-center items-center">
              <h3 className="text-logocol text-2xl font-bold text-center">
                Pricing
              </h3>
              <p className="text-secnavitemcol text-xs text-center pb-12">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics Netonian mechanics
              </p>
              <div className="w-[311px] h-11 flex justify-center items-center space-x-4x-4 gap-4">
                <p className="text-xs text-center gap-3">Monthly</p>
                <p className="border-[#b2e3ff] rounded-full w-[45px] h-[25px] text-xs border-2">
                  <p className="bg-primery rounded-full w-[50%] h-full text-secnavitemcol gap-3 text-xs"></p>
                </p>

                <p className="text-xs">Yearly </p>
                <p className="bg-[#2be3ff] rounded-full px-2 py-1 text-xs">
                  Save25%
                </p>
              </div>
            </div>
          </div>

          
        </div>
        {/* pricing cards */}
        <div className="flex justify-center items-center">
            <div className="w-[985px] h-[704px]">
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
                
                <div className="w-[985px] h-[704px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center place-items-center">


                  {/* card 1 */}
                <div className="bg-white  w-[329px] h-[664px] rounded-lg hover:bg-logocol hover:w-[327px] hover:h-[704px] ">
                  <div className="w-[327px] h-[664px] pb-[50px] pt-[50px] pl-[40px] pr-[40px] hover:pb-[70px] hover:text-white hover:pt-[70px] gap-2">
                    <h3 className="text-center text-logocol text-2xl pb-[35px] hover:text-white">
                      FREE
                    </h3>
                    <p className="text-secnavitemcol text-center text-xs">
                      Organize across all
                    </p>
                    <p className="text-secnavitemcol text-center text-xs pb-[35px]">
                      apps by hand
                    </p>
                    <div className="flex justify-center items-center pb-[35px]">
                      <p className="text-primery text-center font-bold text-4xl">
                        0
                      </p>
                      <div className="text-primery text-xs">
                        <p>$</p> <p>Per Month</p>
                      </div>
                    </div>
                    <p className="flex justify-center items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-snbtn text-xl" />
                      Unlimited product update
                    </p>
                    <p className="flex justify-center items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-snbtn text-xl" />
                      Unlimited product update
                    </p>
                    <p className="flex justify-center items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-snbtn text-xl" />
                      Unlimited product update
                    </p>
                    <p className="flex justify-left pl-6  items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-secnavitemcol text-xl" />
                      1GB Cloud Storage
                    </p>
                    <p className="flex justify-left  pl-6 items-center text-sm gap-3 pb-[35px]">
                      <FaCircleCheck className="text-secnavitemcol text-xl" />
                      Email and community support
                    </p>
                    <div className="flex justify-center items-center">
                      <button className="bg-primery text-white text-sm px-[65px] py-3 rounded-lg ">
                        Try for free
                      </button>
                    </div>
                  </div>
                </div>



                {/* card 2 */}
                <div className="bg-white hover:text-white w-[329px] h-[664px] rounded-lg hover:bg-logocol hover:w-[327px] hover:h-[704px]">
                  <div className="w-[327px] h-[664px] pb-[50px] pt-[50px] pl-[40px] pr-[40px] hover:pb-[70px] hover:pt-[70px] gap-2 ">
                    <h3 className="text-center text-logocol text-2xl pb-[35px] hover:text-white">
                      STANDARED
                    </h3>
                    <p className="text-secnavitemcol text-center text-xs">
                      Organize across all
                    </p>
                    <p className="text-secnavitemcol text-center text-xs pb-[35px]">
                      apps by hand
                    </p>
                    <div className="flex justify-center items-center pb-[35px]">
                      <p className="text-primery text-center font-bold text-4xl">
                        9.99
                      </p>
                      <div className="text-primery text-xs">
                        <p>$</p> <p>Per Month</p>
                      </div>
                    </div>
                    <p className="flex justify-center items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-snbtn text-xl" />
                      Unlimited product update
                    </p>
                    <p className="flex justify-center items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-snbtn text-xl" />
                      Unlimited product update
                    </p>
                    <p className="flex justify-center items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-snbtn text-xl" />
                      Unlimited product update
                    </p>
                    <p className="flex justify-left pl-6  items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-secnavitemcol text-xl" />
                      1GB Cloud Storage
                    </p>
                    <p className="flex justify-left  pl-6 items-center text-sm gap-3 pb-[35px]">
                      <FaCircleCheck className="text-secnavitemcol text-xl" />
                      Email and community support
                    </p>
                    <div className="flex justify-center items-center">
                      <button className="bg-primery text-white text-sm px-[65px] py-3 rounded-lg ">
                        Try for free
                      </button>
                    </div>
                  </div>
                </div>



                {/* card 3 */}
                <div className="bg-white hover:text-white w-[329px] h-[664px] rounded-lg hover:bg-logocol hover:w-[327px] hover:h-[704px]">
                  <div className="w-[327px] h-[664px] pb-[50px] pt-[50px] pl-[40px] pr-[40px] hover:pb-[70px] hover:pt-[70px] gap-2">
                    <h3 className="text-center text-logocol text-2xl pb-[35px] hover:text-white">
                      PREMIUM
                    </h3>
                    <p className="text-secnavitemcol text-center text-xs">
                      Organize across all
                    </p>
                    <p className="text-secnavitemcol text-center text-xs pb-[35px]">
                      apps by hand
                    </p>
                    <div className="flex justify-center items-center pb-[35px]">
                      <p className="text-primery text-center font-bold text-4xl">
                        19.99
                      </p>
                      <div className="text-primery text-xs">
                        <p>$</p> <p>Per Month</p>
                      </div>
                    </div>
                    <p className="flex justify-center items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-snbtn text-xl" />
                      Unlimited product update
                    </p>
                    <p className="flex justify-center items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-snbtn text-xl" />
                      Unlimited product update
                    </p>
                    <p className="flex justify-center items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-snbtn text-xl" />
                      Unlimited product update
                    </p>
                    <p className="flex justify-left pl-6  items-center text-sm pb-10 gap-3">
                      <FaCircleCheck className="text-secnavitemcol text-xl" />
                      1GB Cloud Storage
                    </p>
                    <p className="flex justify-left  pl-6 items-center text-sm gap-3 pb-[35px]">
                      <FaCircleCheck className="text-secnavitemcol text-xl" />
                      Email and community support
                    </p>
                    <div className="flex justify-center items-center">
                      <button className="bg-primery text-white text-sm px-[65px] py-3 rounded-lg ">
                        Try for free
                      </button>
                    </div>
                  </div>
                </div>



                </div>
              </div>
            </div>
          </div>


           {/* Associate partners companies */}
          
                           <div className="w-full h-[479px] bg-[#fafafa] pt-12 pb-12">
                              <div className="w-full h-[479px] justify-center">
                                  <div className="w-full h-[120px]">
                                  <h2 className="text-logocol font-bold text-lg text-center">Trusted by over 4000 Big Companies</h2>
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
                              </div>


                              <div className="w-full h-[210px] mt-[400px] mb-[50px]">
                                <div className="flex justify-center items-center">
                                  <div>
                                    <h2 className="text-4xl text-logocol font-bold text-center">Pricing FAQs</h2>
                                    <p className="text-lg text-secnavitemcol text-center">Problems trying to resolve the conflice between</p>
                                    <p className="text-lg text-secnavitemcol text-center">the two major realms of Classical physics</p>
                                  </div>
                                </div>
                                <div className="w-full h-[582px] mt-11">
                                  <div className="flex justify-center items-center">
                                    <div className="grid grid-cols-1 md:grid-cols-2 justify-start">
                                     <div className="flex justify-center items-center">
                                      <div className="flex gap-4">
                                         <p className="text-primery"><FaGreaterThan /></p>
                                          <div>
                                              <h4 className="text-bold font-bold">the quick fox jumps over the lazy dog</h4>
                                              <p className="text-sm text-secnavitemcol" >Met minim Mollie non desert Alamo est sit cliquey<br />
                                               dolor do met sent. RELIT official consequent door ENIM <br />
                                               RELIT Mollie. Excitation venial consequent sent <br />
                                               nostrum met.</p>
    
                                          </div>
                                      
                                       </div>
                                    </div>

                                     <div className="flex justify-center items-center">
                                         <div className="flex gap-4">
                                             <p className="text-primery"><FaGreaterThan /></p>
                                                <div>
                                                   <h4 className="text-bold font-bold">the quick fox jumps over the lazy dog</h4>
                                                       <p className="text-sm text-secnavitemcol" >Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                                                         do met sent. RELIT official consequent door ENIM RELIT Mollie. <br /> 
                                                              Excitation venial consequent sent nostrum met..</p>
                                                 </div>
                                          </div>
                                     </div>

                                     <div className="flex justify-center items-center">
                                      <div className="flex gap-4">
                                         <p className="text-primery"><FaGreaterThan /></p>
                                          <div>
                                              <h4 className="text-bold font-bold">the quick fox jumps over the lazy dog</h4>
                                              <p className="text-sm text-secnavitemcol" >Met minim Mollie non desert Alamo est sit cliquey<br />
                                               dolor do met sent. RELIT official consequent door ENIM <br />
                                               RELIT Mollie. Excitation venial consequent sent <br />
                                               nostrum met.</p>
    
                                          </div>
                                      
                                       </div>
                                    </div>

                                     <div className="flex justify-center items-center">
                                         <div className="flex gap-4">
                                             <p className="text-primery"><FaGreaterThan /></p>
                                                <div>
                                                   <h4 className="text-bold font-bold">the quick fox jumps over the lazy dog</h4>
                                                       <p className="text-sm text-secnavitemcol" >Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                                                         do met sent. RELIT official consequent door ENIM RELIT Mollie. <br /> 
                                                              Excitation venial consequent sent nostrum met..</p>
                                                 </div>
                                          </div>
                                     </div>


                                     <div className="flex justify-center items-center">
                                      <div className="flex gap-4">
                                         <p className="text-primery"><FaGreaterThan /></p>
                                          <div>
                                              <h4 className="text-bold font-bold">the quick fox jumps over the lazy dog</h4>
                                              <p className="text-sm text-secnavitemcol" >Met minim Mollie non desert Alamo est sit cliquey<br />
                                               dolor do met sent. RELIT official consequent door ENIM <br />
                                               RELIT Mollie. Excitation venial consequent sent <br />
                                               nostrum met.</p>
    
                                          </div>
                                      
                                       </div>
                                    </div>

                                     <div className="flex justify-center items-center">
                                         <div className="flex gap-4">
                                             <p className="text-primery"><FaGreaterThan /></p>
                                                <div>
                                                   <h4 className="text-bold font-bold">the quick fox jumps over the lazy dog</h4>
                                                       <p className="text-sm text-secnavitemcol" >Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                                                         do met sent. RELIT official consequent door ENIM RELIT Mollie. <br /> 
                                                              Excitation venial consequent sent nostrum met..</p>
                                                 </div>
                                          </div>
                                     </div>
                                      












                                      </div>
                                  </div>
                                      
                                      </div>
                                     </div>

                                     
                                     <div className="flex justify-center items-center w-full mt-[350px] mb-[80px]">
                                        <div className="flex justify-center items-center w-[1000px]">
                                          <div className="flex justify-center w-[500px]">
                                          <p className="text-center text-secnavitemcol text-lg">Haven&apos;t got your answer? Contact our support</p>
                                          </div>
                                          
                                        </div>
                                      </div>

                                      

                                      <div className="mt-[160px] mb-[160px]">
                                        <div className="flex justify-center items-center">
                                          <div>
                                            <h2 className="text-4xl text-center pb-5">Start your 14 days free trial</h2>
                                            <p className="text-sm text-secnavitemcol text-center pb-5">Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                                            do met sent. RELIT official consequent.</p>
                                            <div className="flex justify-center items-center pb-5"><button className="text-white bg-primery text-sm px-7 py-3 rounded-lg">Try for free now</button>
                                            </div>
                                            <p className="flex justify-center items-center text-primery gap-10"><FaTwitter /> <FaFacebook /> <FaInstagram /> <FaYoutube /> </p>
                                          </div>
                                        </div>
                                      </div>


                                      {/*././././././././././. Footer ./././././././././ */}

                                      <Footer />




                                    </div>
                                

                                
  );
}
