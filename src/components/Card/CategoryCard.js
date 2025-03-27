import Image from "next/image";

function CategoryCard() {
  return (
    <div className="flex w-fit cursor-pointer items-center gap-3 rounded-full bg-gray-200 px-5 py-2 hover:bg-black hover:text-white">
      <Image
        src="https://www.themealdb.com/images/category/beef.png"
        alt="category image"
        height={24}
        width={24}
      />
      <p>Beef</p>
    </div>
  );
}

export default CategoryCard;
