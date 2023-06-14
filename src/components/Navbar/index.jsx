import { useState } from "react";
import { NavbarMobile } from "../NavbarMobile";
import { MenuBarIcon } from "../Icons";
import logoImg from "../../assets/Logo.png";

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="mt-10">
      <div className="md:flex justify-between content-center hidden">
        <div className="lg:w-[20%] w-[15%] my-auto">
          <img src={logoImg} alt="" className="w-[150px]" />
        </div>
        <ul className="flex lg:w-[60%] w-[70%] justify-between my-auto">
          <li className="text-base font-bold hover:text-[#299FFF] cursor-pointer">
            Max For Dog
          </li>
          <li className="text-base font-bold hover:text-[#299FFF] cursor-pointer">
            Max For Cat
          </li>
          <li className="text-base font-bold hover:text-[#299FFF] cursor-pointer">
            Forum
          </li>
          <li className="text-base font-bold hover:text-[#299FFF] cursor-pointer">
            Pet Talk
          </li>
          <li className="text-base font-bold hover:text-[#299FFF] cursor-pointer">
            Max share
          </li>
          <li className="text-base font-bold hover:text-[#299FFF] cursor-pointer">
            Contact Us
          </li>
        </ul>
        <div className="flex justify-end  lg:w-[20%] w-[15%]">
          <button className="bg-[#299FFF] text-white px-8 py-[14px] text-sm font-bold rounded-[10px]">
            Join Us
          </button>
        </div>
      </div>
      <div className="md:hidden relative">
        <NavbarMobile
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <button
          type="button"
          className="flex h-10 w-10 items-center absolute justify-center rounded-full text-gray-500"
          onClick={() => setSidebarOpen(true)}
        >
          <span className=""></span>
          <MenuBarIcon className="h-6 w-6 text-black" aria-hidden="true" />
        </button>
        <div className="text-center flex justify-center items-start content-center w-full">
          <img src={logoImg} alt="" className="w-[150px]" />
        </div>
      </div>
    </div>
  );
};
