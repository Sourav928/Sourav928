import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" md:w-full h-full bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full border-red-800">
        <div className="pb-8 mb-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl my-10">
          As an aspiring graduate from IIIT Nagpur's esteemed Computer Science
          program, slated to complete my B.Tech in CSE by 2024, I am deeply
          committed to honing my skills in both academic excellence and
          practical application. With a strong foundation in core CS principles
          and a knack for problem-solving, I am eager to delve into the world of
          full-stack development, where innovation meets real-world impact.
        </p>
        <br />
        <p className="text-xl mb-20">
          Driven by a passion for coding and a relentless pursuit of knowledge,
          I thrive on the challenges posed by building web applications that not
          only function seamlessly but also contribute positively to society.
          Through continuous learning and hands-on experience, I aim to leverage
          my technical expertise to create solutions that address pressing
          issues and improve the lives of others.
        </p>
      </div>
    </div>
  );
};

export default About;
