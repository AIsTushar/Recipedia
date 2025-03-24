"use client";

import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";
import Image from "next/image";

function Card() {
  return (
    <div className="relative cursor-pointer bg-gray-50 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 h-[600px]">
      <div className="absolute inset-0 top-36 left-6 right-6  bottom-24 rounded-xl overflow-hidden transition-all duration-300 group-hover:top-0 group-hover:left-0 group-hover:right-0 group-hover:w-full group-hover:h-full">
        <Image src="/card.png" alt="card" className="object-cover" fill />
      </div>

      <div className="relative z-10 h-full w-full p-6 flex flex-col gap-4 bg-opacity-40">
        <h3 className="text-[40px] leading-[1.2] font-semibold text-black group-hover:text-white">
          Quinoa & Chickpea Buddha
        </h3>

        <p className="text-white text-xl text-semibold hidden group-hover:block">
          Colourful medley of nutritious and colourful components
        </p>

        <div className="flex gap-2 flex-wrap opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 mt-auto">
          <div className="bg-white text-gray-600 text-xl py-2 px-4 rounded-full">
            Vegetarian
          </div>
          <div className="bg-white text-gray-600 text-xl py-2 px-4 rounded-full">
            Healthy
          </div>
          <div className="bg-white text-gray-600 text-xl py-2 px-4 rounded-full">
            Salads & Sides
          </div>
        </div>

        <button className="cursor-pointer flex items-center justify-between bg-black py-3 px-4 rounded-3xl text-white transition-all duration-300 mt-4">
          <span className="transition-all duration-300">See More Recipes</span>
          <ChefHat className="bg-white text-black stroke-[1px] rounded-full group-hover:bg-[#FFA319] group-hover:text-white p-[2px]" />
        </button>
      </div>
    </div>
  );
}

export default Card;
