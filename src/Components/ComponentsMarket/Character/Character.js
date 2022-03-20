import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "./data";
import "./Character.css";
const Character = (props) => {
  let invoices = getInvoices();
  return (
    <>
      <div className="list">
        {invoices.map((invoice) => (
          <div className="item">
            <Link to={`/marketplace`}>
              <img className="img" src={invoice.img} />
            </Link>
            <h1 className="name-item">
              <p1>Name: {invoice.name}</p1>
              <br />
              <p1>#{invoice.number}</p1>
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
    </>
  );
};

export default Character;
