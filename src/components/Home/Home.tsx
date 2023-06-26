import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.css";
import video from "../../assets/Untitled.mp4";
import Hand from "../../assets/hand.svg";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Element
        name="home"
        className="home w-full h-screen bg-transparent relative"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-bg w-full hidden sm:block"
        >
          <source src={video} />
        </video>

        <div className="max-w-[1320px] mx-auto px-8 flex flex-col justify-center h-full">
          <div className="flex items-center align-center">
            <img src={Hand} className="h-10 mr-3" alt="Hello" />
            <p className="text-[#fac036] m-0 font-bold">Hello there!</p>
          </div>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            <span className="text-3xl sm:text-6xl font-bold text-[#8892b0] mr-3">
              I am
            </span>
            <span className="cursor-pointer home-tag">
              HENSTER BRYAN PARDO,
            </span>
          </h1>
          <h2 className="text-3xl sm:text-6xl font-bold text-[#1ea4f3]">
            a Frontend Developer.
          </h2>
          <p className="text-[#fff] py-4 lg:max-w-[70%] tracking-wide text-sm lg:text-base">
            I'm a passionate frontend developer frontend developer specializing
            in Vue.js and React.js, two powerful JavaScript frameworks that have
            revolutionized the way we build user interfaces. From concept to
            implementation, I specialize in turning ideas into reality, bringing
            life to static designs through clean and efficient code. Whether
            it's responsive layouts, seamless animations, or interactive
            interfaces.
          </p>

          <div className="flex lg:hidden mb-4 items-center justify-center">
            <div className="mr-4">
              <a href="/">
                <FaLinkedin className="text-[#00b8f1] " size={40} />
              </a>
            </div>
            <div className="mr-4">
              <a href="/">
                <FaGithub className="text-[#333333] " size={40} />
              </a>
            </div>
            <div className="mr-4">
              <a href="/">
                <HiOutlineMail className="text-[#fce94b] " size={40} />
              </a>
            </div>
            <div className="mr-4">
              <a href="/">
                <BsFillPersonLinesFill className="text-[#9659fb] " size={40} />
              </a>
            </div>
          </div>

          <div className="flex">
            <Link
              className="cursor-pointer no-underline text-white"
              to="projects"
              smooth={true}
              duration={500}
            >
              <div className="bg-[#471598] lg:px-3 px-2 py-3 rounded-xl mb-1 text-center hover:bg-[#9659fb]">
                Explore my portfolio and let's collaborate!
              </div>
              <div className="flex items-center">
                <HiArrowNarrowDown className="mx-auto text-3xl" />
              </div>
            </Link>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Home;
