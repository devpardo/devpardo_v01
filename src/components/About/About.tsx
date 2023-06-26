import { Element } from "react-scroll";
const About = () => {
  return (
    <>
      <Element name="about" className="w-full h-screen bg-[#c6c87b] text-black">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full">
            <div className="pl-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#29459e]">
                Get to know me.
              </h1>
            </div>
          </div>

          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="">
              <h3></h3>
              <p className="text-sm lg:text-base">
                I work as a Frontend Web Developer, specializing in creating the
                user-facing aspects of websites and web applications, aiming to
                contribute to the overall success of the product. You can
                explore some of my completed projects in the Projects section.
              </p>
              <p className="text-sm lg:text-base">
                In addition to my development work, I enjoy sharing my knowledge
                and experiences in web development through various forms of
                content. By doing so, I aim to assist and benefit other members
                of the developer community. Feel free to connect with me or
                follow my LinkedIn profile, where I regularly share valuable
                content related to web development and programming.
              </p>
            </div>

            <div>
              <h3>Technical toolbox</h3>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default About;
