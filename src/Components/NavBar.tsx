"use client";
import React from "react";
import ArrowIcon from "../Assets/Icons/ArrowIcon";
import Toggle from "../Assets/Icons/Toggle";
import Link from "next/link";
import CustomButton from "./Button";
import { div } from "motion/react-client";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const pathname = usePathname();
  return (
    <div className=" flex  lg:py-[70px] py-[15px] max-w-full flex-wrap items-center justify-end text-[#1A1A1A] text-lg font-medium">
      <div
        className={` items-center justify-evenly  ${
          open
            ? "flex flex-col absolute top-20 right-1 z-[100] bg-white px-12 py-5 rounded-md gap-[50px]"
            : "bg-transparent hidden lg:flex-row lg:flex lg:justify-between gap-[50px]"
        }`}
      >
        <Link
          href={"/Projects"}
          className={`text-[#4C4C4D] font-normal ${
            pathname === "/Projects" &&
            "bg-[#F7F7F8] py-3 px-4 border border-[#F1F1F3] rounded-[100px] text-[#1A1A1A]"
          }`}
        >
          Projects
        </Link>
        <Link
          href={"/Footer"}
          className={`text-[#4C4C4D] font-normal ${
            pathname === "/Footer" &&
            "bg-[#F7F7F8] py-3 px-4 border border-[#F1F1F3] rounded-[100px] text-[#1A1A1A]"
          }`}
        >
          Contact
        </Link>
        <CustomButton
          text="View Resume"
          icon={<ArrowIcon />}
          className=" bg-[#CDF482] rounded-xl gap-[10px] py-4 px-5 max-w-[176px] items-center"
          href={""}
        />
      </div>

      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="place-self-end my-auto lg:hidden px-2"
      >
        {open ? <Toggle /> : <Toggle />}
      </button>
    </div>
  );
};

export default NavBar;
