import React from "react";
import "./TotalWork.css";
export const TotalWork = () => {
  return (
    <>
      <div>
        <h3 className="text-[36px] font-[600] text-center text-[#fff] pt-20">
          Testimonials
        </h3>
        <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#EE6A50] h-1"></div>
        <div className="mt-[60px]  totalwork-container hight-total md:px-10">
          <div className=" ">
            <div className=" hight-total grid-cols-3 grid md:grid-cols-4 justify-center py-[20px] gap-5 items-center">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#F26C4F] text-[50px] font-[600]">42</h1>
                <h1 className="text-[#f5f5f5] text-[18px] font-[500] text-center">
                  Client
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#F26C4F] text-[50px] font-[600]">68</h1>
                <h1 className="text-[#f5f5f5] text-[18px] font-[500] text-center">
                  Projects
                </h1>
              </div>
              <div className="display-none flex flex-col justify-center items-center">
                <h1 className="text-[#F26C4F] text-[50px] font-[600]">17</h1>
                <h1 className="text-[#f5f5f5] text-[18px] font-[500] text-center">
                  Awards
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#F26C4F] text-[50px] font-[600]">5</h1>
                <h1 className="text-[#f5f5f5] text-[18px] font-[500] text-center">
                  Years Experience
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
