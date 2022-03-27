import React from "react";
import * as Scroll from "react-scroll";
import Navbar from "../Components/ComponentsHome/Navbar";
import Homemain from "../Components/ComponentsHome/Homemain";
import RoadMap from "../Components/ComponentsHome/TimeLine"
import GamePlay from "../Components/ComponentsHome/GamePlay"
import Team from "../Components/ComponentsHome/Team";
import Partners from "../Components/ComponentsHome/Partners";
import Footer from "../Components/ComponentsHome/Footer"
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Homemain />
      <Scroll.Element  name="roadmap">
        <RoadMap />
      </Scroll.Element>
      <Scroll.Element  name="gameplay">
        <GamePlay />
      </Scroll.Element>
      <Scroll.Element name="team">
        <Team />
      </Scroll.Element>
      <Scroll.Element name="partners">
        <Partners />
      </Scroll.Element>
      
      <Footer />
    </div>
  );
}

export default Home;