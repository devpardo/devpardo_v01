import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="hidden lg:flex fixed top-[35%] right-[-100px]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[100px] hover:ml-[0] duration-300 bg-[#00b8f1] rounded-tl-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/hensterpardo"
              target="_blank"
            >
              <FaLinkedin size={30} /> Linkedin
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[100px] hover:ml-[0] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/devpardo"
              target="_blank"
            >
              <FaGithub size={30} /> Github
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[100px] hover:ml-[0] duration-300 bg-[#fce94b]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="mailto://devpardo@gmail.com"
              target="_blank"
            >
              <HiOutlineMail size={30} /> Email
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[100px] hover:ml-[0] duration-300 bg-[#9659fb] rounded-bl-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/HensterBryanPardo_FrontendDeveloper.pdf"
              target="_blank"
            >
              <BsFillPersonLinesFill size={30} /> Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
