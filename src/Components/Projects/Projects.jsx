import React from 'react'
import ProjectCard from './ProjectCard';
import img from '../../assets/hero.png'

const Projects = () => {
  return (
    <div className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5">
            <ProjectCard
               img={img} title="Youtube Clone" main="An e-commerce website built with React and Node.js." />
            <ProjectCard
              img={img} title="Blogging Website" main="A simple blogging website built with React and Node.js." />
            <ProjectCard
              img={img} title="Netflix Clone" main="A simple blogging website built with React and Node.js." />
        </div>
      
    </div>
  )
}

export default Projects;
