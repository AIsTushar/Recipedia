import About from "@/components/Home/About";
import FeaturedRecipe from "@/components/Home/FeaturedRecipe";
import Hero from "@/components/Home/Hero";
import PopularRecipes from "@/components/Home/PopularRecipes";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedRecipe />
      <PopularRecipes />
      <About />
    </div>
  );
}
