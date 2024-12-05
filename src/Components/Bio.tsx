import React from "react";
import starboy from "@/Assets/Images/starboy.png";
import Image from "next/image";

const Bio = () => {
  return (
    <section className=" flex justify-between text-[#2A3E04] max-w-full">
      <div className=" flex flex-col gap-[44px]">
        <p className=" text-4xl font-semibold">Hi, I’m Ayodeji</p>
        <p className=" text-4xl font-bold">- a Front-End Engineer.</p>
        <p className=" text-xl font-semibold ">
          I focus on harnessing the power of react to craft dynamic web
          applications with seamless user experiences.
        </p>
      </div>
      <div>
        {" "}
        <Image src={starboy} alt="" />{" "}
      </div>
    </section>
  );
};

export default Bio;
