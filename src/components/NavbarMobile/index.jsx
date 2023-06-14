/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { XCloseIcon } from "../Icons";
import logoImg from "../../assets/Logo.png";

export const NavbarMobile = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Transition.Root show={sidebarOpen} as={React.Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-40 flex md:hidden"
        open={sidebarOpen}
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={React.Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-400" />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white py-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XCloseIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Transition.Child>
            <div className="flex shrink-0 items-center px-4">
              <img src={logoImg} alt="" className="w-[150px]" />
            </div>
            <div className="mt-5 flex flex-grow flex-col overflow-y-auto">
              <nav
                className="flex-1 space-y-1 bg-white px-4 py-2"
                aria-label="Sidebar"
              >
                <div className="w-full flex gap-5 flex-col">
                  <ul className="flex flex-col gap-3">
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
                  <button className="bg-[#299FFF] text-white px-8 py-[14px] text-sm font-bold rounded-[10px]">
                    Join Us
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </Transition.Child>
        <div className="w-14 shrink-0" aria-hidden="true"></div>
      </Dialog>
    </Transition.Root>
  );
};
