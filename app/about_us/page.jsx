"use client"

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Review from '@/app/(home)/Review'

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
          <h2 className="text-xl  text-white font-italics">Home / About Us</h2>
          <button className="bg-lime-400/40 text-white px-4 py-2 rounded-lg mt-4">
            Shop Now
          </button>
        </div>
      </div>

      <div className="w-full flex max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:mt-4 justify-center gap-6 sm:-mt-10 px-2 md:px-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* About Us Section */}
      <section className="container mx-auto my-10 py-12 w-full sm:w-[50%] flex max-lg:flex-col items-center">
        <div>
        <h2 className="text-4xl font-bold text-left mb-2">
          Learn about our journey in{" "}<br />
          <span className="text-lime-600">Coconut Plantation</span>
        </h2>
        <div className="flex flex-col">
          <div className="p-4">
          <p className="text-lg mb-4 w-full sm:w-2/3">
      At JE Farms, our journey in coconut plantation began with a passion for sustainable farming and a commitment to quality. Over the years, we have cultivated a rich heritage of coconut farming, embracing traditional methods while integrating modern agricultural practices. Our plantations are located in fertile regions, where the climate and soil conditions are ideal for growing premium coconuts.

    </p>
          </div>
        </div>
        </div>
          <div className="w-full h-80 p-1 relative ">
          <div className="absolute w-full h-40 bottom-0 mx-auto bg-[#04BAD4]/20"></div>
            <Image
              src="/assets/images/man.png"
              layout="fill"
              objectFit="cover"
              alt="Farmer"
              className=""
            />
          </div>
        
      </section>

      {/* Customer Reviews Section */}
      <Review/>
    </div>
  );
}
