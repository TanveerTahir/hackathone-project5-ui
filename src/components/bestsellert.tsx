"use client";
import { client } from "@/sanity/lib/client";
import { eightProduct } from "@/sanity/lib/queries";
import { Product } from "../types/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const BestSeller = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(eightProduct);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="bg-white w-full my-20">
        <p className="text-center text-secnavitemcol">Featured Products</p>
        <h1 className="text-center text-logocol text-2xl">BESTSELLER PRODUCTS</h1>
        <p className="text-center text-secnavitemcol">Problems trying to resolve the conflict between </p>
      </div>

      {/* cards section */}
      <div>
        <div>
          <div className="grid sm:grid-col-1 md:grid-col-3 lg:grid-cols-4 justify-center items-center place-items-center gap-20 mb-20">
            {product.map((product) => (
              <div key={product.title} className="bg-footbar gap-x-2 gap-y-2 w-[230px] h-[300px] grid justify-center pt-2 rounded-md shadow-lg hover:scale-110 transition-transform ease-in-out">
                {product.productImage && (
                  <Link href={`/product/${product.slug.current}`}>
            
                      <Image
                        className="w-[200px] h-[200px]"
                        src={urlFor(product.productImage).url()}
                        alt={product.title}
                        width={200}
                        height={200}
                      />
                      <h3 className="py-2">{product.title}</h3>
                      <p className="py-2">{product.price} {product.discountPercentage}</p>
                
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
