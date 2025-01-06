"use client";
import React, { useState } from "react";
import ArrowDown from "../Assets/Icons/ArrowDown";
import WorksCard from "./WorksCard";
import CustomButton from "./Button";
import Jamajama2 from "@/Assets/Images/jamajama2.png";
import Kindles2 from "@/Assets/Images/Kindles (2).png";
import NGPT from "@/Assets/Images/NGPT.png";
import Langeazy from "@/Assets/Images/Langeazy.png";
import euphrates from "@/Assets/Images/euphrates.png";
import backoffice from "@/Assets/Images/backoffice.png";

const Works = [
  {
    image: Langeazy,
    projectName: "langeasy.ai",
    details:
      " Nigeria's largest and most inclusive multilingual AI model. LangEasy allows users to  record audio samples by translating English sentences into Nigerian languages such as Yoruba, Hausa, Igbo, Pidgin, and Ibibio.",
    onClick: () => window.open("https://langeasy.ai", "_blank"),
  },
  {
    image: NGPT,
    projectName: "naijaGPT",
    details:
      "An advanced Multilingual Conversational Model which engages in instant conversations that simulate real-life dialogues.",
    onClick: () => window.open("https://naijagpt.ai/", "_blank"),
  },
  {
    image: Jamajama2,
    projectName: "JamaJama",
    details:
      "A website that serves as a bridge,connecting artisans from various disciplines to people in need of their exceptional services.",
    onClick: () => window.open("https://jamajama.com/", "_blank"),
  },
  {
    image: Kindles2,
    projectName: "Little Kindles Africa",
    details:
      "LKA is dedicated to supporting the basic education of underserved children in Africa. Our mission is to provide every form of support that promotes education in Africa, reaching over 3,000 children across Lagos, Oyo, and Ogun States. ",
    onClick: () =>
      window.open("https://www.littlekindlesafrica.org/", "_blank"),
  },
  {
    image: euphrates,
    projectName: "Euphratestech",
    details:
      "A project made for a software development company dedicated to creating innovative solutions that transform everyday activities.",
    onClick: () => window.open("https://euphratestech.com/", "_blank"),
  },
  {
    image: backoffice,
    projectName: "BackOffice",
    details:
      "A tool used to Annotate and Audit data collected for quality assurance purposes to enhance efficiency in data analysis",
      onClick: () => window.open("https://backoffice-langeasy-tk7ash3eaa-uc.a.run.app/", "_blank"),
  },
];
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  const displayedWorks = showAll ? Works : Works.slice(0, 2);

  return (
    <section id="projects" className=" flex flex-col gap-[72px]">
      <div className=" flex gap-[56px] items-center">
        <p className=" text-xl font-semibold text-[#2A3E04] ">
          Explore a selection of my projects below
        </p>
        <ArrowDown />
      </div>
      <div className="max-w-[full] items-center gap-8 justify-between grid md:grid-cols-[repeat(auto-fit,minmax(528px,1fr))] ">
        {displayedWorks.map((item, index) => (
          <WorksCard
            key={index}
            image={item.image}
            projectName={item.projectName}
            details={item.details}
            onClick={item.onClick}
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
