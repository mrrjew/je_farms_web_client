import React from "react";

export default function Story() {
  return (
    <div className="min-h-screen bg-white my-16 text-gray-800">
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


        <div className="flex justify-center my-10 items-center space-x-8">
            <img
              src="/assets/images/side2.png"
              alt="arrow"
              className="w-20 h-auto object-cover"
            />
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2">Our Mission</h2>
            <p>To provide organic and nourishing coconut products</p>
          </div>

          <img
            src="/assets/images/side.png"
            alt="arrow"
            className="w-20 h-auto object-cover"
          />
          
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2">Farm To Table</h2>
            <p>From our plantation to your doorstep</p>
          </div>
        </div>
      </section>
    </div>
  );
}
