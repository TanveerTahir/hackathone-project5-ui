import Image from "next/image";


const FeatueredProduct = () => {
    return(
        <div>
            <div className="bg-white w-full my-20">
                <p className="text-center text-secnavitemcol">Featured Products</p>
                <h1 className="text-center text-logocol text-2xl">BESTSELLER PRODUCTS</h1>
                <p className="text-center text-secnavitemcol">Problems trying to resolve the conflict between </p>
            </div>
            
            {/* cards section */}

             {/* image section */}
             <div>
                <div className="grid sm:grid-col-1 md:grid-col-3 lg:grid-cols-4 justify-center items-center place-items-center gap-20 mb-20">
                    <div>
                        <Image src={'/images/product-cover-5.png'} alt="pc-1" width={239} height={427} />
                       <div className="flexbox justify-center items-center">
                       <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                        <p className="text-secnavitemcol text-center px-4">English Department</p>
                        <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                        <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                       </div>
                    </div>

                    <div>
                        <Image src={'/images/fixed-height.png'} alt="pc-2" width={239} height={427} />
                        <div className="flexbox justify-center items-center">
                       <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                        <p className="text-secnavitemcol text-center px-4">English Department</p>
                        <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                        <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                       </div>
                    </div>

                    <div>
                        <Image src={'/images/product-cover-5 (1).png'} alt="pc-3" width={239} height={427} />
                        <div className="flexbox justify-center items-center">
                       <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                        <p className="text-secnavitemcol text-center px-4">English Department</p>
                        <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                        <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                       </div>
                    </div>

                    <div>
                        <Image src={'/images/product-cover-5 (2).png'} alt="pc-4" width={239} height={427} />
                        <div className="flexbox justify-center items-center">
                       <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                        <p className="text-secnavitemcol text-center px-4">English Department</p>
                        <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                        <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                       </div>
                    </div>

                    <div>
                        <Image src={'/images/product-cover-5 (3).png'} alt="pc-5" width={239} height={427} />
                        <div className="flexbox justify-center items-center">
                       <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                        <p className="text-secnavitemcol text-center px-4">English Department</p>
                        <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                        <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                       </div>
                    </div>
                    <div>
                        <Image src={'/images/fixed-height (1).png'} alt="pc-6" width={239} height={427} />
                        <div className="flexbox justify-center items-center">
                       <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                        <p className="text-secnavitemcol text-center px-4">English Department</p>
                        <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                        <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                       </div>
                    </div>
                    <div>
                        <Image src={'/images/product-cover-5 (4).png'} alt="pc-7" width={239} height={427} />
                        <div className="flexbox justify-center items-center">
                       <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                        <p className="text-secnavitemcol text-center px-4">English Department</p>
                        <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                        <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                       </div>
                    </div>
                    <div>
                        <Image src={'/images/fixed-height (2).png'} alt="pc-8" width={239} height={427} />
                        <div className="flexbox justify-center items-center">
                       <h3 className="text-logocol text-center p-2">Graphic Design</h3>
                        <p className="text-secnavitemcol text-center px-4">English Department</p>
                        <p className="text-center"> <span className="text-secnavitemcol">$16.48</span> <span className="text-snbtn">$6.48</span></p>
                        <Image src={'/images/product-colors.png'} alt="pcols" width={82} height={16} className="mx-20 my-2"/>
                       </div>
                    </div>
                    </div>
                    </div>
            </div>

    )
}

export default FeatueredProduct;