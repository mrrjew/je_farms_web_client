"use client";
/*import React from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default function page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto p-4">
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/assets/images/m1.png"
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
                src="/assets/images/m2.png"
                alt="Training Services"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <h3 className="mt-4 text-xl font-bold">Training Services</h3>
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
                  alt="Kwaku Manu"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">Alice</h3>

                  <p className="text-yellow-500">
                    ★★★★★
                    <p className="mt-4 text-gray-600">
                      Excellent Quality and Taste
                    </p>
                  </p>
                </div>
              </div>
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
*/

import Image from "next/image";
import React from "react";
import Review from "../(home)/Review";

export default function Team() {
  return (
    <div className="bg-white text-gray-900">
      <header className="bg-green-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">J.E Farm</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Meet Our Team</h1>

<section>
          <h2 className="text-3xl text-center mb-20 font-semibold justify-center ">
            Planting Team
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <Image
                src="/assets/images/m1 (1).jpg"
                alt="Kofi Manu"
                width={300}
                height={300}
                className="mx-auto"
              />
              <p>Kofi Manu</p>
            </div>
            <div className="text-center">
              <Image
                src="/assets/images/m1 (2).jpg"
                alt="Kwadjo Nkansah"
                width={300}
                height={300}
                className="mx-auto"
              />
              <p>Kwadjo Nkansah</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-2xl text-center mb-20 font-semibold">
            Harvesting Team
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Image
                src="/assets/images/m1 (3).jpg"
                alt="Minty Ama"
                width={300}
                height={300}
                className="mx-auto"
              />
              <p>Minty Ama</p>
            </div>
            <div className="text-center">
              <Image
                src="/assets/images/m1 (4).jpg"
                alt="Sister Akos"
                width={300}
                height={300}
                className="mx-auto"
              />
              <p>Sister Akos</p>
            </div>
            <div className="text-center">
              <Image
                src="/assets/images/m1 (1).jpg"
                alt="Mai Araba"
                width={300}
                height={300}
                className="mx-auto"
              />
              <p>Mai Araba</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-2xl text-center mb-20 font-semibold">
            Transport Team
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="text-center">
              <Image
                src="/assets/images/m1 (6).jpg"
                alt="Minty Ama"
                width={300}
                height={300}
                className="mx-auto"
              />
              <p>Minty Ama</p>
            </div>
          </div>
        </section>

        <Review />
      </main>
    </div>
  );
}
