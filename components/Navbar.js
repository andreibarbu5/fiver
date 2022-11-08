import Image from "next/image";
import React, { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import fiver from "../assets/fiver.png";

const Navbar = () => {
  const ref = useRef();

  const scrollbarRight = (newPosition) => {
    ref.current.scrollLeft += newPosition;
  };
  const scrollbarLeft = (newPosition) => {
    ref.current.scrollLeft -= newPosition;
  };

  const buttons = [
    "Graphics & Design ",
    "Digital Marketing ",
    "Writing & Translation ",
    "Video & Animation ",
    "Music & Audio ",
    "Programming & Tech ",
    "Business ",
    "Lifystyle",
    "Trending ",
  ];
  return (
    <div className="overflow-x-hidden">
      <div className="md:flex px-[1.2rem] sm:px-[2.2rem] border-b   pb-6 sm:pt-3    md:items-center md:pt-6 md:pb-5 ">
        <div className="  py-1 flex items-center justify-between md:w-full md:items-center    ">
          {/* Left */}
          <div className="md:pr-4 ">
            <AiOutlineMenu className="text-[1.7rem] sm:text-[2.2rem]" />
          </div>
          {/* Middle */}
          <div className="   flex md:items-center space-x-6 md:w-full ">
            <div className="flex items-center w-[6rem] sm:w-[7rem] md:shrink-0">
              <Image src={fiver} />
            </div>
            <div className="hidden md:inline-flex   h-[2.8rem] w-full rounded-[0.4rem] px-6 ">
              <input
                type="search"
                className=" rounded-[0.4rem] outline-0  pl-4 border border-gray-300 w-full py-6 "
                placeholder="Find services "
              />
            </div>
          </div>
          {/* Right */}
          <div className=" font-semibold text-gray-500 pl-6 md:flex md:items-center pt-2 md:space-x-4">
            <button className="hidden md:inline-flex whitespace-nowrap  text-[20px] ">
              Sign in
            </button>
            <button className=" sm:text-[20px] md:text-green-500 md:border md:py-2 md:px-5 md:rounded-[0.3rem] border-green-500 hover:text-white hover:bg-green-500 duration-200 ease-out ">
              Join
            </button>
          </div>
        </div>
        <div className="  flex justify-center pt-2 md:hidden ">
          <input
            type="search"
            placeholder="Find services"
            className="px-[1rem] py-2 rounded-[0.25rem] border border-gray-300 w-full   outline-0  placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="  flex items-center backdrop-blur-lg overflow-hidden md:border-b">
        <button
          className="absolute left-0  h-[5rem]  px-4 pl-8 bg-white"
          onClick={() => scrollbarLeft()}
        >
          <IoIosArrowBack className="" />
        </button>

        <div
          className="hidden md:inline-flex text-[20px] whitespace-nowrap space-x-9 pl-14  py-4 text-gray-500  w-full     scrollbar-hide overflow-x-scroll"
          ref={ref}
        >
          {buttons.map((button) => (
            <button className=" pr-2 pl-5">{button}</button>
          ))}
        </div>
        <button
          className="absolute right-0 bg-white h-[5rem]  px-4 pr-8 "
          onClick={() => scrollbarRight(50)}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
