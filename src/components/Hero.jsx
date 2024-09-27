import React from "react";
import clothes from "/imgs/clothes.webp";
import model from "/imgs/model.png";
function Hero() {
  return (
    <div
      className="relative
     overflow-hidden sm:min-h-[650px] min-h-[550px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200   "
    >
      {/*background patterns */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute  -top-1/2 right-0 rounded-3xl rotate-45 -z-9 "></div>
      {/* hero section */}
      <div className="container  pb-8 sm:bg-0 ">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            {/* text content section  */}
            <div className=" flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 ">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold ">
                Lorem ipsum dolor sit.
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, quibusdam?
              </p>
              <div className="">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full  ">
                  Order Now
                </button>
              </div>
            </div>
            <div className="z-[9] order-1 sm:order-2 ">
              <img
                src={model}
                alt=""
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
