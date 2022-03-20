import React from "react";
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
      <RoadMap />
      <GamePlay />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home;