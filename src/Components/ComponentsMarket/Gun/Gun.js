import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoicesGun } from "./dataGun";
import Roll from "react-reveal/Roll";
import "./Gun.css";
const Gun = (props) => {
  let invoicesGun = getInvoicesGun();
  return (
    <div className="list">
      {invoicesGun.map((invoiceGun) => (
        <Roll top>
          <div className="item item-gun">
            <Link to={`/marketplace`}>
              <img className="img-gun" src={invoiceGun.img} alt="Gun" />
            </Link>
            <h1 className="name-item name-item-gun">
              <p1>Name: {invoiceGun.name}</p1>
              <br />
              <p1>#{invoiceGun.number}</p1>
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

export default Gun;
