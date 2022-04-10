import React from "react";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import "./Team.css";
import TeamPage from "./TeamPage";
import image1 from "./../../assets/Team/teamImage1.jpeg"
import image2 from "./../../assets/Team/teamImage2.jpeg"
import image3 from "./../../assets/Team/teamImage3.jpeg"
import image4 from "./../../assets/Team/teamImage4.jpeg"
import image5 from "./../../assets/Team/teamImage5.jpeg"
import image6 from "./../../assets/Team/teamImage6.jpeg"
import image7 from "./../../assets/Team/teamImage7.jpeg"
import image8 from "./../../assets/Team/teamImage8.jpeg"


const Team = () => {
  return (
    <>
        <div className="team-section">
            <Fade top>
              <h1 className="team-header">Team</h1>
            </Fade>
            <div className="team-container">
            <Flip top ><TeamPage name={"David Eraso"} img={image1} position={"Co-Founder & CEO"} className="mytest" social={"https://twitter.com/daviderasoo"} socialLogo={"fab fa-twitter"} /></Flip>
            <Flip top ><TeamPage name={"Shubham Kunbi"} img={image2} position={"Web Developer"} social={"https://www.linkedin.com/in/shubham-kunbi-7a0ba7179"} socialLogo={"fab fa-linkedin"} /></Flip>
            <Flip top ><TeamPage name={"Zeekg"} img={image3} position={"Web Developer"} social={"https://github.com/Zeekg-zk"} socialLogo={"fab fa-github"} /></Flip>
            <Flip top ><TeamPage name={"Bay"} img={image4} position={"Game Developer"} social={"https://github.com/Unity7"} socialLogo={"fab fa-github"}/></Flip>
            <Flip top ><TeamPage name={"Sunayanaa Rreddy"} img={image5} position={"3D Designer"} social={"https://www.linkedin.com/in/sunayanaa-rreddy-895bb8176"} socialLogo={"fab fa-linkedin"} /></Flip>
            <Flip top ><TeamPage name={"Almra  Qauter"} img={image6} position={"Game Developer"} social={"https://github.com/UnityNinja"} socialLogo={"fab fa-github"} /></Flip>
            <Flip top ><TeamPage name={"Mico Richa"} img={image7} position={"Blockchain Developer"} social={"https://github.com/barsome"} socialLogo={"fab fa-github"} /></Flip>
            <Flip top ><TeamPage name={"Kate Anos"} img={image8} position={"Advertising Manager"} social={"https://www.linkedin.com/in/katherinebanos"}socialLogo={"fab fa-linkedin"}/></Flip>
            </div>
        </div >
    
    </>
  );
};

export default Team;
