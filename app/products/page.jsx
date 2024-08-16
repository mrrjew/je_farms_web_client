
"use client"
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/redux/product/product.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function Page() {

  const dispatch = useDispatch()
  const {items:products,status} = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(getProducts())
    console.log(products,status)
  },[dispatch,products])

  return(
    <>
      <div className="p-4 w-full flex flex-col space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore our Products</h1>

      <div className="w-full">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  type="search"
                  placeholder="Search"
                  className="block w-full shadow-sm rounded-md border-0 bg-slate-50/50 py-2.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                />
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
    </>
  )

}