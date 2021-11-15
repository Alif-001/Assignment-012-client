import React from "react";
import ReviewShow from "../../Review/ReviewShow/ReviewShow";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Tradeoffer from "../../Shared/Tradoffer/Tradeoffer";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <ReviewShow></ReviewShow>
      <Tradeoffer></Tradeoffer>
      <Footer></Footer>
    </div>
  );
};

export default Home;
