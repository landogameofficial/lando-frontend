import React from "react";
import {Link} from "react-router-dom";
import "./Homemain.css";
import mainImag from "./../../assets/mainImage1.png";
import mainImag2 from "./../../assets/mainImage2.png";
import mainImag3 from "./../../assets/mainImage3.png";
const Homemain = () => {
  const copyText = async () => {
    await navigator.clipboard.writeText(
      "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
    );
  };
  return (
    <>
      <div className="homemain-container">

        <div className="social-bar">
            <a href="https://colorhunt.co/palette/2a09443b185fa12568fec260" target="_blank" className="social-icon-link"><i class='fab fa-github' /></a>
            <a href="https://colorhunt.co/palette/2a09443b185fa12568fec260" target="_blank" className="social-icon-link"><i class='fab fa-youtube' /></a>
            <a href="https://colorhunt.co/palette/2a09443b185fa12568fec260" target="_blank" className="social-icon-link"><i class='fab fa-twitter' /></a>
            <a href="https://colorhunt.co/palette/2a09443b185fa12568fec260" target="_blank" className="social-icon-link"><i class='fab fa-telegram-plane' /></a>
        </div>

        <div>
          <div>
            <h1 className="text-h">
              <b>Vega Game</b> is a play to earn metaverse game platform on
              Polygon network.
            </h1>
          </div>

          <div>
            <div className="text-p">
              <p1>
                This game is first game shooter on blockchain and store data
                with oracle and designed based on skill, and your speed of
                action
              </p1>
            </div>

            <div className="h-contract">
              <p1>Contract Address</p1>
            </div>
            <div className="btn-container">
              <div className="btn-contract">
                <p1>
                  0xB8c77482e45F....bDD52
                  <i onClick={copyText} class="fas fa-copy" />
                </p1>
              </div>
              <div className="btn-contract btn-game">
                <p1>Play Game</p1>
              </div>
            </div>
          </div>
        </div>
        <div className="main-image">
          <img src={mainImag} alt="Image" />
          <img src={mainImag2} alt="Image" />
          <img src={mainImag3} alt="Image" />
        </div>
        <div className="main-image-mobile">
          <img src={mainImag} alt="Image" />
        </div>
      </div>
    </>
  );
};

export default Homemain;
