import React from "react";
import Information from "../components/sections/Information";
import FeaturesTabs from "../components/sections/FeaturesTabs";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <React.Fragment>
      <Information />
      <FeaturesTabs topDivider bottomOuterDivider />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
