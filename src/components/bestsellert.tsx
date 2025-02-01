"use client";
import { client } from "@/sanity/lib/client";
import { eightProduct } from "@/sanity/lib/queries";
import { Product } from "../types/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/action";
import Swal from 'sweetalert2';

const BestSeller = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(eightProduct);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  // cart handle //

  const handleAddToCart = (e : React.MouseEvent, product : Product) => {
    e.preventDefault()
    Swal.fire({
      position : 'top-right',
      icon : 'success',
      title : `${product.title} added to cart`,
      showConfirmButton : false,
      timer : 3000,
    })
    addToCart(product)
  }

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
              <div key={product.title} className="bg-footbar rounded-lg gap-x-2 gap-y-2 w-[240px] h-[402px] grid justify-center pt-2 shadow-lg hover:scale-110 transition-transform ease-in-out">
                {product.productImage && (
                  <Link href={`${product.slug.current}`}>
            
                      <Image
                        className="w-[239px] h-[250px]"
                        src={urlFor(product.productImage).url()}
                        alt={product.title}
                        width={200}
                        height={200}
                      />
                      <h3 className="py-2">{product.title}</h3>
                      <p className="py-2">{product.price} {product.discountPercentage}</p>
                      
                      <button className="bg- bg-primery text-white font-semibold py-2 px-4 rounded-lg shadow-md 
                      hover:scale-110 transition-transform duration-300 ease-in-out"
                      onClick={(e) => handleAddToCart(e,product)}>Add To Cart</button>
                
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
