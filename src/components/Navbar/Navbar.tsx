import Logo from "../../assets/hub-icon.svg";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000] bg-opacity-60 text-gray-300 z-30">
      <div>
        <a href="/">
          <img className="h-[50px] hover:h-[60px]" src={Logo} alt="" />
        </a>
      </div>

      <ul className="hidden md:flex m-0">
        <li>
          <Link
            to="home"
            className="font-bold no-underline text-white"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="font-bold no-underline text-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="font-bold no-underline text-white"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="font-bold no-underline text-white"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-20">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center items-center z-10"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <Sidebar />
    </div>
  );
};

export default Navbar;
