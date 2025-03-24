"use client";

import { Phone, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLinks = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`absolute h-[1px] bg-black left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        } `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

function Navbar() {
  return (
    <header className="flex items-center justify-between px-16 py-8">
      <Link href="/" className="text-3xl uppercase font-semibold">
        <p>
          Reci<span className="text-yellow-400">pedia</span>
        </p>
      </Link>

      <nav className="flex gap-12 text-lg">
        <CustomLinks title="Home" href="/" className="mr-4" />
        <CustomLinks title="Recipes" href="/recipes" className="mx-4" />
        <CustomLinks title="About" href="/about" className="mx-4" />
        <CustomLinks title="Contact" href="/contact" className="ml-4" />
      </nav>

      <div className="flex items-center justify-center gap-4">
        <button className=" flex items-center justify-center h-8 w-8 bg-gray-100 rounded-full cursor-pointer">
          <Search />
        </button>
        <button className=" flex items-center justify-center h-10 w-10 text-white bg-black rounded-full cursor-pointer">
          <Phone />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
