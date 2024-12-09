import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets:['latin'],
    display:'swap'
})


const Hero = () => {
    return (
        <div className="{montserrat.className}">

            <div className="relative">
            <Image 
            src={"/images/shop-hero-1-product-slide-1.jpg"}
            alt="carousel-item"
            layout="responsive"
            width={1440}
            height={716}
            />
            </div>
            <div className="absolute inset-0 flex w-full place-items-center place-content-center justify-center items-center justify-items-center p-20 ">
            <div className="absolute inset-0 flexbox text-white items-center justify-center place-items-left place-content-center leading-relaxed p-20">

<p className="font-bold text-1xl">SUMMER 2020</p> <br />
<h1 className="text-6xl">NEW COLLECTION</h1><br />
<p className="text-2xl">We know how large objects will act, <br />
    but things on a small scale.</p> <br />
    <button className="bg-snbtn text-2xl py-3 px-10 rounded-md ">SHOP NOW</button>
            </div>
            
            </div>
            
            


        </div>
    )
}

export default Hero;