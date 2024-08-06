import React, { useState } from "react";
import LeftSection from "../../leftSection/LeftSection";
import "./RightTop.css";

const RightTop = () => {
  const [hamburger, setHamburger] = useState(false);

  function hanldeHamburger () {
    setHamburger(!hamburger)
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 780 && hamburger === true) {
      setHamburger(false)
    }
});

  return (
    <div className="righ_top_main">
      <div className="right_top_right">
        <div className="hambruger_container" onClick={hanldeHamburger}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        <div className="search_container">
          <input type="text" placeholder="Search" className="search_input" />
          <img src="./Search Icon.png" alt="" className="search_input_icon" />
        </div>
        <div className="help_container">
          <img src="./help.png" alt="" className="help_icon" />
          <span className="help_text">Help</span>
        </div>
        <div className="alert_container">
          <img src="./notification 1.png" alt="" className="alert_icon" />
          <span className="alert_text">Alerts</span>
          <div className="notification_count_container">
            <p className="notification_count">29</p>
          </div>
        </div>
        <div className="email_container">
          <img src="./email 1.png" alt="" className="email_icon" />
          <span className="email_text">Alerts</span>
          <div className="notification_count_container">
            <p className="notification_count">29</p>
          </div>
        </div>
      </div>

      <div className="pro_section_container">
        <div className="ms_employee_container">
          <p className="first">
            Ms. Employee<span className="second"> Product Manager</span>
          </p>
        </div>
        <div>
          <img src="./image 1.png" alt="" className="pro_icon" />
        </div>
      </div>

      {hamburger ? (
        <div className="hamburger_left_section" id="burger">
          <LeftSection />
        </div>
      ) : null}
    </div>
  );
};

export default RightTop;
