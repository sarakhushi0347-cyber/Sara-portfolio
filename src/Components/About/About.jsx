import React from "react";
import Aboutimg from "../../assets/hero.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={Aboutimg} alt="Aboutimg" />

          <ul>
            {/* Frontend */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Specialized in creating responsive and interactive web interfaces using React, HTML, CSS, and JavaScript. I build modern UI components and ensure seamless user experiences across all devices.
                </p>
              </span>
            </div>

            {/* Database */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Experienced with MongoDB and Redis for efficient data storage and retrieval. I design scalable database schemas and optimize queries for better application performance.
                </p>
              </span>
            </div>

            {/* Backend */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Proficient in server-side development with Node.js and Express. I create robust APIs, handle authentication, and implement business logic to support dynamic web applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;