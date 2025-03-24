import { ChefHat } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <div className="px-16 overflow-hidden">
      <div
        className="relative bg-cover bg-center bg-no-repeat rounded-3xl h-[75vh]"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="flex flex-col h-full justify-between px-16 py-12">
          <div className="w-1/2 flex flex-col gap-6">
            <h1 className="text-8xl font-semibold">
              Adventure <br />{" "}
              <span className="text-[#FFA319]">of Delicacies</span>
            </h1>
            <p className="text-xl font-lg text-gray-500">
              Unlock a world of variety culinary recipes and unleash your inner
              chef the easy way with Recipedia.
            </p>
          </div>

          <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-black w-fit text-white rounded-full">
            Explore Recipes{" "}
            <ChefHat className="w-7 h-7 bg-white text-black stroke-[.75px] hover:bg-[#FFA319] hover:text-white p-1 rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
