import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Card.css";
export const Card = () => {
  return (
    <>
      <div>
        {/* <!-- This is an example component --> */}
        <div class="max-w-2xl mx-auto">
          <div class="project-card shadow-md   rounded-lg max-w-sm bg-[#020312da] dark:border-gray-700">
            <a href="#">
              <Image
                width={800}
                height={500}
                class="rounded-[10px] p-[5px] card-imgae"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="card-title text-gray-900 font-bold text-[18px] tracking-tight mb-2 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className="flex justify-between items-center">
                <p>1k view</p>
                <Link
                  href="/project/1"
                  class="text-white  bg-[#F26C4F] focus:ring-4 focus:ring-blue-300 font-medium rounded-sm  text-sm px-3 py-2 text-center inline-flex items-center "
                >
                  Details
                  <svg
                    class="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
