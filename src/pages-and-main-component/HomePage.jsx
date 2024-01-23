import React from "react";
import HomeBrand from "../components/home-all-components/HomeBrand";
import HomeRecent from "../components/home-all-components/HomeRecent";
const HomePage = () => {
  return (
    <>
      <HomeRecent />
      <HomeBrand />
      <HomeOurServices />
    </>
  );
};

export default HomePage;
