import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">

      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="flex gap-4 text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:sarakhushi0347@gmail.com">sarakhushi0347@gmail.com</a>
        </li>

        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          <a href="https://linkedin.com/in/sarakhushi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>

        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a href="https://github.com/sarakhushi0347-cyber" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>

    </div>
  );
};

export default Footer;