"use client";
import React, { useState } from "react";
import ArrowDown from "../Assets/Icons/ArrowDown";
import WorksCard from "./WorksCard";
import CustomButton from "./Button";
import starboy from "@/Assets/Images/starboy.png";
import NGPT from "@/Assets/Images/NGPT.png";
import Langeazy from "@/Assets/Images/Langeazy.png";

const Works = [
  {
    image: Langeazy,
    projectName: "langeasy.ai",
    details:
      " Nigeria's largest and most inclusive multilingual AI model. LangEasy allows users to  record audio samples by translating English sentences into Nigerian languages such as Yoruba, Hausa, Igbo, Pidgin, and Ibibio.",
  },
  {
    image: NGPT,
    projectName: "Project Name",
    details:
      "A project developed for the rebranding of XYZ start-up to increase customer retention by 30%",
  },
  {
    image: starboy,
    projectName: "Project Name",
    details:
      "A project developed for the rebranding of XYZ start-up to increase customer retention by 30%",
  },
  {
    image: starboy,
    projectName: "Project Name",
    details:
      "A project developed for the rebranding of XYZ start-up to increase customer retention by 30%",
  },
  {
    image: starboy,
    projectName: "Project Name",
    details:
      "A project developed for the rebranding of XYZ start-up to increase customer retention by 30%",
  },
  {
    image: starboy,
    projectName: "Project Name",
    details:
      "A project developed for the rebranding of XYZ start-up to increase customer retention by 30%",
  },
];
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  const displayedWorks = showAll ? Works : Works.slice(0, 3);

  return (
    <section className=" flex flex-col gap-[72px]">
      <div className=" flex gap-[56px] items-center">
        <p className=" text-xl font-semibold text-[#2A3E04] ">
          Explore a selection of my projects below
        </p>
        <ArrowDown />
      </div>
      <div className="max-w-[full]items-center gap-8 justify-center grid md:grid-cols-[repeat(auto-fit,minmax(528px,1fr))]">
        {displayedWorks.map((item, index) => (
          <WorksCard
            key={index}
            image={item.image}
            projectName={item.projectName}
            details={item.details}
          />
        ))}
      </div>
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={toggleShowAll}
      >
        {showAll ? (
          <CustomButton
            className=" bg-[#A1AF86] text-[#333333] text-base font-medium"
            text="View less projects"
          />
        ) : (
          <CustomButton
            className=" bg-[#A1AF86] text-[#333333] text-base font-medium"
            text="View all projects"
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
