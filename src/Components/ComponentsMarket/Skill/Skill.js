import React from "react";
import { Link , Outlet} from "react-router-dom";
import { getInvoicesSkill } from "./dataSkill";
import "./Skill.css"
const Handle = (props) => {
  let invoicesSkill = getInvoicesSkill();
  return (

    <div className="list">
    {invoicesSkill.map((invoiceSkill) => (
        <div className="item item-skill">
        <Link to={`/marketplace`}>
        <img className="img-skill" src={invoiceSkill.img} />
        </Link>
        <h1 className="name-item">
              <p1>Name: {invoiceSkill.name}</p1>
              <br />
              <p1>#{invoiceSkill.number}</p1>
              <br />
              <div className="price-item">
                Price: 12
                <div className="weth-logo"></div>
              </div>
            </h1>
 
        </div>
  
    ))}
    <Outlet />
  </div>

  );
};

export default Handle;
