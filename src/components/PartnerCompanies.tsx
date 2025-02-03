import Image from 'next/image'
// import React from 'react'

const PartnerCompanies = () => {
  return (
    <div>

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
  )
}

export default PartnerCompanies;