import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="h-screen w-full md:h-full md:w-[900px] lg:w-[900px] flex md:justify-center md:items-center">
        <div className="h-screen md:h-[716px]">
        <Image
          src={"/images/shop-hero-1-product-slide-1.jpg"}
          alt="carousel-item"
          layout="responsive"
          width={200}
          height={200}
          className="h-full w-full absolute"/></div>
        
        <div className="flex-cols md:flex md:w-[1044px] md:h-[651px] md:justify-center md:items-center md:pl-[120px] md:pt-[150px] relative">
        <div className="md:w-[599px] md:h[331px] md:flex-col text-white md:justify-centre md:leading-relaxed">
          <p className="text-xs font-bold md:text-1xl">SUMMER 2020</p> <br />
          <h1 className="text-lg md:text-6xl">NEW COLLECTION</h1>
          <br />
          <p className="text-xs md:text-2xl">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <br />
          <button className="bg-snbtn text-sm py-1 px-3 md:text-2xl md:py-3 md:px-10 rounded-md hover:bg-white hover:text-snbtn">
            SHOP NOW
          </button>
        </div>
      </div>
      
      
      </div>
  );
};

export default Hero;
