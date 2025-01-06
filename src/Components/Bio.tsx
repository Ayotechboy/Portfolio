import React from "react";
import starboy from "@/Assets/Images/starboy.png";
import Image from "next/image";
import greenImage from "@/Assets/Images/greenImage.png";
import Dots from "@/Assets/Icons/Dots";
import Curvy from "@/Assets/Icons/Curvy";

const Bio = () => {
  return (
    <section className=" flex justify-between text-[#2A3E04] max-w-full items-center pr-24 text-center lg:text-start ">
      <div className=" flex flex-col gap-[44px]">
        <p className=" text-4xl font-semibold">Hi, I’m Ayodeji</p>
        <p className=" text-4xl font-bold">- a Front-End Engineer.</p>
        <p className=" text-xl font-semibold">
           Who loves creating smooth and easy-to-use
          user interfaces. <br /> With strong skills in React, I build digital
          experiences that are simple, functional, and creatively unique. <br />{" "}
          I focus on understanding what users need and turning those ideas into
          clean, effective, and reliable code.
        </p>
      </div>
      <span className=" relative w-max hidden lg:block ">
        <div className=" absolute bottom-[72%] right-[72%] -z-10  ">
          <Dots />
        </div>
        {/* <div className="">
          <Image
            className=" max-w-[8rem] max-h-[8rem] absolute bottom-[82%] right-[82%] -z-10"
            src={greenImage}
            alt=""
          />{" "}
        </div> */}
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
