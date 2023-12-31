"use client";
import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Link from "next/link";
import "./Layout.css";
import profile from "@/app/assets/elias.jpg";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-[#fff]   transition ease transform duration-300`;

  // navbar scrilling

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight / 6) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="">
        <navbar
          className={`${
            isFixed ? "fixed scrolled" : ""
          } w-[100%] z-[10000000] fixed top-[-9px] flex justify-between py-[2px] mx-auto`}
        >
          <ul className="max-w-screen-xl mx-auto navbar flex justify-between py-[2px] relative z-[100000]">
            {/* <!-- logo --> */}
            <Link
              href="/"
              className="flex items-center profile p-1  mt-[5px] md:ms-2 "
            >
              <div className="logo-bg flex items-center font-bold text-2xl text-amber-500">
                <Image
                  width={40}
                  height={40}
                  className=" rounded-[50%] "
                  src={profile}
                  alt=""
                />
                {/* <span className="text-amber-700 mt-5 absolute ml-[55px] md:ml-[45px] text-[16px] md:text-[22px] ">
                  portfolio
                </span> */}
              </div>
            </Link>
            {/* <!-- navigation content menu --> */}
            <nav className="nav font-semibold text-lg hidden lg:block">
              <ul className="flex items-center">
                <li className="px-4  duration-200 cursor-pointer  active">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="px-4  duration-200 cursor-pointer ">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="#services"
                  >
                    Services
                  </Link>
                </li>
                <li className="px-4  duration-200 cursor-pointer ">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="#project"
                  >
                    project
                  </Link>
                </li>
                <li className="px-4  duration-200 cursor-pointer ">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="#about"
                  >
                    About
                  </Link>
                </li>
                <li className="px-4  duration-200 cursor-pointer ">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="#reviews"
                  >
                    Reviews
                  </Link>
                </li>

                <li className="px-4  duration-200 cursor-pointer ">
                  <Link
                    className="hover-menu logo-font text-[15px] font-[600] uppercase"
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* ----------------- only small and mid size Display start --------------- */}

            <div className="drawer py-2 lg:hidden  justify-end ">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content ">
                {/* Page content here */}
                <label
                  onClick={() => setIsOpen(!isOpen)}
                  htmlFor="my-drawer"
                  className="z-[1000]"
                >
                  <div
                    className="flex flex-col h-9 w-12 py-[3px] rounded justify-center items-center group "
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div
                      className={`${genericHamburgerLine} ${
                        isOpen
                          ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                          : "opacity-50 group-hover:opacity-100"
                      }`}
                    />
                    <div
                      className={`${genericHamburgerLine} ${
                        isOpen
                          ? "opacity-0"
                          : "opacity-50 group-hover:opacity-100"
                      }`}
                    />
                    <div
                      className={`${genericHamburgerLine} ${
                        isOpen
                          ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                          : "opacity-50 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </label>
              </div>
              <div className="drawer-side ">
                <label
                  onClick={() => setIsOpen(false)}
                  htmlFor="my-drawer"
                  className="drawer-overlay"
                ></label>

                <ul className="menu px-4 w-80 min-h-full  text-base-content bg-[#020312] pt-10">
                  <div className="flex justify-between ">
                    <h1 className="text-white text-[18px] text-[600]">
                      Elias Protfolio
                    </h1>

                    <label
                      onClick={() => setIsOpen(false)}
                      htmlFor="my-drawer"
                      className="z-[10]"
                    >
                      <div className="flex flex-col h-9 w-12 rounded justify-center items-center group">
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </label>
                  </div>

                  {/* Sidebar content here */}
                  <ul className="flex flex-col  items-start justify-start ">
                    <li className="px-4  duration-200 cursor-pointer  active mt-5">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="px-4  duration-200 cursor-pointer ">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="#services"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="px-4  duration-200 cursor-pointer ">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="#project"
                      >
                        project
                      </Link>
                    </li>
                    <li className="px-4  duration-200 cursor-pointer ">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="#about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="px-4  duration-200 cursor-pointer ">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="#reviews"
                      >
                        Reviews
                      </Link>
                    </li>

                    <li className="px-4  duration-200 cursor-pointer ">
                      <Link
                        className="hover-menu logo-font text-[15px] font-[600] uppercase"
                        href="#contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </ul>
          {/* ----------------- only small and mid size Display end --------------- */}
        </navbar>
      </div>
    </>
  );
};
