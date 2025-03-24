import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="px-16 mt-26">
      <div className="rounded-lg bg-white shadow-sm dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="text-3xl uppercase font-semibold">
              <p className="text-white">
                Reci<span className="text-yellow-400">pedia</span>
              </p>
            </Link>

            <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Recipedia™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
