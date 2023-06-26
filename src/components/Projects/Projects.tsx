import { Element } from "react-scroll";

import "./Projects.css";
const Skills = () => {
  return (
    <>
      <Element name="projects" className="projects w-full h-screen bg-white">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1b2d68]">
            Projects
          </h1>
          <p className="text-[#8892b0] py-4 max-w-[700px] text-sm lg:text-base">
            Here you will find some of the personal and clients projects that I
            created from my past experiences.
          </p>
        </div>
      </Element>
    </>
  );
};

export default Skills;
