import Image from "next/image";


const NeuralUniverse = () => {
    return (
        <div>
            <div className="bg-white w-full h-full flex flex-row-reverse justify-center items-center ">
                <div><p className="text-secnavitemcol text-lg">SUMMER 2020</p> <br /> <br />
                <h1 className="text-5xl">Part of the Neural <br /> Universe</h1> <br /> <br />
                <p>We know how large objects will act. but thing on a small scale.</p> <br /> <br />
                <span className="space-x-2"><button className="bg-snbtn text-white rounded-md py-2 px-5">BUY NOW</button>
                <button className="border-snbtn border-2 text-snbtn rounded-md py-2 px-5">READ MORE</button></span></div>
                
                <Image src={'/images/col-md-6 (1).png'} alt="col-md-2"
                    width={704}
                    height={682} />
            </div>
        </div>
    )
}

export default NeuralUniverse