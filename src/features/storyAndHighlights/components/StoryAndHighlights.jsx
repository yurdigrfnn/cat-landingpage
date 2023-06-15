import MLogo from "../assets/mlogo.png";
import PersonAndDog from "../assets/person-and-dog.png";
import MLogo2 from "../assets/m-logo-2.png";
import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";

export const StoryAndHighlights = () => {
  return (
    <div>
      <div className="relative flex">
        <div className="absolute top-0 right-0 z-[-1]">
          <img src={MLogo} alt="" className="md:w-[591px] w-[149px] mt-14" />
        </div>
      </div>
      <div className="mt-[65px] md:mt-[107px] px-3 md:px-0 lg:w-[88.61%] md:w-[95%] mx-auto">
        <div className="w-full md:text-start text-center">
          <h1 className="md:text-5xl text-2xl font-extrabold">
            Story & Highlights
          </h1>
        </div>
        <div className="mt-[22px] flex flex-col md:mt-[54px] relative">
          <div>
            <img src={PersonAndDog} alt="" />
          </div>
          <div className="md:px-12 md:py-10 py-[18px] md:mt-24 md:rounded-[36px] mt-[10px] md:absolute md:right-0 top-0 rounded-2xl bg-[#F6F6F6] px-4">
            <h1 className="md:w-[513px] text-lg md:text-4xl font-extrabold">
              Here’s How Dog & Cat serve their four legged Child in Pandemic
            </h1>
            <p className="mt-[14px] md:w-[513px] text-base font-medium md:text-lg text-[#656263]">
              Exact composition of dog food varies widely from one manufac to
              another, dog food generally is made up of meats, meat byproducts,
              cereals, and grains.
            </p>
            <div className="mt-4 flex justify-between">
              <span className="text-sm md:text-lg font-semibold text-[#656263]">
                03 Jan 2021
              </span>
              <span className="text-base md:text-xl font-bold text-[#299FFF] cursor-pointer">
                Read More
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex">
        <div className="absolute top-0 left-0-0 z-[-1]">
          <img src={MLogo2} alt="" className="md:w-[444px] w-[149px] mt-14" />
        </div>
      </div>
      <div className="mt-[60px] md:mt-[107px] px-3 md:px-0 lg:w-[88.61%] md:w-[95%] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6">
          <div className="mx-auto flex gap-4 md:gap-6 flex-col">
            <img src={Person1} alt="" className="rounded-2xl" />
            <h1 className="font-extrabold text-base md:text-xl">
              Here’s How Dog & Cat serve their four legged Child in Pandemic
            </h1>
            <span className="font-semibold text-sm sm:text-lg text-[#656263]">
              03 Jan 2021
            </span>
          </div>
          <div className="mx-auto flex gap-4 md:gap-6 flex-col">
            <img src={Person2} alt="" className="rounded-2xl" />
            <h1 className="font-extrabold text-base md:text-xl">
              Here’s How Dog & Cat serve their four legged Child in Pandemic
            </h1>
            <span className="font-semibold text-sm sm:text-lg text-[#656263]">
              03 Jan 2021
            </span>
          </div>
          <div className="mx-auto flex gap-4 md:gap-6 flex-col">
            <img src={Person3} alt="" className="rounded-2xl" />
            <h1 className="font-extrabold text-base md:text-xl">
              Here’s How Dog & Cat serve their four legged Child in Pandemic
            </h1>
            <span className="font-semibold text-sm sm:text-lg text-[#656263]">
              03 Jan 2021
            </span>
          </div>
        </div>
      </div>
      <div className="md:mt-8 mt-6 flex justify-center w-full">
        <button className="bg-[#299FFF] text-white px-8 py-[14px] text-sm font-bold rounded-[10px]">
          See All Story
        </button>
      </div>
    </div>
  );
};
