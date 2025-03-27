import { MoveRight } from "lucide-react";
import Card from "../Card/Card";
import Link from "next/link";

function PopularRecipes() {
  return (
    <div className="px-16 mt-24">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-6xl font-semibold">
          Popular <span className="text-[#FFA319]">Recipes</span> Today
        </h2>
        <Link
          href="/recipes"
          className=" cursor-pointer flex items-center bg-black py-3 px-8 rounded-3xl text-white transition-all duration-300 group"
        >
          <span className="transition-all duration-300 group-hover:-translate-x-2">
            See More Recipes
          </span>
          <MoveRight
            size={16}
            className="stroke-[2px] text-[#FFA319] opacity-0 transition-all duration-300 group-hover:opacity-100"
          />
        </Link>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-3 gap-12 mt-12">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default PopularRecipes;
