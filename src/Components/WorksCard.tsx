import Image from "next/image";
import React from "react";
import ForwardArrow from "@/Assets/Icons/ForwardArrow";

const WorksCard = ({
  image,
  projectName,
  details,
}: {
  image: any;
  projectName: string;
  details: string;
}) => {
  return (
    <div className="bg-[#E4E4E4] p-3 md:p-8 rounded-[32px] flex items-center max-w-[582px] justify-center flex-wrap mx-auto ">
      <Image src={image} alt="" />
      <div className=" bg-[#CDD7B9] flex flex-col rounded-[20px] gap-6 py-7 px-8">
        <span className=" flex  justify-between items-center">
          <h5 className="text-[#1C1C1C] text-xl font-bold my-4 ">
            {projectName}
          </h5>
          <div>
            <ForwardArrow />
          </div>
        </span>
        <p className="text-[#333333] text-base font-normal text-center md:text-justify">
          {details}
        </p>
      </div>
    </div>
  );
};

export default WorksCard;
