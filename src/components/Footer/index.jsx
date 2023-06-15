import logoImg from "../../assets/Logo.png";
import { FacebookIcon } from "../Icons";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { YoutubeIcon } from "../Icons/YoutubeIcon";

export const Footer = () => {
  return (
    <div>
      <div className="border-y border-[#231F20] py-[58px] ">
        <div className="w-[85.22%] mx-auto">
          <div className="w-full flex justify-center">
            <img src={logoImg} alt="" className="w-[150px]" />
          </div>
          <div className="mt-9 grid gap-x-[120px] gap-y-6 grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-6">
            <div className="flex flex-col text-center md:text-start w-[123px]">
              <h1 className="text-base font-bold">Maxlife For Dog</h1>
              <div className="mt-2 flex-col text-center md:text-start gap-1">
                <h3 className="text-sm font-semibold">Vet Talk</h3>
                <h3 className="text-sm font-semibold">Max Pet Life</h3>
                <h3 className="text-sm font-semibold">Max Share</h3>
                <h3 className="text-sm font-semibold">Max In Love</h3>
              </div>
            </div>
            <div className="flex flex-col text-center md:text-start w-[123px]">
              <h1 className="text-base font-bold">Maxlife For Cat</h1>
              <div className="mt-2 flex-col text-center md:text-start gap-1">
                <h3 className="text-sm font-semibold">Vet Talk</h3>
                <h3 className="text-sm font-semibold">Max Pet Life</h3>
                <h3 className="text-sm font-semibold">Max Share</h3>
                <h3 className="text-sm font-semibold">Max In Love</h3>
              </div>
            </div>
            <div className="flex flex-col text-center md:text-start w-[123px]">
              <h1 className="text-base font-bold">Shop</h1>
              <div className="mt-2 flex-col text-center md:text-start gap-1">
                <h3 className="text-sm font-semibold">Shop For Dogs</h3>
                <h3 className="text-sm font-semibold">Shop For Cats</h3>
              </div>
            </div>
            <div className="flex flex-col text-center md:text-start w-[123px]">
              <h1 className="text-base font-bold">About Us</h1>
              <div className="mt-2 flex-col text-center md:text-start gap-1">
                <h3 className="text-sm font-semibold">Our History</h3>
                <h3 className="text-sm font-semibold">Our Team</h3>
              </div>
            </div>
            <div className="flex flex-col text-center md:text-start w-[123px]">
              <h1 className="text-base font-bold">News & Story</h1>
              <div className="mt-2 flex-col text-center md:text-start gap-1"></div>
            </div>
            <div className="flex flex-col text-center md:text-start w-[123px]">
              <h1 className="text-base font-bold">Contact Us</h1>
              <div className="mt-2 flex-col text-center md:text-start gap-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7">
        <div className="flex justify-center mx-auto w-full">
          <div className="flex gap-4">
            <div className="w-12 h-12 text-white cursor-pointer hover:bg-blue-500 transition-colors duration-200 ease-in rounded-full flex flex-col justify-center  text-center bg-orange-300">
              <span className="mx-auto fill-current">
                <FacebookIcon className="fill-current" />
              </span>
            </div>
            <div className="w-12 h-12 text-white rounded-full flex flex-col hover:bg-blue-500 justify-center transition-colors duration-200 ease-in  text-center bg-orange-300">
              <span className="mx-auto fill-current">
                <TwitterIcon className="fill-current" />
              </span>
            </div>
            <div className="w-12 h-12 text-white rounded-full flex flex-col hover:bg-blue-500 justify-center transition-colors duration-200 ease-in text-center bg-orange-300">
              <span className="mx-auto fill-current">
                <InstagramIcon className="text-white" />
              </span>
            </div>
            <div className="w-12 h-12 text-white rounded-full flex flex-col hover:bg-blue-500 justify-center transition-colors duration-200 ease-in  text-center bg-orange-300">
              <span className="mx-auto fill-current">
                <YoutubeIcon className="fill-current" />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto flex justify-center mt-7">
          <h1 className="text-xl font-medium">
            © 2021 Maxlife. All Rights Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};
