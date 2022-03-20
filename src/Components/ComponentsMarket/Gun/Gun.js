import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoicesGun } from "./dataGun";
import "./Gun.css";
const Gun = (props) => {
  let invoicesGun = getInvoicesGun();
  return (
    <div className="list">
      {invoicesGun.map((invoiceGun) => (
        <div className="item item-gun">
          <Link to={`/marketplace`}>
            <img className="img-gun" src={invoiceGun.img} />
          </Link>
          <h1 className="name-item name-item-gun">
              <p1>Name: {invoiceGun.name}</p1><br/>
              <p1>#{invoiceGun.number}</p1>
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

export default Gun;
