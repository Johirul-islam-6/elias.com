import "./Forme.css";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterestSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

export const Forme = () => {
  return (
    <>
      {/* <!-- component --> */}
      <div id="contact" class="px-5">
        <div class="flex justify-center">
          <div>
            <h3 className="text-[30px] md:text-[46px] font-[600] text-center text-[#fff] pt-20">
              Contact Me
            </h3>
            <div className="divider w-[180px] mx-auto my-1 mt-4 bg-[#EE6A50] h-1"></div>
          </div>
        </div>

        <div class="frome-container  flex flex-col md:flex-row items-center  justify-between mx-auto my-4 md:px-3">
          {/* <!-- left site forme container --> */}
          <div class="frome-left-site w-full md:w-[28%] flex justify-start  lg:mt-[30px] lg:w-2/6  py-12   rounded-2xl">
            <div>
              <div class="flex flex-col text-white ">
                <h1 class=" uppercase text-2xl my-4">Noteic</h1>
                <p class="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam tincidunt arcu diam, ex.
                </p>

                <div class="flex my-4 w-2/3 lg:w-1/2">
                  <div class="flex flex-col">
                    <i class="fas fa-map-marker-alt pt-2 pr-2" />
                  </div>
                  <div class="flex flex-col">
                    <h2 class="text-2xl">Phone :</h2>
                    <p class="text-gray-400">01824842336</p>
                  </div>
                </div>

                <div class="flex my-4 w-2/3 lg:w-1/2">
                  <div class="flex flex-col">
                    <i class="fas fa-phone-alt pt-2 pr-2" />
                  </div>
                  <div class="flex flex-col">
                    <h2 class="text-2xl">Address</h2>
                    <p class="text-gray-400">present: Saver, dhaka</p>
                    <p class="text-gray-400">permanent: Rongpur</p>
                  </div>
                </div>

                <div class="flex my-4 w-2/3 lg:w-1/2">
                  <a
                    href="https://www.facebook.com/ENLIGHTENEERING/"
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-full  h-8 w-8 inline-block mx-1 text-center pt-1"
                  >
                    <FaFacebook className="w-[30px] h-[30px]" />
                  </a>
                  <a
                    href="https://www.facebook.com/ENLIGHTENEERING/"
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-full  h-8 w-8 inline-block mx-1 text-center pt-1"
                  >
                    <FaWhatsappSquare className="w-[30px] h-[30px]" />
                  </a>
                  <a
                    href="https://www.facebook.com/ENLIGHTENEERING/"
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-full  h-8 w-8 inline-block mx-1 text-center pt-1"
                  >
                    <FaLinkedin className="w-[30px] h-[30px]" />
                  </a>
                  <a
                    href="https://www.facebook.com/ENLIGHTENEERING/"
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-full  h-8 w-8 inline-block mx-1 text-center pt-1"
                  >
                    <FaPinterestSquare className="w-[30px] h-[30px]" />
                  </a>
                </div>
              </div>
            </div>
            {/* ------------ gradient div------- */}
            <div className="flex justify-between absolute">
              <div className="gradient-rounded-div-left left-[0px] background_color_animation"></div>
              <div className="gradient-rounded-div-right right-[0px] background_color_animation "></div>
            </div>
          </div>
          {/* --------------------------- frome ----------- */}
          <forme class="frome-input-container md:justify-end md:py-8 md:my-4  w-[70%] md:ps-[70px]  rounded-2xl shadow-2xl ">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:mt-5">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 px-3 py-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 px-3 py-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 px-3 py-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 px-3 py-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Message*"
                class="w-full h-32 bg-gray-100 text-gray-900 mt-2 px-3 py-4 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div class="my-2 flex justify-center">
              <button
                class="uppercase text-sm font-bold md:w-[250px] mx-auto tracking-wide bg-[#F26C4F] text-gray-100 py-5 px-8 rounded-lg 
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </forme>
        </div>
        {/* <!-- COMPONENT CODE --> */}
      </div>
    </>
  );
};
