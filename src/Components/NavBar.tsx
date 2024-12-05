"use client";
import React from "react";
import ArrowIcon from "../Assets/Icons/ArrowIcon";
import Toggle from "../Assets/Icons/Toggle";
import Link from "next/link";
import CustomButton from "./Button";
import { div } from "motion/react-client";

const NavBar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  // const pathname = usePathname();
  return (
    <div className=" flex  py-[70px] max-w-full flex-wrap items-center justify-end text-[#1A1A1A] text-lg font-medium">
      <div
        className={` items-center justify-evenly  ${
          open
            ? "flex flex-col absolute top-20 right-1 z-[100] bg-white px-12 py-5 rounded-md gap-[50px]"
            : "bg-transparent hidden lg:flex-row lg:flex lg:justify-between gap-[50px]"
        }`}
      >
        <Link href={""}>Projects</Link>
        <Link href={""}>Contact</Link>
        <CustomButton
          text="View Resume"
          icon={<ArrowIcon />}
          className=" bg-[#CDF482] rounded-xl gap-[10px] py-4 px-5 max-w-[176px] items-center"
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
