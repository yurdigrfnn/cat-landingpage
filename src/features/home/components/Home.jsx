import { Navbar } from "../../../components/Navbar";
import MLogo from "./../assets/m-logo.png";
import Person from "./../assets/person.png";
import Mlogo2 from "./../assets/m-logo-2.png";
import Cat from "./../assets/cat.png";
import Dog from "./../assets/dog.png";

export const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Navbar />
      <div className="w-full relative">
        <div className="md:absolute md:mb-0 -mb-5 top-0 right-0 left-0">
          <div className="lg:w-[88.61%] w-[95%] mx-auto md:mt-[232px]">
            <div className="md:max-w-[524px]">
              <h1 className="md:text-[64px] md:text-start  text-3xl font-extrabold leading-9 text-center mt-[112px] md:leading-[75px]">
                Everything Your{" "}
                <span className="bg-[#F1CB80] rounded-lg px-2">Companion</span>{" "}
                Needs the Most
              </h1>
              <p className="md:text-lg text-base md:text-start text-center font-medium text-[#231F20] mt-4">
                Perfect thread & good care for perfect companion, is all you
                gave for your four legged angel
              </p>
              <div className=" mt-10 w-full flex md:inline-block justify-center">
                <button className="bg-[#299FFF] text-white px-8 py-[14px] text-sm font-bold rounded-[10px]">
                  Get Free Sample
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#F6F6F6] relative w-full z-[-1]">
          <div className="flex justify-between">
            <div className="w-[524px] h-[489px]">
              <img
                src={Mlogo2}
                alt=""
                className="mt-32 md:inline-block hidden "
              />
            </div>
            <img src={MLogo} alt="" className="mt-32 ml-auto" />
          </div>
          <img src={Person} alt="" className="absolute bottom-0 right-0" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 -mb-1"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,192L120,213.3C240,235,480,277,720,277.3C960,277,1200,235,1320,213.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
          <div className="z-10 w-full flex justify-center absolute bottom-0 -mb-8 md:-mb-4">
            <div className="xl:w-7/12 w-[87.5%] md:w-9/12 flex justify-between">
              <div className="w-[48.05%] rounded-3xl md:rounded-[36px] relative bg-[#B27FB9] flex text-end justify-end  py-[14px] md:py-[52px]">
                <div className="sm:w-[110px] w-[90px] md:w-max absolute bottom-0  left-0">
                  <img src={Dog} alt="" className="" />
                </div>
                <h1 className=" text-white md:text-[32px] text-[24px] text-2xl w-[158px] mr-[14px]  sm:mr-[20px]">
                  I’m a Dog Person
                </h1>
              </div>
              <div className="w-[48.05%] rounded-3xl md:rounded-[36px] relative bg-[#60AEEE] flex text-end justify-end py-[14px] md:py-[52px]">
                <div className=" sm:w-[110px] w-[90px] md:w-max absolute bottom-0 left-0">
                  <img src={Cat} alt="" className="" />
                </div>
                <h1 className=" text-white md:text-[32px] text-[24px] text-2xl w-[158px] mr-[14px] sm:[16px] sm:mr-[20px]">
                  I’m a Cat Person
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
