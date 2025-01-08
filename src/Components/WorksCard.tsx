import Image, { StaticImageData } from "next/image";
import React from "react";
import ForwardArrow from "@/Assets/Icons/ForwardArrow";
import { motion } from "framer-motion";

type Props = {
  image: string | StaticImageData;
  projectName: string;
  details: string;
  className?: string;
  onClick?: () => void;
};

const WorksCard: React.FC<Props> = ({
  image,
  projectName,
  details,
  className,
  onClick,
}) => {
  return (
    <div className="bg-[#E4E4E4] p-3 md:p-8 rounded-[32px] flex items-center max-w-[582px] flex-wrap mx-auto justify-center h-full">
      <Image
        src={image}
        alt={`${projectName}  preview`}
        className=" h-[20rem] w-full object-contain"
      />
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(33, 88, 44, 1)",
        }}
        onClick={onClick}
        className={`flex items-center  py-2 font-medium px-2 text-lg rounded-[20px] text-[#1A1A1A] cursor-pointer ${className}`}
      >
        <div className="bg-[#CDD7B9] flex flex-col rounded-[20px] gap-6 py-7 px-8 ">
          <span className="flex justify-between items-center">
            <h5 className="text-[#1C1C1C] text-xl font-bold my-4">
              {projectName}
            </h5>
            <div>
              <ForwardArrow />
            </div>
          </span>
          <p className="text-[#333333] text-base font-normal  md:text-justify">
            {details}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WorksCard;
