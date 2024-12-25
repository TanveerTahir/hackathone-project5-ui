import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="h-full w-[900px] flex justify-center items-center">
        <div className="h-[716px]">
        <Image
          src={"/images/shop-hero-1-product-slide-1.jpg"}
          alt="carousel-item"
          layout="responsive"
          width={200}
          height={200}
          className="h-full w-full absolute"/></div>
        
        <div className="w-[1044px] h-[651px] justify-center items-center pl-[120px] pt-[150px] relative">
        <div className="w-[599px] h[331px] md:flex-col text-white justify-centr leading-relaxed">
          <p className="font-bold text-1xl">SUMMER 2020</p> <br />
          <h1 className="text-6xl">NEW COLLECTION</h1>
          <br />
          <p className="text-2xl">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <br />
          <button className="bg-snbtn text-2xl py-3 px-10 rounded-md hover:bg-white hover:text-snbtn">
            SHOP NOW
          </button>
        </div>
      </div>
      
      
      </div>
  );
};

export default Hero;
