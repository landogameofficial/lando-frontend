import React from "react";
import Fade from 'react-reveal/Fade';
import "./Team.css";
import TeamPage from "./TeamPage";
import image1 from "./../../assets/teamImage1.jpeg"
import image2 from "./../../assets/teamImage2.jpeg"
import image3 from "./../../assets/teamImage3.jpeg"
import image4 from "./../../assets/teamImage4.jpeg"
import image5 from "./../../assets/teamImage5.jpeg"
import image6 from "./../../assets/teamImage6.jpeg"
import image7 from "./../../assets/teamImage7.jpeg"
import image8 from "./../../assets/teamImage8.jpeg"


const Team = () => {
  return (
    <>
        <div className="team-section">
            <Fade top>
              <h1 className="team-header">About Team:</h1>
            </Fade>
            <Fade left>
            <div className="team-container">
                <TeamPage name={"David Eraso"} img={image1} position={"Co-Founder"} social={"https://www.linkedin.com/in/amir-faraji-b58a80201"} />
                <TeamPage name={"Shubham Kunbi"} img={image2} position={"Web Developer"} social={"https://www.linkedin.com/in/shubham-kunbi-7a0ba7179"} />
                <TeamPage name={"Zeekg"} img={image3} position={"Web Developer"} social={"https://github.com/Zeekg-zk"} linkedin={"false"} />
                <TeamPage name={"Bay"} img={image4} position={"Game Developer"} social={"https://github.com/Unity7"} linkedin={"false"}/>
                <TeamPage name={"Sunayanaa Rreddy"} img={image5} position={"3D Designer"} social={"https://www.linkedin.com/in/sunayanaa-rreddy-895bb8176"} />
                <TeamPage name={"Almra  Qauter"} img={image6} position={"Game Developer"} social={"https://github.com/UnityNinja"} linkedin={"false"} />
                <TeamPage name={"Mico Richa"} img={image7} position={"Blockchain Developer"} social={"https://google.com"} linkedin={"false"} />
                <TeamPage name={"Kate Anos"} img={image8} position={"Advertising Manager"} social={"https://www.linkedin.com/in/katherinebanos"} />
            </div>
            </Fade>
        </div >
    
    </>
  );
};

export default Team;
