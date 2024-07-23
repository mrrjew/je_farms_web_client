import React from "react";
import Image from "next/image";

export default function () {
  return (
    <div>
      <section className="text-center -mt-80 py-12">
        <h2 className="text-3xl font-bold mb-4">Benefits Of Coconut</h2>
        <p className="mb-8">Discover The Amazing Benefits</p>
        <div className="flex justify-center items-center space-x-8">
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/j1.png"
              width={100}
              height={100}
              alt="Benefit 1"
            />
            <h3 className="font-semibold mt-4">Rich in Nutrients</h3>
            <p>Vitamins and minerals</p>
            <p>Healthy Fats</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/j2.png"
              width={100}
              height={100}
              alt="Benefit 2"
            />
            <h3 className="font-semibold mt-4">Boosts Metabolism</h3>
            <p>Promotes Weight loss</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/j3.png"
              width={100}
              height={100}
              alt="Benefit 3"
            />
            <h3 className="font-semibold mt-4">Anti-inflammatory</h3>
            <p>Promotes overall health</p>
          </div>
        </div>
      </section>
    </div>
  );
}
