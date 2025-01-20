import Image from "next/image";



export default function VitaClassic ()  {
    return(
        <div className="relative bg-adsection w-[1350px] sm:w-full sm:hscreen h-[670px]">
    
                <div className="absolute flex md:flex-row lg:flex-row justify-center m-40">
                <div className="text-white pt-20 gap-3 ">
            <p className="pl-10 pt-30 text-2xl">SUMMER 2020</p> <br />
            <h1 className="text-7xl pl-10">Vita Classic Product</h1> <br />
            <p className=" pl-10 text-lg">We know how large objects will act, We know how are objects will act, We know</p> <br />
            <span className="font-bold pl-10 text-lg">$16.48</span> <button className="bg-snbtn py-2 px-7 text-white ml-3"> ADD TO CART</button>
            </div>
            <div className="flex place-self-end">
            <Image src={'/images/col-md-6.png'} alt="col-md-6" width={510} height={685}/>
            </div>
            </div>
            
        
        </div>
    )
}