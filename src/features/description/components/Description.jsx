import RightImg from "../assets/rightImage.png";
import LeftImg from "../assets/leftImage.png";
import Ingredient from "../assets/Ingredient.png";
import Shrimp from "../assets/shrimp.png";
import Iventories from "../assets/iventories.png";
import Dog from "../assets/dog.png";
import Line1 from "../assets/Line1.png";
import Line2 from "../assets/Line2.png";
import Line3 from "../assets/Line3.png";
import CatAndDog from "../assets/cat-dog.png";
import Ellipse from "../assets/ellipse-31.png";
import Ellipse2 from "../assets/ellipse-32.png";
import MLogo from "../assets/mLogo.png";

export const Description = () => {
  return (
    <section className="relative">
      <div>
        <div>
          <img
            src={LeftImg}
            alt=""
            className="absolute w-[76px] lg:w-max sm:w-[84px] md:w-[128px] left-0 top-0"
          />
        </div>
        <div>
          <img
            src={RightImg}
            alt=""
            className="absolute right-0 w-[76px] sm:w-[114px] md:w-[128px] lg:w-max top-0 md:mt-7"
          />
        </div>
      </div>
      <div className="flex relative flex-col w-full">
        <div className="mt-[60px] md:mt-[120px]">
          <div className="text-center flex justify-center w-full ">
            <h1 className="text-2xl md:text-[56px] font-extrabold w-[140px] md:w-max">
              Treat They{" "}
              <span className="bg-[#F1CB80] rounded-lg px-2">Deserve</span>
            </h1>
          </div>
          <div className="mt-6 md:mt-9 text-center">
            <p className="text-base md:text-lg font-medium leading-6 md:leading-9  text-[#656263] w-11/12 md:w-[576px] mx-auto">
              They deserve healthy food just like you. Not just an ordinary food
              for pet tummy, but it is a healthy, and no allergic thread
            </p>
          </div>
        </div>
        <div className="mt-16 flex relative gap-8 lg:gap-0 flex-col lg:flex-row justify-between max-w-[1192] mx-auto">
          <div className="w-max">
            <div className="text-center flex justify-center">
              <img src={Ingredient} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#299FFF]">
                Finest Ingredient
              </h1>
              <p className="text-lg w-[250px] font-medium text-[#656263] mt-[10px]">
                Perfectly Finest since harvest until packaged
              </p>
            </div>
          </div>
          <div className="absolute mx-32 mt-20 -z-10 hidden lg:inline-block">
            <img src={Line1} alt="" />
          </div>
          <div className="w-max lg:mt-[65px]">
            <div className="text-center flex justify-center">
              <img src={Shrimp} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#299FFF]">
                Real seafood
              </h1>
              <p className="text-lg w-[250px] font-medium text-[#656263] mt-[10px]">
                Made from the sea to the land, no bad sea food
              </p>
            </div>
          </div>
          <div className="absolute mx-[442px] mt-20 -z-10 hidden lg:inline-block">
            <img src={Line2} alt="" />
          </div>
          <div className="w-max">
            <div className="text-center flex justify-center">
              <img src={Iventories} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#299FFF]">
                Trusted Supplier
              </h1>
              <p className="text-lg w-[250px] font-medium text-[#656263] mt-[10px]">
                Fresh from the farm since packed to pet tummy
              </p>
            </div>
          </div>
          <div className="absolute ml-[650px] rotate-2  mt-20 -z-10 hidden lg:inline-block">
            <img src={Line3} alt="" />
          </div>
          <div className="w-max lg:mt-[65px]">
            <div className="text-center flex justify-center">
              <img src={Dog} alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#299FFF]">
                A lifetime Food
              </h1>
              <p className="text-lg w-[250px] font-medium text-[#656263] mt-[10px]">
                From newborn until senior, spanning pet life span.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#F6F6F6] overflow-hidden md:overflow-auto mt-[122px] relative flex flex-col md:flex-row w-full">
            <div className="w-full z-10">
              <div className="md:mt-[120px] md:mb-[80px] lg:mb-[80px] lg:w-[88.61%] md:w-[95%] mx-auto relative md:w gap-4 md:gap-0 md:flex-row md:justify-between flex flex-col mt-16 ">
                <div className="">
                  <div className="">
                    <div className="flex justify-center text-center">
                      <h1 className="w-[262px] text-2xl md:text-5xl md:w-[500px] font-extrabold">
                        Need 24 hrs{" "}
                        <span className="bg-[#F1CB80] rounded-lg px-2">
                          Convo
                        </span>{" "}
                        to take care of your Pet?
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-center mt-9">
                    <button className="bg-[#299FFF] text-white px-8 py-[14px] text-sm font-bold rounded-[10px]">
                      Begin Vet Talk
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:absolute right-0 mt-8 md:mt-0 z-[5] bottom-0 flex justify-end">
              <img src={CatAndDog} alt="" className="" />
            </div>
            <div className="absolute md:inline-block hidden right-0 overflow-hidden top-0 bottom-0">
              <img src={Ellipse} alt="" className="" />
              <div className="absolute z-[4] ml-64 left-0 bottom-0">
                <img src={MLogo} alt="" />
              </div>
            </div>
            <div className="absolute md:hidden -mb-36 scale-[2] right-0 overflow-hidden bottom-0">
              <img src={Ellipse2} alt="" className="" />
              <div className="absolute z-[4] ml-64 left-0 bottom-0">
                <img src={MLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
