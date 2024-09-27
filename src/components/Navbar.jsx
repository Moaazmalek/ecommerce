import React from "react";
import logo from "/imgs/logo.png";
import { MdOutlineSearch } from "react-icons/md";

import { FaCaretDown, FaCartShopping } from "react-icons/fa6";

import DarkMode from "./DarkMode";
const Menu=[
  {id:1,
    name:"Home",
    link:'/#'
  },
  {id:2,
    name:"Top Rated",
    link:'/#services'
  },
  {id:3,
    name:"Kids Wear",
    link:'/#'
  },
  {id:4,
    name:"Mens Wear",
    link:'/#'
  },
  {id:5,
    name:"Electronics",
    link:'/#'
  }
]
const DropdownLinks=[
  {
    id:1,
    name:"Trending Products",
    link:'/#'
  },
  {
    id:2,
    name:"Best Selling",
    link:"/#"
  },{
    id:3,
    name:"Top Rated",
    link:'/#'
  }
]

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ">
      {/* Upper Navbar */}
      <div className=" dark:bg-primary/40 sm:py-0  py-2  ">
        <div className="container flex justify-between items-center py-1">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="Logo" className="w-12 uppercase " />
              Shopsy
            </a>
          </div>
          {/*search bar  and order button */}
          <div className="flex justify-between items-center gap-4 ">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 focus:border-primary focus:outline-none px-2 py-1 focus:border-1  dark:bg-gray-900"
              />
              <MdOutlineSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2 " />
            </div>
            {/* order button*/}
            <button
              onClick={() => alert("ordering not available yet ")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex gap-3 group items-center "
            >
              <span className="group-hover:block hidden  transition-all duration-200 ">
                Order
              </span>
              <FaCartShopping className="  text-xl text-white drop-shadow-sm cursor-pointer " />
            </button>
            {/* DarkMode Switch  */}
             <div>
                <DarkMode/>
             </div>
          </div>
        </div>
      </div>
      {/* Lowe navbar */}
      <div className="flex justify-center ">
        <ul className="sm:flex hidden items-center gap-4 ">
          {
            Menu.map(data => (
              <li key={data.id}>
                <a className="inline-block px-4 hover:text-primary duration-200 " href={data.link}>{data.name}</a>
              </li>
            ))
          }
          <li  className="group">
            <a href="#" className="flex items-center gap-[2px] py-2 group">Trendeing 
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 "/>
            </a>

          <div className="hidden group-hover:block absolute z-[999999999] w-[161px] rounded-md bg-white p-2 text-block dark:bg-gray-900">
            <ul>
              {DropdownLinks.map( data => (
              <li key={data.id}>
                <a className='inline-block w-full rounded-md p-2 hover:bg-primary/20 'href={data.link}>{data.name}</a>
              </li>
              ))}
            </ul>
          </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
