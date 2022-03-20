import React, {useState, useEffect} from"react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Swap from "./Pages/Swap";
import CharacterDetails from  "./Components/ComponentsMarket/Character/CharacterDetails.js";
import GunDetails from  "./Components/ComponentsMarket/Gun/GunDetails.js";
import HandleDetails from  "./Components/ComponentsMarket/Handle/HandleDetails.js";
import SkillDetails from  "./Components/ComponentsMarket/Skill/SkillDetails.js";
import Marketplace from "./Pages/Marketplace";

import './App.css'
const App = () => {
  return (
    <>
        
        <Router>
          <Routes>
            <Route className path="/" exact element={<Home />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/marketplace/" element={<Marketplace />}>
              <Route path="character/:id" element={<CharacterDetails />}></Route>
              <Route path="gun/:id" element={<GunDetails />}></Route>
              <Route path="handle/:id" element={<HandleDetails />}></Route>
              <Route path="skill/:id" element={<SkillDetails />}></Route>
            </Route>
          </Routes>
        </Router>
        
    </>
  );
};

export default App;
