
import Rating from "@/components/rating";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import { Image } from "next-sanity/image";
// import Image from "next/image";





interface ProductPageProps {
    params: Promise<{slug : string}>
}

async function getProduct(slug : string): Promise<Product> {
    return client.fetch(
        groq`*[_type =="product" && slug.current == $slug] [0] {
        _id,
        title,
        _type,
        "imageUrl" :productImage.asset -> url,
        price,
        tags,
        discountPercentage,
        inventory,
        description,
        isNew
        }`, {slug}
    );
}


export default async function ProductPage({params} : ProductPageProps) {
    const {slug} = await params;
    const product = await getProduct(slug)


     

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Product Image Section */}
    <div className="aspect-square  rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300">
      {product.productImage && (
        <Image
          src={urlFor(product.productImage).url()}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      )}
      
    </div>
    
    

    {/* Product Details Section */}
    <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
      {/* Product Title */}
      <h1 className="text-4xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300">
        {product.title}
      </h1>
      

      <Rating />

      {/* Product Price */}
      <p className="text-2xl font-semibold text-gray-800">
        ${product.price}
        {product.isNew}
        {product.discountPercentage}
      </p>
      <div className="text-secnavitemcol font-thin underline">
    {product.tags}

    </div>

      {/* Product Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {product.description}
      </p>

      {/* Call-to-Action Button */}
      <button className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300">
        Add to Cart
      </button>
    </div>
  </div>
</div>

    )
}





// // "use client"
// import { product } from "@/sanity/schemaTypes/product";
// // import { Product } from "@types/products";
// import { eightProduct } from "@/sanity/lib/queries";
// import { client } from "@/sanity/lib/client";
// // import React, { useState, useEffect } from "react";

// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import React from "react";
// import { groq } from "next-sanity";



// const ProductDetail = async () => {

//     const  eightProduct = await fetch('https://template6-six.vercel.app/api/products');
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