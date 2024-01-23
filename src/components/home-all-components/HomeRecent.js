import React from "react";
import "../home-all-components/HomeRecent.css";
import pic from "../../assets/Image2.svg";
function HomeRecent() {
  return (
    <>
      <div className="main-content">
        <div className="work">
          <h2 className="worktext">
            My Recent
            <span className="workcolor"> Work</span>
          </h2>
          <span className="text2">
            showcasing my latest successes in real time, demonstrating
            <br />
            success with observable results and influence
          </span>
          <div>
            <img src={pic} alt="" />
            <div className="figmadesign">
              <p className="figma">web design</p>
              <p className="figma">figma</p>
              <p className="figma">ui ux design</p>
            </div>
            <div className="bottom">
              <h2 className="worktext">
                <span className="workcolor">viva View </span>- vR headset hero
                section
              </h2>
              <span className="text2">
                <b>Viva View:</b> you can explore an infinite world of reality
                where your imagination and <br />
                immersion collide and each look reveals a new angle.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeRecent;
