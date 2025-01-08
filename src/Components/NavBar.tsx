"use client";
import React, { useState } from "react";
import ArrowIcon from "../Assets/Icons/ArrowIcon";
import Toggle from "../Assets/Icons/Toggle";
import CustomButton from "./Button";
import { Langar } from "next/font/google";

const langar = Langar({
  subsets: ["latin"],
  weight: "400",
});
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <div className=" flex items-center justify-between  ">
      <p
        className={`font-bold text-[#1A1A1A] lg:text-8xl text-4xl ${langar.className}`}
      >
        AIA
      </p>
      <div className="flex lg:py-[70px] py-[15px] max-w-full flex-wrap items-center justify-end text-[#1A1A1A] text-lg font-medium mt-4">
        <div
          className={`items-center justify-evenly ${
            open
              ? "flex flex-col absolute top-20 right-1 z-[100] bg-white px-12 py-5 rounded-md gap-[50px]"
              : "bg-transparent hidden lg:flex-row lg:flex lg:justify-between gap-[50px]"
          }`}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-transparent text-[#4C4C4D] font-normal hover:underline"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-transparent text-[#4C4C4D] font-normal hover:underline"
          >
            Contact
          </button>
          <CustomButton
            text="View Resume"
            icon={<ArrowIcon />}
            className="bg-[#CDF482] rounded-xl gap-[10px] py-4 px-5 max-w-[176px] items-center"
            onClick={openResume}
          />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="place-self-end my-auto lg:hidden px-2 "
        >
          {open ? <Toggle /> : <Toggle />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
