import React  from"react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import LandoGame from "./Components/ComponentsHome/LandoGame"
import Marketplace from "./Pages/Marketplace";
import './App.css'
const App = () => {
  return (
    <>
        <Router>
          <Routes>
            <Route  path="/" exact element={<Home />} />
            <Route path="/playgame" exact  element={<LandoGame />} />
            <Route path="/marketplace" exact element={<Marketplace />}>
            </Route>
          </Routes>
        </Router>
    </>
  );
};

export default App;
