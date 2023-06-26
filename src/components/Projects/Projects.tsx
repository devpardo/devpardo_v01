import { Element } from "react-scroll";
import "./Projects.css";
import { data } from "../../data/data";
import { FaGithubAlt } from "react-icons/fa";

const Skills = () => {
  const projects = data;

  return (
    <>
      <Element
        name="projects"
        className="projects w-full min-h-screen bg-white"
      >
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col pt-56 h-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1b2d68]">
            Projects
          </h1>
          <p className="text-[#8892b0] py-4 max-w-[700px] text-sm lg:text-base">
            Here you will find some of the personal and clients projects that I
            created from my past experiences.
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {projects.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md p-4 min-h-[300px] shadow-md"
              >
                <img src={`/images/${item.img}.png`} alt={item.name} />
                <p className="text-sm mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, illo. Veniam voluptatum sequi recusandae earum unde
                  cum at nisi hic.
                </p>

                {item.tools.map((tool, index) => (
                  <span
                    className="text-sm bg-[#5c96e4] p-2 rounded-lg text-white"
                    key={index}
                  >
                    {tool.name}
                  </span>
                ))}

                <p className="text-sm mt-3">
                  <a className="no-underline" href={item.url}>
                    Visit Site
                  </a>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center">
            <a
              href="https://github.com/devpardo"
              target="_blank"
              className="mx-auto flex items-center bg-slate-500 lg:px-3 px-2 py-3 rounded-xl mb-1 text-center hover:bg-slate-700 no-underline text-white"
            >
              <FaGithubAlt /> <span className="ml-3">View on Github Repo</span>
            </a>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Skills;
