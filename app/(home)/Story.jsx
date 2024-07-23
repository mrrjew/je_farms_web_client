import React from "react";

export default function Story() {
  return (
    <div className="min-h-screen bg-white mt-16 -mb-40 text-gray-800">
      <section className="text-center py-12">
        <div className="flex items-center justify-between w-[60%] mx-auto">
          <div>
            <h1 className="text-4xl font-bold mb-4">Our Plantation Story</h1>
            <p className="mbr-10">
              Learn about our sustainable farming practices
            </p>
          </div>

          <img
            src="/assets/images/co.png"
            alt="hero image"
            className="w-20 h-auto object-cover"
          />
        </div>


        <div className="flex max-sm:flex-col justify-center my-10 items-center sm:space-x-8">
            <div className="flex border-[0.1px] rounded-md ring-inset p-2 max-sm:w-full">
            <img
              src="/assets/images/side2.png"
              alt="arrow"
              className="w-20 h-auto object-cover"
            />
            <div className="p-4 text-left text-sm text-gray-700/70">
              <h2 className="">Our Mission</h2>
              <p>To provide organic and nourishing coconut products</p>
            </div>
            </div>

          <div className="flex border-[0.1px] rounded-md ring-inset p-2 max-sm:w-full">
          <img
            src="/assets/images/side.png"
            alt="arrow"
            className="w-20 h-auto object-cover"
          />
          
          <div className="p-4 text-left text-sm text-gray-700/70">
            <h2 className="">Farm To Table</h2>
            <p>From our plantation to your doorstep</p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
