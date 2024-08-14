"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"

export default function page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full flex flex-col items-center relative justify-center py-8 px-2 sm:py-40 bg-[url(/assets/images/hero/hero_image.png)] bg-cover bg-center">
        {/* overlay */}
        <div className="bg-slate-900/50 z-1 w-full h-full absolute"></div>

        {/* hero text */}
        <div className="flex flex-col items-center gap-2.5 z-10">
          <h2 className="text-xl  text-white font-italics">Home / Services</h2>
          <Link href="/products" className="bg-lime-400/40 text-white px-4 py-2 rounded-lg mt-4 w-max">Shop Now</Link>

        </div>
      </div>

      <main className="container mx-auto p-4">
        <section className="py-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Je Farms is an online retailer specializing in the sale of fresh coconuts. They offer a convenient and reliable service for customers looking to purchase high-quality coconuts without the hassle of visiting a physical store. Je Farms sources their coconuts from sustainable farms, ensuring that each nut is harvested at the peak of ripeness and freshness. Their online platform allows customers to easily browse and select the coconuts they desire, with options for whole coconuts, coconut water, and coconut meat. Je Farms takes pride in their commitment to customer satisfaction, offering prompt delivery and a satisfaction guarantee on all orders. By providing a seamless online shopping experience for coconut enthusiasts, Je Farms has become a trusted name in the world of coconut e-commerce.
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
    </div>
  );
}
