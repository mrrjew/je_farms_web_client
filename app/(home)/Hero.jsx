
"use client"
import ProductCard from "@/components/ProductCard";

export default function Hero() {
  const products = [
    {
      id:1,
      tag:"Popular",
      image:"/assets/images/coco1.png",
      name:"King Coconut",
      price:"$100.00",
    },
    {
      id:2,
      tag:"Best Selling",
      image:"/assets/images/coco2.jpg",
      name:"Indonesia Coconut",
      price:"$150.00",
    },
    {
      id:3,
      tag:"New",
      image:"/assets/images/coco3.jpg",
      name:"Dwarf Coconut",
      price:"$200.00",
    }
  ]


  return (
    <div>
      <div className="w-full flex flex-col items-center relative justify-center py-8 px-2 sm:py-40 bg-[url(/assets/images/hero/hero_image.png)] bg-cover bg-center"> 
      {/* overlay */}
      <div className="bg-slate-900/50 z-1 w-full h-full absolute">
      </div>
      
      {/* hero text */}
       <div className="flex flex-col items-center gap-2.5 z-10">
         <h1 className="text-white text-2xl sm:text-5xl text-center">Welcome to Our Coconut <br /> Plantation</h1>
        <p className="text-slate-100 text-lg sm:text-xl text-center">Explore our range of high-quality coconut products</p>
        <button className="bg-lime-400/40 text-white px-4 py-2 rounded-lg mt-4 w-1/3">Shop Now</button>
       </div>
      </div>

      {/* products */}
      <div className="w-full flex max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:mt-4 justify-center gap-6 sm:-mt-10 px-2 md:px-20">
        {
          products.map((product) => (
            <ProductCard product={product}/>
          ))
        }
        
      </div>
    </div>

    
  );
}

