import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import HeroImage from "../assets/heroImage.png";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="w-full h-screen bg-gradient-to-b from-black via-black  to-gray-800 "
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row sm:flex-row ">
          <div className="flex flex-col justify-center">
            <h2 className="md:text-7xl font-bold text-white text-5xl">
              I'm a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              "Driving digital evolution with a full stack perspective, weaving
              together technology and user needs."
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className=" text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                Protfolio
                <span className="group-hover:rotate-90 duration-300">
                  <RiArrowRightSLine size={25} />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={HeroImage}
              alt="ProfileImage"
              className="rounded-2xl mx-auto w-2/3 md:w-full sm:w-1/2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
