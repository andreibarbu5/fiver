import React, { useState } from "react";
import Image from "next/image";
import me from "../assets/me.png";
import website2 from "../assets/website2.jpg";
import website3 from "../assets/website3.jpg";
import star from "../assets/star.png";
import gig from "../assets/gig.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Gig = () => {
  const [position, setPosition] = useState(0);
  const photos = [gig, website2, website3];

  const imageLeft = () => {
    if (position >= 1) {
      setPosition((position) => position - 1);
    } else {
      setPosition(photos.length - 1);
    }
  };
  const imageRight = () => {
    if (position < photos.length - 1) {
      setPosition((position) => position + 1);
    } else {
      setPosition(0);
    }
  };
  console.log(position);

  return (
    <div className="px-[1.2rem] sm:pl-[2.2rem] sm:mr-[1rem] md:pr-[2rem] lg:pr-[3rem]">
      <div className="py-3 ms:pt-8">
        {/* Categories */}
        <div className=" ">
          <ul className="flex flex-wrap whitespace-nowrap text-[15px]">
            <li className="flex items-center">
              <p className="text-blue-500">Programming & Tech</p>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center">
              <p className="text-blue-500">Web Programming</p>
              <IoIosArrowForward />
            </li>
            <li className="flex items-center">
              <p className="text-blue-500">Web Application</p>
              <IoIosArrowForward />
            </li>
          </ul>
        </div>
        {/* Title */}{" "}
        <div className="pt-3">
          <h1 className="text-[20px] font-semibold text-gray-700">
            I will teach you HTML, CSS, javascript, react, next js, tailwind,
            online coding lessons
          </h1>
        </div>
        {/* Rating */}
        <div className="flex items-center space-x-2 ">
          <div className="w-12 h-12 flex shrink-0">
            <Image src={me} className="rounded-full object-cover border  " />
          </div>
          <div className=" flex flex-wrap  items-center pt-2">
            <div className="flex flex-wrap pr-4">
              <p>andreibarbu681</p>
            </div>

            <div className="flex items-center space-x-2 pr-2">
              {[...Array(5)].map(() => (
                <div className="w-4 h-4">
                  <Image src={star} alt="shutuperror" />
                </div>
              ))}{" "}
              <p className="text-yellow-500 font-semibold">5</p>
            </div>

            <p className="pr-2">(2)</p>
            <div className="text-gray-400">1 Order in Queue</div>
          </div>
        </div>
        {/* Photo */}
        <div className="relative flex items-center  ms:pl-[2.2rem]">
          <div
            className="bg-white absolute    left-0 rounded-full"
            onClick={() => imageLeft()}
          >
            <IoIosArrowBack className=" w-12 h-12  p-3  opacity-70" />
          </div>
          <div className=" flex -mx-[1.2rem] sm:-mx-[2rem] pt-4   ">
            <Image
              src={photos[position]}
              className="h-[17rem] xs:h-[20rem]  object-cover sm:h-[25rem] md:h-[30rem] ms:h-[22rem] lg:h-[28rem] xl:h-[32rem]  "
            />
          </div>
          <div
            className="bg-white absolute    right-0 rounded-full "
            onClick={() => imageRight()}
          >
            <IoIosArrowForward className=" w-12 h-12  p-3  opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
