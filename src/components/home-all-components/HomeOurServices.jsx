import React from "react";
import { OurServicesCardDatas } from "../../all-datas/EveryDatas";
import HomeOurServicesCard from "./HomeOurServicesCard";
import "../home-all-components/HomeOurSerices.css";

const HomeOurServices = () => {
  return (
    <>
      <div className="main-service">
        <p className="our-service">
          Our <span className="primary-text">services</span>
        </p>
        <p className="design-section">
          Ready to boost your brand's image? Order now and get <br /> best
          services from <span className="primary-text">Design Hub </span>
          experts!
        </p>

        <div className="card">
          {OurServicesCardDatas.map((card) => (
            <HomeOurServicesCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeOurServices;
