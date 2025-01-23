import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
// import { Image } from "next-sanity/image";
import Image from "next/image";






interface ProductPageProps {
    params: Promise<{slug : string}>
}

async function getProduct(slug : string): Promise<Product> {
    return client.fetch(
        groq`*[_type =="product" && alug.current == $slug][0]{
        _id,
        title
        _type
        productImage
        price
        tags
        discountPercentage
        isNew
        
        }`, {slug}
    );
}


export default async function ProductPage({params} : ProductPageProps) {
    const {slug} = await params;
    const product = await getProduct(slug)


    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="aspect-square">
                    {product.productImage && (
                        <Image
                        src={urlFor(product?.productImage).url()}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md"
                            />)}
                        
                      
                </div>
                <div className="flex flex-col gap-8">
                <h1 className="text-4xl font-bold">
                {product.title}
                </h1>
                <p className="text-2xl dont-sans">{product.price}</p>
                </div>
            </div>
        </div>
    )
}