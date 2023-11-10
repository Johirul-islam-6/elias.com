import "./Services.css";
import { ServicesCard } from "./ServicesCard";

export const Services = () => {
  return (
    <>
      <div id="services" className="Services pt-[100px] ">
        <div className="block px-3 md:ps-[40px]  ">
          <h1 className="text-[36px] font-[600] text-center text-[#fff]">
            My Services
          </h1>
          <div className="divider w-[150px] mx-auto my-1 mt-4 bg-[#EE6A50] h-1"></div>

          <div
            id="services"
            className="all-services grid md:grid-cols-3  grid-cols-2 gap-x-8 gap-y-5 justify-center items-center mt-[60px]"
          >
            <ServicesCard />
          </div>
        </div>
      </div>
    </>
  );
};
