import React from "react";
import  Fade  from "react-reveal/Fade";
import "./Partners.css"
import partnerimage1 from"./../../assets/blockchaincapital.png"
import partnerimage2 from"./../../assets/servlet.png"
import partnerimage3 from"./../../assets/8decimalcapital.png"
import partnerimage4 from "./../../assets/hasheversecapital.png";
import partnerimage5 from"./../../assets/saheelcapital.png"
import partnerimage6 from"./../../assets/exantech.png"
import partnerimage7 from "./../../assets/stasis.png"
import partnerimage8 from "./../../assets/x21digital.png"
import partnerimage9 from "./../../assets/beetroot.png"
import partnerimage10 from "./../../assets/aminocapital.png"
const Partners = () => {
  return (
    <>
    <div className="partners-section">
      <Fade top>
          <h1 className="partners-header">Partners</h1>
      </Fade>
      <Fade right>
      <div className="partners-container">
        <a href="https://www.blockchain.capital/" target="_blank" ><img src={partnerimage1} alt="partner image1"/></a>
        <a href="https://www.kaleido.io/" target="_blank"><img src={partnerimage2} alt="partner image2" /></a>
        <a href="https://www.8dcapital.com/" target="_blank"><img src={partnerimage3} alt="partner image3" /></a>
        <a href="https://www.hashversecapital.com/" target="_blank"><img src={partnerimage4} alt="partner image4" /></a>
        <a href="https://www.saheelcapital.io/" target="_blank"><img src={partnerimage5} alt="partner image5" /></a>
        <a href="https://www.exan.tech/" target="_blank"><img src={partnerimage6} alt="partner image6" /></a>
        <a href="https://www.stasis.net/" target="_blank"><img src={partnerimage7} alt="partner image7" /></a>
        <a href="https://www.x21digital.com/" target="_blank"><img src={partnerimage8} alt="partner image8" /></a>
        <a href="https://www.beetrootlab.com/" target="_blank"><img src={partnerimage9} alt="partner image9" /></a>
        <a href="https://www.aminocapital.com/" target="_blank"><img src={partnerimage10} alt="partner image10" /></a>
      </div>
      </Fade>
    </div>
    </>
  );
};

export default Partners;
