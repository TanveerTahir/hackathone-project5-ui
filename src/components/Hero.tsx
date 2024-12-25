import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets:['latin'],
    display:'swap'
})


const Hero = () => {
    return (
        <div className="{montserrat.className}">

            <div className="absolute w-full">
            <Image 
            src={"/images/shop-hero-1-product-slide-1.jpg"}
            alt="carousel-item"
            layout="responsive"
            width={1440}
            height={716}
            />
            </div>
            <div className="relative  flex w-full items-center pl-20 pt-20 ">
            <div className="md:flex-col text-white  justify-centr  place-content-center leading-relaxed pl-20">

<p className="font-bold text-1xl">SUMMER 2020</p> <br />
<h1 className="text-6xl">NEW COLLECTION</h1><br />
<p className="text-2xl">We know how large objects will act, <br />
    but things on a small scale.</p> <br />
    <button className="bg-snbtn text-2xl py-3 px-10 rounded-md hover:bg-white hover:text-snbtn">SHOP NOW</button>
            </div>
            
            </div>
            
            


        </div>
    )
}

export default Hero;