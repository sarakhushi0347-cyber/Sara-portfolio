import React from 'react'
import avatarimg from '../../assets/hero.png';
import TextChanger from '../../TextChanger';

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
            <TextChanger/>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">Hi, I'm Sara, a passionate Frontend Developer who loves creating modern and responsive web experiences. I specialize in building user-friendly interfaces using technologies like HTML, CSS, JavaScript, and React. I enjoy turning creative ideas into interactive websites and continuously improving my skills in web development. My goal is to develop clean, efficient, and visually appealing applications that provide a smooth user experience. I’m always excited to learn new tools, explore new trends, and grow as a developer in the ever-evolving world of web development.
        </p>

             <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
             duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
        </div>
        <div><img className=""src={avatarimg} alt="" /></div>
      
    </div>
  )
}

export default Home;
