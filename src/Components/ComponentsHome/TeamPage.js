import React from "react";
import "./TeamPage.css";
const TeamPage = ({ name, img, position, social, socialLogo }) => {
  return (
    <>
      <div className="team">
        <img src={img} className="image" alt="Team" />
        <p1 className="name-team">{name}</p1>
        <p1 className="name-position">{position}</p1>
        <a
          className="social-team"
          target="_blank"
          rel="noopener noreferrer"
          href={social}
        >
          <i class={socialLogo} />
        </a>
      </div>
    </>
  );
};

export default TeamPage;
