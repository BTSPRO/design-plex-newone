import React from "react";
import { useNavigate } from "react-router-dom";
import { OurServicesCardDatas } from "../../all-datas/EveryDatas";
import "../home-all-components/HomeOurSerices.css";

const HomeOurServicesCard = ({ card }) => {
  const navigate = useNavigate();

  const {
    id,
    imageURL,
    title,
    description1,
    description2,
    description3,
    iconSVG,
  } = card;
  const handleOrderNowClick = () => {
    // Conditionally navigate based on the service type
    switch (id) {
      case "1":
        navigate("/design");
        break;
      case "2":
        navigate("/development");
        break;
      case "3":
        navigate("/Full-branding");
        break;
      default:
        break;
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="home-card" style={{ backgroundColor: "white" }}>
        <img className="img" src={imageURL} alt={title} />
        <div className="titlediv">
          <p className="title">{title}</p>

          <div className="flex">
            <img className="svgimage" src={iconSVG} alt=" " />
            <p className=" description">{description1}</p>
          </div>

          <div className="flex">
            <img className="svgimage" src={iconSVG} alt=" " />
            <p className="description">{description2}</p>
          </div>

          <div className="flex">
            <img className="svgimage" src={iconSVG} alt=" " />
            <p className="description">{description3}</p>
          </div>
          <button
            className="order-now"
            type="button"
            onClick={handleOrderNowClick}
          >
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeOurServicesCard;
