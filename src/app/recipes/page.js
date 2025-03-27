import Card from "@/components/Card/Card";
import CategoryCard from "@/components/Card/CategoryCard";
import Image from "next/image";

function page() {
  return (
    <div className="px-16">
      {/* Hero */}
      <div
        className="h-[45vh] rounded-3xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/recipes.png')" }}
      >
        <div className="flex h-full items-center px-16">
          <h1 className="text-6xl font-semibold">
            Explore <br /> <span className="text-[#FFA319]">Culinary</span>{" "}
            Insight
          </h1>
        </div>
      </div>
      {/* categories */}
      <div className="flex h-[35vh] w-full flex-col items-center justify-center">
        <h2 className="py-16 text-center text-4xl font-semibold">
          What <span className="text-[#FFA319]">to</span> Cook?
        </h2>
        <div className="flex w-2/3 flex-wrap items-center justify-center gap-6">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>

      {/* Cards */}
      <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default page;
