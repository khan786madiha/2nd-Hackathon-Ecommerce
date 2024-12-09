import React from "react";

// import BentoLayout from "@/components/home/Bento";
import Browse from "@/components/home/Browse";
import Hero from "@/components/home/Hero";
import Carousel from "@/components/home/Carousel";
import BentoLayout from "@/components/home/Bento";
import ProductCard from "@/components/home/Product";



export default function Home() {
  return (
    <main>
     <Hero />
      <Browse />
      <ProductCard />
      <Carousel />
      <BentoLayout/>
     
    </main>
  );
}