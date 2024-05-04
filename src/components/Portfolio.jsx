import React from "react";
import project1 from "../assets/maadhyam.jpg";
import project2 from "../assets/activityTracker.jpg";
import project3 from "../assets/ecom.jpg";
import project4 from "../assets/portfolio.jpg";
import project5 from "../assets/SimonGame.jpg";
import project6 from "../assets/HexCode.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: project1,
      type: "Bloging-Website",
      demo: "",
      code: "",
    },
    {
      id: 2,
      src: project2,
      type: "Activity-Tracker",
      demo: "",
      code: "",
    },
    {
      id: 3,
      src: project3,
      type: "Ecom-Website",
      demo: "",
      code: "",
    },
    {
      id: 4,
      src: project4,
      type: "Portfolio-Website",
      demo: "",
      code: "",
    },
    {
      id: 5,
      src: project5,
      type: "SimonGame-Simulation",
      demo: "https://stirring-liger-127a1a.netlify.app/",
      code: "https://github.com/Sourav928/SimonGame_Simulation",
    },
    {
      id: 6,
      src: project6,
      type: "ColorPicker",
      demo: "https://shimmering-fairy-c5c39e.netlify.app/",
      code: "https://github.com/Sourav928/HexColorCode-React",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map((item, index) => (
            <div key={index} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={item.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center p-2">
                <h3>{item.type}</h3>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={item.demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={item.code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
