"use client";
import React from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default function page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full flex flex-col items-center relative justify-center py-8 px-2 sm:py-40 bg-[url(/assets/images/hero/hero_image.png)] bg-cover bg-center">
        {/* overlay */}
        <div className="bg-slate-900/50 z-1 w-full h-full absolute"></div>

        {/* hero text */}
        <div className="flex flex-col items-center gap-2.5 z-10">
          <h2 className="text-xl  text-white font-bold">Services</h2>
          <button className="bg-lime-400/40 text-white px-4 py-2 rounded-lg mt-4 w-1/3">
            Shop Now
          </button>
        </div>
      </div>

      <main className="container mx-auto p-4">
        <section className="py-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Aliquet a vulputate ut et
              euismod. Eu condimentum et dui id turpis. Lectus commodo leo ut in
              sed fermentum pellentesque ac. Imperdiet quisque et hendrerit non
              feugiat luctus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/assets/images/c1.png"
                alt="Coconut Seedlings"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-bold">
                Sale of Coconut Seedlings
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/assets/images/c2.png"
                alt="Training Services"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-bold">Training Services</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/assets/images/c3.png"
                alt="Coconut Oil"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-bold">Sale of Coconut Oil</h3>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-center text-3xl font-bold mb-8">
            Customer Reviews
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex items-center space-x-4">
                <Image
                  src="/assets/images/c4.png"
                  alt="Alice"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">Alice</h3>
                  <p className="text-yellow-500">★★★★★</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">Excellent quality and taste!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex items-center space-x-4">
                <Image
                  src="/assets/images/c5.png"
                  alt="Bob"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">Bob</h3>
                  <p className="text-yellow-500">★★★★★</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Love the variety of coconut products here
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; J.E Farm. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <a href="/terms" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
