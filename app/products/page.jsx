"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/redux/product/product.slice";
import { useDispatch, useSelector } from "react-redux";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter } from "next/navigation";

export default function Page() {
  const dispatch = useDispatch();
  const { items: rawProducts, status } = useSelector((state) => state.product);
  const pathname = usePathname();
  const router = useRouter();
  
  const [searchTerm, setSearchTerm] = useState("");
  
  // Extract query parameters from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const search = queryParams.get("search") || "";
    setSearchTerm(search);
    // Fetch products when component mounts
    dispatch(getProducts());
  }, [dispatch]);

  // Filter products based on search term
  const products = rawProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Update URL query parameters
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("search", value);
    router.push(`${pathname}?${queryParams.toString()}`);
  };

  return (
    <>
      <div className="p-4 w-full flex flex-col space-y-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Explore our Products
        </h1>

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
              value={searchTerm}
              onChange={handleChange}
              className="block w-full shadow-sm rounded-md border-0 bg-slate-50/50 py-2.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Products */}
        <div className="w-full flex max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:mt-4 justify-center gap-6 sm:-mt-10 px-2 md:px-20">
          {status === "loading" ? (
            <h2 className="py-6xl text-3xl">Loading...</h2>
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h2 className="py-20 text-3xl">
              Can{"\'"}t find search {"\'"}{`${searchTerm}`}{"\'"}
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
