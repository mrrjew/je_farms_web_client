import React from "react";
import Image from "next/image";

export default function Review() {
  return (
    <div>
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
    </div>
  );
}
