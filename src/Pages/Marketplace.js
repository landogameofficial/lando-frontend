import React from "react";

import Character from "../Components/ComponentsMarket/Character/Character";
import Gun from "../Components/ComponentsMarket/Gun/Gun";
import Header from "../Components/ComponentsMarket/Header";
import "./Marketplace.css"
import Handle from "../Components/ComponentsMarket/Handle/Handle";
import Skill from "../Components/ComponentsMarket/Skill/Skill";
const Marketplace = () => {
  return (
    <div className="market-container">
      <Header />
      <Character />
      <Gun />
      <Handle />
      <Skill />
    </div>
  );
};

export default Marketplace;
