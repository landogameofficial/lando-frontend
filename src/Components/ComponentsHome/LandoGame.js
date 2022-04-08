import React from "react";
import "./LandoGame.css";
class LandoGame extends React.Component {
  render() {
    return (
      <div className="game-container">
        <div className="header-game">This game is a Lando game demo</div>
        <div>
          <object
            aria-labelledby="label"
            className="lando-game"
            type="text/html"
            data="https://venge.io"
          ></object>
        </div>
      </div>
    );
  }
}

export default LandoGame;
