import React from "react";
import "./TeamPage.css";
const TeamPage = ({ name, img, position, social, linkedin }) => {
  return (
    <>
      <div className="team">
        <img src={img} className="image" alt="Team image" />
        <p1 className="name-team">{name}</p1>
        <p1 className="name-position">{position}</p1>
        <a
          className="social-team"
          target="_blank"
          rel="noopener noreferrer"
          href={social}
        >
          <i class={linkedin ? "fab fa-github" : "fab fa-linkedin"} />
        </a>
      </div>
    </>
  );
};

export default TeamPage;
