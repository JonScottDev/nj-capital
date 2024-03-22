import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logow.svg";

const Navbar = () => {
  return (
    <header className="absolute w-full z-50">
      <nav className="max-w-screen-xl flex flex-row flex-wrap justify-center items-center my-3 mx-auto lg:items-start text-white">
        <Link href="/">
          <Image
            src={logo}
            width="0"
            height="0"
            alt="n&j capital"
            priority={true}
            style={{ width: "100px", height: "auto" }}
          />
        </Link>
        {/* Hamburger for mobile */}
        {/* <div className="inline-block h-8 mr-3 lg:hidden">
          <button id="nav_toggle" className="h-full w-full">
            <svg
              className="h-full w-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="white"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="40"
                y1="128"
                x2="216"
                y2="128"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <line
                x1="40"
                y1="64"
                x2="216"
                y2="64"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
              <line
                x1="40"
                y1="192"
                x2="216"
                y2="192"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
            </svg>
          </button>
        </div>
        Menu Items
        <div
          id="nav_content"
          className="w-full hidden py-8 lg:flex lg:w-auto lg:py-0 lg:items-center rounded-br-5xl shadow-md lg:shadow-none border-b-2 lg:border-0 border-blue-800 "
        >
          <ul className="flex flex-col lg:pt-1.5 gap-y-4 ml-auto text-lg text-black-400 font-semibold lg:flex-row">
            <li className="mx-6 w-mc hover:text-blue-200">
              <a href="/car-insurance.html">Home</a>
            </li>
            <li className="mx-6 w-mc hover:text-blue-200">
              <a href="/blog.html">Our Company</a>
            </li>
            <li className="mx-6 w-mc hover:text-blue-200">
              <a href="/about.html">Projects</a>
            </li>
            <li className="mx-6 w-mc hover:text-blue-200">
              <a href="/contact.html">Contact Us</a>
            </li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
};
export default Navbar;
