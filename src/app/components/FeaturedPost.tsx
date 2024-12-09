import Image from "next/image";
import { LuAlarmClock } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";
import React from "react";



const FeaturedPost =() => {
    return(
        <div className="w-[1340px] h-[1044px] flex justify-center">
            <div className="w-[950px] h-[1044px] flexbox">
            <div className="text-center flexbox justify-center p-20">
                <p className="text-primery">Practice Advice</p>
                <h1 className="text-logocol text-5xl">Featured Posts</h1>
                <p className="text-secnavitemcol text-center">Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="flex justify-center gap-4">

                {/* card - 1 */}

                <div><Image src={'/images/fixed-height (3).png'} alt="fh3" width={328} height={300}/>
                <div className="w-[328px] h-[300px] shadow-lg  px-5"><ul className="flex gap-4 pt-1">
                <li className="text-primery">Google</li>
                <li>Trending</li>
                <li>New</li>
                </ul>
                <br />
                <h1 className="text-logocol text-2xl">Loudest à la Madison #1 (L'integral)</h1>
                <br />
                <p>We focus on ergonomics and meeting 
                   you where you work. It's only a 
                   keystroke away.</p>
                   <br />
                   <ul className="flex justify-between">
                    <li className="flex gap-1 items-center"><p className="text-primery"><LuAlarmClock /></p>22 April 2021</li>
                   <li className="flex gap-1 items-center"><p className="text-snbtn"><BsGraphUp /></p>10 comments</li></ul>
                   
    
                   <p className=" pt-2">Learn More <span className="text-primery text-xl">&gt;</span></p>
                   </div>

                </div>

                {/* card - 2 */}
               
                <div>
                <Image src={'/images/fixed-height (4).png'} alt="fh4" width={328} height={300}/>
                <div className="w-[328px] h-[300px] shadow-lg  px-5"><ul className="flex gap-4 pt-1">
                <li className="text-primery">Google</li>
                <li>Trending</li>
                <li>New</li>
                </ul>
                <br />
                <h1 className="text-logocol text-2xl">Loudest à la Madison #1 (L'integral)</h1>
                <br />
                <p>We focus on ergonomics and meeting 
                   you where you work. It's only a 
                   keystroke away.</p>
                   <br />
                   <ul className="flex justify-between">
                   <li className="flex gap-1 items-center"><p className="text-primery"><LuAlarmClock /></p>22 April 2021</li>
                   <li className="flex gap-1 items-center"><p className="text-snbtn"><BsGraphUp /></p>10 comments</li></ul>
    
                   <p className="pt-2">Learn More <span className="text-primery text-xl">&gt;</span></p>
                   </div>
                </div>

                {/* card - 3 */}

                <div>
                <Image src={'/images/fixed-height (5).png'} alt="fh5" width={328} height={300}/>
                <div className="w-[328px] h-[300px] shadow-lg  px-5"><ul className="flex gap-4 pt-1">
                <li className="text-primery">Google</li>
                <li>Trending</li>
                <li>New</li>
                </ul>
                <br />
                <h1 className="text-logocol text-2xl">Loudest à la Madison #1 (L'integral)</h1>
                <br />
                <p>We focus on ergonomics and meeting 
                   you where you work. It's only a 
                   keystroke away.</p>
                   <br />
                   <ul className="flex justify-between">
                   <li className="flex gap-1 items-center"><p className="text-primery"><LuAlarmClock /></p>22 April 2021</li>
                   <li className="flex gap-1 items-center"><p className="text-snbtn"><BsGraphUp /></p>10 comments</li></ul>
    
                   <p className="pt-2">Learn More <span className="text-primery text-xl">&gt;</span></p>
                   </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default FeaturedPost;