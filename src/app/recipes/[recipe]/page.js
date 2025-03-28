import Info from "@/components/Card/info";
import Step from "@/components/Card/Step";
import { ChefHat, Clock, Globe, MoveRight, Star, User } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div className="px-16">
      {/* Hero */}
      <div
        className="h-[65vh] rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: "url('/recipe_details.png')" }}
      >
        <div className="flex h-full w-1/2 flex-col justify-end gap-4 px-16 pb-16">
          <p className="text-xl text-gray-500">Let’s Cook</p>
          <h1 className="text-7xl font-semibold">Caprese Salad Skewers</h1>
        </div>
      </div>

      {/* Short Info */}
      <div className="flex w-full items-center justify-between py-12">
        <Info icon={Globe} title="Cuisine" text="Mexican Food" />
        <Info icon={User} title="Servings" text="4 Persons" />
        <Info icon={Clock} title="Prep Time" text="15 Minutes" />
        <Info icon={ChefHat} title="Cook Time" text="10 Minutes" />
        <Info icon={Star} title="Difficulty" text="Intermediate" />
      </div>

      {/* Main Content */}
      <div className="mt-6 flex gap-8">
        {/* left */}
        <div className="w-3/4">
          <p className="mb-16 text-xl leading-relaxed tracking-[1px] text-gray-500">
            Our Spicy Beef Mexican Tacos are a celebration of bold and vibrant
            flavors. The star of this dish is the succulent ground beef, cooked
            to perfection with a blend of aromatic spices, including cumin,
            paprika, garlic, and a touch of cayenne pepper for that extra kick.
            This savory beef filling is then generously spooned into warm, soft
            corn tortillas.
          </p>
          {/* Tags */}
          <div className="flex flex-col gap-4">
            <p>Tags:</p>
            <div className="flex gap-4 text-[#FFA319]">
              <span>Spicy</span> <span>Vegetarian</span> <span>Healthy</span>{" "}
              <span>Tacos</span>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mt-16 w-full rounded-3xl px-12 py-12 shadow-md">
            <h2 className="text-3xl font-semibold">Ingredients</h2>
            <div className="mt-8 text-xl text-gray-500">
              <div className="flex justify-between">
                <p>1 lb ground beef 70-80% lean</p>
                <p>1 cup shredded lettuce</p>
              </div>
              <div className="flex justify-between">
                <p>2 tbsp olive oil</p>
                <p>1 cup diced tomatoes</p>
              </div>
              <div className="flex justify-between">
                <p>1 tsp smoked paprika</p>
                <p>1/2 cup chopped red onion</p>
              </div>
              <div className="flex justify-between">
                <p>1 tsp cumin 1/2 tsp cayenne pepper</p>
                <p>1/4 cup chopped fresh cilantro</p>
              </div>
              <div className="flex justify-between">
                <p>Salt and pepper to taste</p>
                <p>1 avocado, sliced</p>
              </div>
              <div className="flex justify-between">
                <p>8 small flour tortillas</p>
                <p>Lime wedges for serving</p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-16">
            <h2 className="mb-10 text-5xl font-semibold">
              Cooking <span className="text-[#FFA319]">Instructions</span>
            </h2>

            <div className="flex flex-col gap-4">
              <Step
                number={1}
                text="In a clean bowl, toss the ground beef with spices olive oil, smoked paprika, cumin, cayenne pepper, salt, and pepper."
              />
              <Step
                number={2}
                text="Heat a skillet over medium-high heat. Add the seasoned ground beef and cook for 2-3 minutes per side until opaque."
              />
              <Step
                number={3}
                text="Warm the prepared flour tortillas in a dry pan or microwave. Make sure to heaten the microwave in 180 degrees for 2 minutes."
              />
              <Step
                number={4}
                text="In a clean bowl, toss the ground beef with spices olive oil, smoked paprika, cumin, cayenne pepper, salt, and pepper."
              />
              <Step
                number={5}
                text="In a clean bowl, toss the ground beef with spices olive oil, smoked paprika, cumin, cayenne pepper, salt, and pepper."
              />
              <Step
                number={6}
                text="In a clean bowl, toss the ground beef with spices olive oil, smoked paprika, cumin, cayenne pepper, salt, and pepper."
              />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-1/4">
          {/*  */}
          <div
            className="flex h-[90vh] w-full flex-col justify-between rounded-3xl bg-cover bg-center bg-no-repeat p-6"
            style={{ backgroundImage: "url('/letscook.png')" }}
          >
            <p className="self-end text-3xl font-semibold text-white uppercase">
              Reci<span className="text-yellow-400">pedia</span>
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-4xl font-semibold text-gray-50">
                Let’s Get <br /> into Cooking!
              </p>
              <Link
                href="/recipes"
                className="group flex w-full cursor-pointer items-center justify-center gap-4 rounded-3xl bg-black px-8 py-3 text-white transition-all duration-300"
              >
                <span className="transition-all duration-300 group-hover:-translate-x-1">
                  See All Recipes
                </span>
                <ChefHat className="h-7 w-7 rounded-full bg-white stroke-[.75px] p-1 text-black group-hover:bg-[#FFA319] hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
