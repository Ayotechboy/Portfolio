import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Bio from "./Bio";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="flex min-h-screen flex-col px-5 lg:px-24 max-w-full gap-20">
      <NavBar />
      <Bio />
      <Projects />
      <Footer />
    </div>
  );
};

export default Homepage;
