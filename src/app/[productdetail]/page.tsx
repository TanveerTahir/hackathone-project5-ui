// // "use client"
// import { product } from "@/sanity/schemaTypes/product";
// import { Product } from "@types/products";
// import { eightProduct } from "@/sanity/lib/queries";
// import { client } from "@/sanity/lib/client";
// // import React, { useState, useEffect } from "react";

// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";



// const ProductDetail = async () => {

//     const  eightProduct = await fetch( `*[_type == "product"][9..16]`);
//     const productDetails = await eightProduct.json();
//     console.log(productDetails)

    

//     return (
//         <div>

//             {productDetails.isNew}
//             {productDetails.title}
//             {productDetails.price}
//             {productDetails.description}
//             {productDetails.tags}
//             {productDetails.productImage}
//         </div>

//     )
// }

// export default ProductDetail;