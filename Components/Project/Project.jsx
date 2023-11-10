import Link from "next/link";
import { Card } from "./Card";

export const Project = () => {
  return (
    <>
      {/* ------------ gradient div------- */}
      <div className="flex justify-between absolute">
        <div className="gradient-rounded-div-left left-[0px] background_color_animation"></div>
        <div className="gradient-rounded-div-right right-[0px] background_color_animation "></div>
      </div>
      <div id="project" className="mt-[160px] md:px-[25px]">
        <h1 className="text-[36px] font-[600] text-center text-[#fff] ">
          My Project
        </h1>
        <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#EE6A50] h-1"></div>

        <div className="flex justify-center flex-wrap md:flex-row items-center gap-y-16  gap-5 relative z-50 pt-20">
          <Card />
          <Card />
          <Card />
        </div>

        <div className="flex mt-[50px] justify-center items-center">
          <Link href="/project">
            <button className=" py-4 px-8 bg-[#F26C4F] font-[600] rounded-md">
              More project..
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
