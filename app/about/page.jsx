"use client"

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function About() {
    const products = [
      {
        id: 1,
        tag: "Popular",
        image: "/assets/images/coco1.png",
        name: "King Coconut",
        price: "$100.00",
      },
      {
        id: 2,
        tag: "Best Selling",
        image: "/assets/images/coco2.jpg",
        name: "Indonesia Coconut",
        price: "$150.00",
      },
      {
        id: 3,
        tag: "New",
        image: "/assets/images/coco3.jpg",
        name: "Dwarf Coconut",
        price: "$200.00",
      },
    ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}

      <div className="w-full flex flex-col items-center relative justify-center py-8 px-2 sm:py-40 bg-[url(/assets/images/hero/hero_image.png)] bg-cover bg-center">
        {/* overlay */}
        <div className="bg-slate-900/50 z-1 w-full h-full absolute"></div>

        {/* hero text */}
        <div className="flex flex-col items-center gap-2.5 z-10">
          <h2 className="text-xl  text-white font-bold">Home / About Us</h2>
          <button className="bg-lime-400/40 text-white px-4 py-2 rounded-lg mt-4 w-1/3">
            Shop Now
          </button>
        </div>
      </div>

      <div className="w-full flex max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:mt-4 justify-center gap-6 sm:-mt-10 px-2 md:px-20">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>

      {/* About Us Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          Learn about our journey in{" "}
          <span className="text-green-700">Coconut Plantation</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 p-4">
            <p className="text-lg mb-4">
              Lorem ipsum dolor sitamet consectetur. Nisi dolor quisque rhoncus
              habitasse ultrices tempor sagittis elit fermentum. Imperdiet arcu
              rhoncus metus tellus mattis gravida mattis quis. Tempus accumsan
              malesuada dui condimentum neque posuere vitae ultricies lacinia.
              Enim posuere mattis lacus vestibulum ac facilisis tempus nunc.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <Image
              src="/path-to-your-farmer-image.jpg"
              width={400}
              height={500}
              alt="Farmer"
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
        <p className="mb-8">See what our customers are saying</p>
        <div className="flex justify-center items-center space-x-8">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="font-semibold">Alice</p>
            <p>★★★★★</p>
            <p>Excellent quality and taste!</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="font-semibold">Bob</p>
            <p>★★★★★</p>
            <p>Love the variety of coconut products here</p>
          </div>
        </div>
        <button className="mt-8 px-6 py-2 bg-green-500 text-white rounded-lg">
          More
        </button>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-4 bg-gray-800 text-white">
        <p>© J.E Farm. All rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
