// "use client"
import { product } from "@/sanity/schemaTypes/product";
// import { Product } from "@types/products";
import { eightProduct } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
// import React, { useState, useEffect } from "react";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import { groq } from "next-sanity";



const ProductDetail = async () => {

    const  eightProduct = await fetch('https://template6-six.vercel.app/api/products');
    const productDetails = await eightProduct.json();
    console.log(productDetails)

    

    return (
        <div>

            {productDetails.isNew}
            {productDetails.title}
            {productDetails.price}
            {productDetails.description}
            {productDetails.tags}
            {productDetails.productImage}
        </div>

    )
}

export default ProductDetail;