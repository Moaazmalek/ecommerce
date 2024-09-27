import React from "react";
import { FaStar } from "react-icons/fa6";
const ProductsData = [
  {
    id: 1,
    img: "yellow.png",
    title: "Yellow Hoddie",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas culpa debitis nemo officia blanditiis quis est dolore.",
  },
  {
    id: 2,
    img: "black.png",
    title: "Black Hoddie",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas culpa debitis nemo officia blanditiis quis est dolore.",
  },
  {
    id: 3,
    img: "red.png",
    title: "Red Hoddie",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas culpa debitis nemo officia blanditiis quis est dolore.",
  }
];
function TopProducts() {
  return (
    <div className="">
      <div className="container ">
        {/* Header section  */}
        <div className="text-left  mb-24">
          <p className="text-sm text-primary "> Top Rated Products for you</p>
          <h1 className="text-3xl font-bold ">Best Products </h1>
          <p className="text-xs text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid
            enim blanditiis.
          </p>
        </div>{" "}
        {/* body section  */}
        <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center hover:text-white transition duration-300 ">
          {ProductsData.map((data) => (
            <div key={data.id} className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-gray-800 relative shadow-xl duration-high group max-w-[300px]">
                {/* image section  */}
              <div className="h-[100px">
                <img src={`/imgs/${data.img}`} alt="" 
                className="max-w-[140px] mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" />

              </div>
              {/* details section  */}
              <div className="p-4 text-center">
                <div className="flex w-full items-center justify-center gap-1">
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                </div>
                <h1 className="text-xl font-bold  hover:text-white">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 ">{data.description}</p>
                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
