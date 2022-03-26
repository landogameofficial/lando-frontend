import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoicesSkill } from "./dataSkill";
import Roll from "react-reveal/Roll";
import "./Skill.css";
const Handle = (props) => {
  let invoicesSkill = getInvoicesSkill();
  return (
    <div className="list">
      {invoicesSkill.map((invoiceSkill) => (
        <Roll top>
        <div className="item item-skill">
          <Link to={`/marketplace`}>
            <img className="img-skill" src={invoiceSkill.img} alt="Skill" />
          </Link>
          <h1 className="name-item">
            <p1>Name: {invoiceSkill.name}</p1>
            <br />
            <p1>#{invoiceSkill.number}</p1>
            <br />
            <div className="price-item">
              Price: --
              <div className="weth-logo"></div>
            </div>
          </h1>
        </div>
      </Roll>
      ))}
      <Outlet />
    </div>
  );
};

export default Handle;
