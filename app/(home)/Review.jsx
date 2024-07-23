import React from "react";
import Image from "next/image";

export default function Review() {
  return (
    <div>
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
        <button className="mt-8 px-6 py-2 bg-green-500 text-black rounded-lg">
          More
        </button>
      </section>
    </div>
  );
}
