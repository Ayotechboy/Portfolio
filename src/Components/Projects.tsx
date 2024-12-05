"use client";
import React, { useState } from "react";
import ArrowDown from "../Assets/Icons/ArrowDown";
import WorksCard from "./WorksCard";
import CustomButton from "./Button";
import starboy from "@/Assets/Images/starboy.png";

const Works = [
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

  const displayedWorks = showAll ? Works : Works.slice(0, 4);

  return (
    <section className=" flex flex-col gap-[72px]">
      <div className=" flex gap-[56px] items-center">
        <p className=" text-xl font-semibold text-[#2A3E04] ">
          Explore a selection of my projects below
        </p>
        <ArrowDown />
      </div>
      <div className="max-w-full grid items-center gap-8 justify-center md:grid-cols-2">
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
