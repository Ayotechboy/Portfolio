import React from "react";
import starboy from "@/Assets/Images/starboy.png";
import Image from "next/image";
import Dots from "@/Assets/Icons/Dots";
import Curvy from "@/Assets/Icons/Curvy";

const Bio = () => {
  return (
    <section className=" flex justify-between text-[#2A3E04] max-w-full items-center pr-24">
      <div className=" flex flex-col gap-[44px]">
        <p className=" text-4xl font-semibold">Hi, I’m Ayodeji</p>
        <p className=" text-4xl font-bold">- a Front-End Engineer.</p>
        <p className=" text-xl font-semibold ">
          I focus on harnessing the power of react to craft dynamic web
          applications with seamless user experiences.
        </p>
      </div>
      <span className=" relative w-max">
        <div className=" absolute bottom-[82%] right-[82%] -z-10">
          <Dots />
        </div>
        <div className="  after:border-[#CDF482] after:border-[2px] after:rounded-[24px] after:w-full after:p-4 after:absolute after:bottom-[-12%] after:right-[-12%] after:h-full after:-z-10">
          {" "}
          <Image src={starboy} alt="" />{" "}
        </div>

        {/* <div className=" absolute bottom-[-12%] right-[-12%] -z-10">
          <Curvy />
        </div> */}
        <div className=" absolute bottom-[10%] right-[-27%] -z-10 ">
          <Dots fill="#564A9F" />
        </div>
      </span>
    </section>
  );
};

export default Bio;
