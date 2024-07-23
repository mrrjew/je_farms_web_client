import React from "react";
import Hero from "./(home)/Hero";
import Story from "./(home)/Story";
import Benfits from "./(home)/Benefits";
import Reviews from "./(home)/Review";
import Bottom from "./(home)/Bottom";


export default function page() {
  return (
    <div>
      <Hero />
      <Story />
      <Benfits />
      <Reviews />
      <Bottom />
     
    </div>
  );
}
