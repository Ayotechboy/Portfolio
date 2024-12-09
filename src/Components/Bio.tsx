import React from "react";
import starboy from "@/Assets/Images/starboy.png";
import Image from "next/image";
import Dots from "@/Assets/Icons/Dots";
import Curvy from "@/Assets/Icons/Curvy";

const Bio = () => {
  return (
    <section className=" flex justify-between text-[#2A3E04] max-w-full items-center">
      <div className=" flex flex-col gap-[44px]">
        <p className=" text-4xl font-semibold">Hi, I’m Ayodeji</p>
        <p className=" text-4xl font-bold">- a Front-End Engineer.</p>
        <p className=" text-xl font-semibold ">
          I focus on harnessing the power of react to craft dynamic web
          applications with seamless user experiences.
        </p>
      </div>
      <span>
        <div className=" relative top-16 right-16 -z-10">
          <Dots />
        </div>
        <div>
          {" "}
          <Image src={starboy} alt="" />{" "}
        </div>
        <div className=" relative bottom-[20rem] left-[2rem] -z-10">
          <Curvy/>
        </div>
        <div className=" relative bottom-[31rem] left-[19rem] -z-10">
          <Dots />
        </div>
      </span>
    </section>
  );
};

export default Bio;
