import React from "react";
import { Link } from "react-router-dom";
import Jump from "react-reveal/Jump";
import "./Homemain.css";
import mainImag from "./../../assets/mainImage1.png";
import mainImag2 from "./../../assets/mainImage2.png";
import mainImag3 from "./../../assets/mainImage3.png";
const Homemain = () => {
  /*const copyText = async () => {
    await navigator.clipboard.writeText(
      "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
    );
  };*/
  return (
    <>
      <div className="homemain-container">
        <div className="social-bar">
          <Jump>
            <a
              href="https://github.com/landogameofficial"
              rel="noreferrer"
              target="_blank"
              className="social-icon-link"
            >
              <i class="fab fa-github" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCkf0baLkUqnvRQVXWJ1766Q"
              rel="noreferrer"
              target="_blank"
              className="social-icon-link"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              href="https://twitter.com/Lando_game"
              rel="noreferrer"
              target="_blank"
              className="social-icon-link"
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              href="https://t.me/landogame"
              rel="noreferrer"
              target="_blank"
              className="social-icon-link"
            >
              <i class="fab fa-telegram-plane" />
            </a>
          </Jump>
        </div>

        <div>
          <div>
            <h1 className="text-h">
              <b>Lando </b> is a play to earn metaverse game on Binance Smart
              Chain platform.
            </h1>
          </div>

          <div>
            <div className="text-p">
              <p1>
                Blockchain elements in this game are most often based on the use
                of cryptocurrency or non-fungible tokens (NFTs) which players
                can buy, earn, or trade with other players.
              </p1>
            </div>

            <div className="h-contract">
              <p1>Contract Address</p1>
            </div>
            <div className="btn-container">
              <div className="btn-contract">
                <p1>
                  The contract isn't released yet
                  <i  class="fas fa-copy" />
                </p1>
              </div>
              <Link className="link-game" target="_blanke" to="/playgame">
                <div className="btn-contract btn-game">
                  <p1>Play Game</p1>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="main-image">
          <img src={mainImag} alt="background" />
          <img src={mainImag2} alt="background" />
          <img src={mainImag3} alt="background" />
        </div>
        <div className="main-image-mobile">
          <img src={mainImag} alt="background" />
        </div>
      </div>
    </>
  );
};

export default Homemain;
