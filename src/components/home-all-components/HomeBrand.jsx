import React from "react";
import "../home-all-components/HomeBrand.css";

const HomeBrand = () => {
  return (
    <div className="maindiv">
      <div className="branddiv">
        <div className="brand-info">
          <p className="percent">90+</p>
          <p className="project">Project Completed</p>
        </div>
        <div className="brand-info">
          <p className="percent">70+</p>
          <p className="project">Design Project</p>
        </div>
        <div className="brand-info">
          <p className="brandname">
            Your <strong>Brand</strong>
            <br /> Our
            <span className="workcolor">
              <strong> Passion</strong>
            </span>
          </p>
        </div>
        <div className="brand-info">
          <p className="percent">50+</p>
          <p className="project">Dev Project</p>
        </div>
        <div className="brand-info">
          <p className="percent">99.9%</p>
          <p className="project">Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBrand;
