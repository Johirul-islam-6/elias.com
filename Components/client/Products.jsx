"use client";
import { ReviewsClient } from "./clientSlider/ReviewsClient";
import "./Products.css";
import ProductSlider from "./ProductSlider";

const Products = () => {
  return (
    <>
      {/* -------------------- market place ----------- */}
      <div className="mt-[10px] ">
        <h3 className="text-[36px] font-[600] text-center text-[#fff] pt-20">
          My Marken Place
        </h3>
        <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#EE6A50] h-1"></div>
        <div className="pt-20">
          <ProductSlider />
        </div>
      </div>
      <div className="flex justify-between absolute">
        <div className="gradient-rounded-div-left left-[0px] background_color_animation"></div>
        <div className="gradient-rounded-div-right right-[0px] background_color_animation "></div>
      </div>
      <div className="mt-[30px] ">
        <h3 className="text-[36px] font-[600] text-center text-[#fff] pt-20">
          Testimonials
        </h3>
        <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#EE6A50] h-1"></div>

        <div className="pb-20">
          <ReviewsClient />
        </div>
      </div>
    </>
  );
};

export default Products;
