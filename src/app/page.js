import React from "react";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection
        title={"LETS WATCH NETFLIX TOGETHER!"}
        imgURL={"/home.svg"}
      />
    </div>
  );
};

export default Home;
