import React from "react";
import Fade from "react-reveal/Fade";
import "./GamePlay.css";
const GamePlay = () => {
  return (
    <>
      <div className="teaser-container">
        <Fade top>
          <h1>GamePlay</h1>
        </Fade>
        <iframe
          className="teaser"
          src="https://www.youtube.com/embed/KizuMLwAncA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default GamePlay;
