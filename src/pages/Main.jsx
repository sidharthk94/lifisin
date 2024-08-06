import React from "react";
import LeftSection from "../componence/leftSection/LeftSection";
import RightSection from "../componence/rightSection/RightSection";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="left_section">
        <LeftSection />
      </div>
      <RightSection />
    </div>
  );
};

export default Main;
