import { ChefHat, Plus } from "lucide-react";

function About() {
  return (
    <div className="px-16 overflow-hidden mt-36">
      <div className="relative rounded-3xl h-[75vh] overflow-hidden">
        {/* Background image container */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cta.png')" }}
        ></div>

        {/* Blur effect overlay - sits above background but below content */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-[#FFA319] opacity-60 blur-xl rounded-b-3xl"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
            }}
          ></div>
        </div>

        {/* Content container - all interactive elements go here */}
        <div className="relative z-10 flex justify-between h-full w-full">
          <div className="flex flex-col px-8 justify-end h-full pb-12">
            <h2 className="text-7xl font-semibold">
              Let&apos;s Get <br /> Into Cooking!
            </h2>
          </div>

          <div className="flex flex-col justify-between pr-6 py-12">
            <div className="bg-white/75 px-6 py-4 rounded-3xl flex gap-6">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">Join Our Community</h3>
                <p className="text-gray-400">1,000+ Members</p>
              </div>
              <div className="flex flex-col items-center justify-center cursor-pointer hover:bg-black w-8 h-8 rounded-full bg-[#FFA319]">
                <Plus className="stroke-[1px] text-white" />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-black w-fit text-white rounded-full">
                Explore Recipes
                <ChefHat className="w-7 h-7 bg-white text-black stroke-[.75px] hover:bg-[#FFA319] hover:text-white p-1 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
