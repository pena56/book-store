import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Advert from "../Advert/Advert";
import Section from "../Section/Section";
import Subscribe from "../Subscribe/Subscribe";

function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Advert />
      <Section />
      <Subscribe />
    </>
  );
}

export default Home;
