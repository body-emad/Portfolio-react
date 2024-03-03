import { FaArrowAltCircleRight } from "react-icons/fa";
import { ReactTyped } from "react-typed";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1D2B53]">
      <div className="h-full flex flex-col justify-center px-8 mx-auto max-w-[1400px]">
        <p className="text-white text-lg pl-10 sm:text-3xl">Hi, My Name is</p>
        <h1 className=" text-2xl pt-0 sm:pt-3  sm:text-7xl pr-10 font-bold text-[#ccd6f6] p-3">
          Abdelrahman Emad
        </h1>
        <h2 className=" text-2xl pt-0 sm:pt-5 sm:text-7xl font-bold text-[#8892b0]">
          I am a{" "}
          <ReactTyped
            uppercase
            strings={[
              "Full Stack Developer",
              "Ui Designer",
              "Graphic Designer",
            ]}
            typeSpeed={70}
            backSpeed={75}
            loop
          />
        </h2>
        <p className="text-[#8892b0] text-[20px] py-7 max-w-[700px]">
          A passionate full stack developer with a knack for crafting seamless
          digital experiences. With a blend of creativity and technical
          expertise, I thrive on bringing ideas to life through code.
        </p>
        <div>
          <button className="text-white group text-xl border-2 font-bold uppercase px-7 py-4 my-2 flex items-center hover:bg-red-800 hover:border-red-800 ">
            View Work
            <span>
              <FaArrowAltCircleRight className=" group-hover:rotate-90 duration-300 ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
