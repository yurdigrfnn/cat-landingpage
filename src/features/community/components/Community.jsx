import RightImg from "../assets/rightimage.png";
import LeftImg from "../assets/leftimage.png";

import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";
import Person4 from "../assets/person4.png";
import Person5 from "../assets/person5.png";
import Rectangel from "../assets/rectangel.png";

import MLeft from "../assets/m-left.png";
import MRight from "../assets/m-right.png";

export const Community = () => {
  return (
    <section className="relative pb-[100px]">
      <div className="flex relative flex-col w-full">
        <div className="mt-[60px] md:mt-[120px]">
          <div className="text-center flex justify-center w-full ">
            <h1 className="text-2xl md:text-[56px] font-extrabold w-[140px] md:w-max">
              Dog & Cat
              <span className="bg-[#F1CB80] rounded-lg px-2">Community</span>
            </h1>
          </div>
          <div className="mt-6 md:mt-9 text-center">
            <p className="text-base md:text-lg font-medium leading-6 md:leading-9  text-[#656263] w-11/12 md:w-[576px] mx-auto">
              We’re happy to announce that these four legged fella is deserve
              same treatment as us, be one of us
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 md:mt-8">
        <button className="bg-[#299FFF] text-white px-8 py-[14px] text-sm font-bold rounded-[10px]">
          Join Community
        </button>
      </div>
      <div>
        <div>
          <img
            src={LeftImg}
            alt=""
            className="absolute w-[76px] lg:w-max sm:w-[84px] md:w-[128px] left-0 top-0 mt-48 md:top-0 md:mt-28"
          />
        </div>
        <div>
          <img
            src={RightImg}
            alt=""
            className="absolute right-0 w-[76px] sm:w-[114px] md:w-[128px] lg:w-max top-0 mt-48 md:top-0"
          />
        </div>
      </div>
      <div className="mt-[60px]">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-7 md:gap-24">
            <div>
              <img src={Person1} alt="" className="rounded-[10px]" />
            </div>
            <div className="flex flex-col justify-center">
              <img
                src={Person2}
                alt=""
                className=" md:ml-0 -ml-4 rounded-[10px]"
              />
            </div>
          </div>
        </div>
        <div className="flex relative justify-center mt-12 flex-col md:flex-row gap-7 md:gap-24">
          <div className="md:absolute md:left-0 flex md:inline-block justify-center md:mt-16 md:ml-48">
            <img src={Person3} alt="" className=" md:ml-0 rounded-[10px]" />
          </div>
          <div className="md:ml-[300px] md:inline-block flex justify-center">
            <img
              src={Person4}
              alt=""
              className=" md:ml-0 rounded-[10px]  md:w-max w-[288px]"
            />
          </div>
          <div className="md:inline-block flex justify-center">
            <img src={Person5} alt="" className=" md:ml-0 rounded-[10px]" />
          </div>
        </div>
      </div>

      <img
        src={MLeft}
        alt=""
        className="absolute bottom-0 left-0 z-[-1] lg:w-max sm:w-[84px] md:w-[128px]"
      />
      <img
        src={MRight}
        alt=""
        className="absolute bottom-0 right-0 z-[-1] lg:w-max sm:w-[84px] md:w-[128px]"
      />
      <img src={Rectangel} alt="" className="absolute z-[-10] bottom-0" />
    </section>
  );
};
