import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineMail } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/logo1.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-scroll";
export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <nav
      name="navbar"
      className="text-white fixed  h-[100px] w-full bg-[#1D2B53] text-lg px-5 md:px-52 py-8"
    >
      <div className="flex items-center">
        <div className="uppercase text-red-800 flex flex-1">
          <img src={Logo} width={30} alt="Logo Image" />
        </div>
        <ul className="hidden sm:flex uppercase items-end justify-end gap-10 cursor-pointer">
          <li className=" active:opacity-60">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className=" active:opacity-60">
            {" "}
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className=" active:opacity-60">
            {" "}
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            {" "}
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className=" active:opacity-60">
            {" "}
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={handleToggle} className="flex sm:hidden">
          {!toggle ? <HiOutlineMenuAlt3 size={35} /> : <IoMdClose size={35} />}
        </div>

        <div
          className={
            !toggle
              ? "fixed left-[-100%]"
              : "sm:hidden flex  fixed right-0 h-[100vh] top-20 w-[60%] border-r text-white border-r-gray-900 bg-[#000300]"
          }
        >
          <ul className="uppercase p-4 pr-6">
            <div>
              <img src={Logo} width={50} alt="Logo Image Mobile view" />
            </div>
            <li className=" active:opacity-60 p-4 border-b border-gray-600 ">
              <Link
                onClick={handleToggle}
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className=" active:opacity-60 p-4 border-b border-gray-600">
              {" "}
              <Link
                onClick={handleToggle}
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className=" active:opacity-60 p-4 border-b border-gray-600">
              {" "}
              <Link
                onClick={handleToggle}
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className=" active:opacity-60 p-4 border-b border-gray-600">
              {" "}
              <Link
                onClick={handleToggle}
                to="work"
                smooth={true}
                duration={500}
              >
                Work
              </Link>
            </li>
            <li className=" active:opacity-60 p-4 border-b border-gray-600">
              {" "}
              <Link
                onClick={handleToggle}
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex fixed flex-col left-[0] top-[35%] ">
          <ul>
            <li className="w-[170px] h-[60px] flex justify-between items-center ml-[-109px] hover:ml-[-10px] duration-300 bg-blue-700 pr-4 pl-4">
              <a
                className="flex justify-between items-center text-[21px] font-semibold w-full gap-5"
                href="/"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] pr-4 pl-4">
              <a
                className="flex justify-between items-center text-[21px] font-semibold w-full gap-5"
                href="https://github.com/body-emad"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#78A083] pr-4 pl-4">
              <a
                className="flex justify-between items-center text-[21px] font-semibold w-full gap-5"
                href="/"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9290C3] pr-4 pl-4">
              <a
                className="flex justify-between items-center text-[21px] font-semibold w-full gap-5"
                href="/"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
