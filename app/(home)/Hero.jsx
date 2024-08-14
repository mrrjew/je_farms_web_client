
"use client"
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/redux/product/product.slice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Hero() {

  const dispatch = useDispatch()
  const {items:products,status} = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(getProducts())
    console.log(products,status)
  },[])


  return (
    <div>
      <div className="w-full flex flex-col items-center relative justify-center py-8 px-2 sm:py-40 bg-[url(/assets/images/hero/hero_image.png)] bg-cover bg-center"> 
      {/* overlay */}
      <div className="bg-slate-900/50 z-1 w-full h-full absolute">
      </div>
      
      {/* hero text */}
       <div className="flex flex-col items-center gap-2.5 z-10">
         <h1 className="text-white text-2xl sm:text-5xl text-center">Welcome to Our Coconut <br /> Plantation</h1>
        <p className="text-slate-100 text-lg sm:text-xl text-center">Explore our range of high-quality coconut products</p>
        <Link href="/products" className="bg-lime-400/40 text-white px-4 py-2 rounded-lg mt-4 w-max">Shop Now</Link>
       </div>
      </div>

      {/* products */}
      <div className="w-full flex max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:mt-4 justify-center gap-6 sm:-mt-10 px-2 md:px-20">
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
        
      </div>
    </div>

    
  );
}

