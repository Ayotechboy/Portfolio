"use client"
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
    
    <div className=" flex gap-[50px] py-[70px] max-w-full flex-wrap items-center justify-end ">
        <div
        className={` items-center justify-evenly  ${
          open
            ? "flex flex-col absolute top-20 right-1 z-[100] bg-white px-12 py-5 rounded-md"
            : "bg-transparent hidden lg:flex-row lg:flex lg:justify-between"
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
