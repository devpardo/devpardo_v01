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
          <p className="text-[#8892b0] py-4 max-w-[50%] text-sm lg:text-base">
            Here you will find some of the personal and clients projects that I
            created from my former clients.
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {projects.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md p-4 min-h-[300px] shadow-md"
              >
                <img
                  src={`/images/${item.img}.png`}
                  className="rounded-xl border border-slate-400"
                  alt={item.name}
                />

                <h6 className="mb-4 mt-3 text-blue-900">{item.name}</h6>

                <div className="flex flex-wrap gap-1">
                  {item.tools.map((tool, index) => (
                    <span
                      className="text-sm bg-[#5c96e4] p-2 rounded-lg text-white mr-2"
                      key={index}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>

                <p className="text-sm mt-4">
                  <a className="no-underline" href={item.url}>
                    Visit Site
                  </a>
                </p>
              </div>
            ))}
          </div>

          <div className="my-5 flex items-center">
            <a
              href="https://github.com/devpardo"
              target="_blank"
              className="mx-auto flex items-center bg-slate-500 lg:px-3 px-2 py-3 rounded-xl mb-1 text-center hover:bg-slate-700 no-underline text-white"
            >
              <FaGithubAlt />{" "}
              <span className="ml-3">View projects on my Github</span>
            </a>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Skills;
