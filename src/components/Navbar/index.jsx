import { useState } from "react";
import { NavbarMobile } from "../NavbarMobile";
import { MenuBarIcon } from "../Icons";

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="mt-10">
      <div className="md:flex justify-between content-center hidden">
        <div className="lg:w-[20%] w-[15%]">
          <h1>ada</h1>
        </div>
        <div className="flex lg:w-[60%] w-[70%] justify-between my-auto">
          <span className="text-base font-bold">Max For Dog</span>
          <span className="text-base font-bold">Max For Cat</span>
          <span className="text-base font-bold">Forum</span>
          <span className="text-base font-bold">Pet Talk</span>
          <span className="text-base font-bold">Max share</span>
          <span className="text-base font-bold">Contact Us</span>
        </div>
        <div className="flex justify-end  lg:w-[20%] w-[15%]">
          <button className="bg-[#299FFF] px-8 py-[14px] text-sm font-bold rounded-[10px]">
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
        <div className="text-center">tes</div>
      </div>
    </div>
  );
};
