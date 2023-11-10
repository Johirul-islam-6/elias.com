import "./About.css";
import "./Hire.css";
import aboutImage from "../../app/assets/Looking-man.jpg";
import Link from "next/link";
import { FaArrowRight, FaCloudDownloadAlt } from "react-icons/fa";
import Image from "next/image";

export const About = () => {
  return (
    <>
      {/* ------------- about information --------- */}
      <div id="about" className="About mt-[10px] py-[40px] overflow-hidden">
        <div className="block px-3 padding-1000px-in ">
          {/* <h1 className="text-[36px] font-[600] text-center text-[#fff] pb-4">
            About Me
          </h1> */}
          {/* ----------------------- about content ----------------- */}
          <div className="flex md:flex-row relative flex-col justify-start items-center gap-8 xl:gap-16  mt-[100px]">
            <div className="md:w-[45%] h-[100%] w-[80%] mx-auto  flex justify-center items-center">
              <Image
                className="flex-1 2xl:flex-none  object-cover relative md:w-[400px] md:h-[100%]"
                src={aboutImage}
                alt=""
              />
            </div>

            <div className="flex-1 overflow-hidden">
              <div className="flex justify-start about-box">
                <button className=" text-[#FAFAFA] border-4 py-4 px-8 border-white text-[25px] text-[600]">
                  Hi There
                </button>
              </div>
              <br />

              <p className=" text-[#9B9B9B] pt-8 text-[17px] leading-7 font-bolde">
                To work on a job profile which provides an opportunity to
                enhance my skills & knowledge for promoting the organization
                goal and developing my own career. To work under an efficient
                management and being team worker of any reputed organization in
                the track of honesty and always be committed to fulfill my
                responsibilities with self-motivation.
              </p>

              <p className="about-text text-[#9B9B9B] pt-8 text-[17px] leading-7 font-bolde">
                <span className="font-[700]">Education :</span>
                <br />
                ✍️ Junior School Certificate (JSC). My score of 4.86 (A) out of
                5.00
                <br />
                ✍️ Secondary School Certificate (SSC). My score of 5.00 (A+) Out
                of 5.00
                <br />
                ✍️ Diploma Engineering | CGPA |------
                <br />
                1st | 3.65 | | 2nd | 3.47 | | 3rd | 3.46 | | 4th | 3.45 | | 5th
                | 3.49 | | 6th | X.XX | | 7th | X.XX | | 8th | X.XX |
              </p>

              <div className=" mt-[25px] ">
                {/* ---------------- contact information -------- */}
                <div className="flex justify-between flex-wrap gap-3">
                  <div className="block mt-3">
                    <h1 className="text-[#F26C4F] font-extrabold text-[16px]">
                      Name :
                    </h1>
                    <p className="text-white font-bold text-[14px]">
                      Elias Shekh
                    </p>
                  </div>
                  <div className="block mt-3 md:me-20 ">
                    <h1 className="text-[#F26C4F] font-extrabold text-[16px]">
                      Email :
                    </h1>
                    <p className="text-white font-bold text-[14px]">
                      elias@gmail.com
                    </p>
                  </div>
                </div>

                {/* ------------ gradient div------- */}
                <div className="absolute">
                  <div className="gradient-rounded-top right-[0px] background_color_animation"></div>
                </div>
              </div>

              {/* ------------- about button ------------- */}
              <hr className="hr mt-[40px] relative left-[-600px]" />
              <div className="flex flex-wrap justify-start about-box  gap-5 mt-[60px] ">
                <div className="Contact-button flex justify-start  ">
                  <Link
                    href={""}
                    className="btn-epic justify-center items-center "
                    target="_blank"
                  >
                    <div className="hover:border-s-2 border-[#ffffff] ">
                      <span className="flex justify-center items-center text-[13px] font-bold ">
                        Contact Me{" "}
                        <FaArrowRight className="text-[#fff] text-[15px] ms-1 pt-1" />
                      </span>
                      <span className="flex justify-center items-center text-[13px] font-bold ">
                        {" "}
                        Contact Me{" "}
                        <FaArrowRight className="text-[#fff] text-[15px] ms-1 pt-1" />
                      </span>
                    </div>
                  </Link>
                </div>
                {/* ----------------------------- downlode CV ------------------------------ */}
                <div className="Download-button flex justify-start  ">
                  <Link
                    href={""}
                    className="btn-epic justify-center items-center "
                    target="_blank"
                  >
                    <div className=" ">
                      <span className="flex justify-center items-center text-[13px] font-bold ">
                        {" "}
                        <FaCloudDownloadAlt className="text-[#000] text-[18px] me-2 pt-1" />{" "}
                        Download CV{" "}
                      </span>
                      <span className="flex justify-center items-center text-[13px] font-bold ">
                        <FaCloudDownloadAlt className="text-[#fff] text-[18px] me-2 pt-1" />{" "}
                        Download CV{" "}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------- Hire banner ------------- */}

      <div className="mt-[100px] md:px-6">
        <div className="hire-banner ">
          <div className="over-color-div flex justify-center items-center relative">
            <div>
              {" "}
              <h1 className="text-[20px] md:text-[32px] line-clamp-[36px] font-[400] text-center ">
                Let’s Work Together On Your Next Project!
              </h1>
              <div className="flex justify-center items-end ">
                <button className="uppercase hire-me-button py-4 px-7 absolute bottom-[-30px]">
                  Hire me Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
