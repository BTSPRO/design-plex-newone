import HomeBrand from "./home-all-components/HomeBrand";
import HomeOurServices from "./home-all-components/HomeOurServices";
import HomeRecent from "./home-all-components/HomeRecent";

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
