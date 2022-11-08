import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";

const Description = () => {
  return (
    <div className="  ms:pt-8 ms px-10 ms:pl-3   ">
      <div className="border-x">
        <div className="flex justify-between text-[18px] text-gray-500 font-semibold relative   mb-6 sm:mb-0  border-y   ">
          <div className="w-1/3 text-center  text-green-500   border-r ">
            <button className="border-[#1dbf73] border-b-[3px] h-full w-full  ">
              Basic
            </button>
          </div>
          <div className=" w-1/3 text-center   py-4 bg-gray-100/40">
            <button className="  ">Standard</button>
          </div>
          <div className="w-1/3   border-l  text-center  bg-gray-100/40  py-4">
            <button className="  ">Premium</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col  px-[1.2rem] sm:px-[2.2rem] border-x border-b pt-4 ms:pt-8">
        <div className="flex justify-between">
          <p className="font-semibold">1 HOUR package</p>
          <p>€21.12</p>
        </div>

        <p className="py-4 text-[15px] text-gray-700 ms:pt-9">
          We will have a 1 on 1 teaching session to help you build your web app.
          On Discord/Zoom/etc.
        </p>
        <div className="flex flex-col">
          <div className="flex items-center text-gray-600">
            <MdOutlineWatchLater className="text-[18px] mr-1 " />
            <p className="font-semibold">1 Day Delivery</p>
          </div>

          <ul className="pt-1">
            <li className="flex items-center">
              <ImCheckmark className="text-green-500 mr-2" />
              <p> Design customization</p>
            </li>
            <li className="flex items-center">
              <ImCheckmark className="text-green-500 mr-2" />
              <p>Responsive design</p>
            </li>
            <li className="flex items-center">
              <ImCheckmark className="text-green-500 mr-2" />
              <p>Source Code</p>
            </li>
          </ul>
          <div className="pt-6 md:pb-6">
            <button className="text-white bg-green-500 p-[0.6rem] rounded-[0.5rem] w-full font-semibold">
              Continue (€21.12)
            </button>
            <button className="ms:hidden  p-[0.6rem] rounded-[0.5rem] w-full font-semibold border text-gray-700 border-gray-700 mt-4 ms:text-green-500 ms:border-0 md:font-normal">
              Contact Seller
            </button>
            <button className="hidden ms:inline  p-[0.6rem] rounded-[0.5rem] w-full font-semibold border text-gray-700 border-gray-700 mt-4 ms:text-green-500 ms:border-0 md:font-normal">
              Compare Packages
            </button>
          </div>
        </div>
      </div>
      <div className="hidden ms:flex   justify-center bg-gray-100/50 p-4 mt-5 rounded-[0.4rem]text-center ">
        <p className="  border text-gray-800 border-gray-700 p-2 rounded-[5px] w-full text-center ">
          Contact Seller
        </p>
      </div>
    </div>
  );
};

export default Description;
