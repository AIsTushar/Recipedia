import { ChefHat, Clock, MoveRight } from "lucide-react";

function FeaturedRecipe() {
  return (
    <div className="px-16 overflow-hidden mt-36">
      <div
        className="relative bg-cover bg-center bg-no-repeat rounded-3xl h-[90vh] flex items-center justify-end"
        style={{ backgroundImage: "url('/featured.png')" }}
      >
        <div className="flex flex-col gap-36 px-16 pt-36 pb-2 w-2/3">
          <div className="flex flex-col gap-4">
            <h2 className="text-7xl font-semibold">Spicy Beef Mexican Tacos</h2>
            <p className="text-2xl text-gray-500">
              This mouthwatering dish combines juicy, seasoned beef with the
              vibrant flavors of traditional Mexican cuisine.
            </p>
          </div>
          <div className="flex gap-12">
            <span className="flex items-center gap-2">
              <Clock className="text-white bg-black rounded-full" /> 15 minutes
            </span>
            <span className="flex items-center gap-2">
              <ChefHat className="text-white bg-black rounded-full" /> Chef
              Maria Rodriguez
            </span>
          </div>
        </div>
        <button className="absolute cursor-pointer flex items-center top-10 right-10 bg-black py-3 px-8 rounded-3xl text-white transition-all duration-300 group">
          <span className="transition-all duration-300 group-hover:-translate-x-2">
            See Details
          </span>
          <MoveRight
            size={16}
            className="stroke-[2px] text-[#FFA319] opacity-0 transition-all duration-300 group-hover:opacity-100"
          />
        </button>
      </div>
    </div>
  );
}

export default FeaturedRecipe;
