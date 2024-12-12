import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Bio from "./Bio";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <div className="flex min-h-screen flex-col px-5 lg:px-20 sm:px-10 md:px-10 max-w-full gap-20 ">
      <NavBar />
      <Bio />
      <Projects />
      <Contact />
    </div>
  );
};

export default Homepage;
