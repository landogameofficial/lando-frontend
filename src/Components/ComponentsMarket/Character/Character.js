import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "./data";
import Roll from "react-reveal/Roll";
import "./Character.css";
const Character = (props) => {
  let invoices = getInvoices();
  return (
    <>
      <div className="list">
        {invoices.map((invoice) => (
          <Roll top>
            <div className="item">
              <Link to={`/marketplace`}>
                <img className="img" src={invoice.img} alt="Character" />
              </Link>
              <h1 className="name-item">
                <p1>Name: {invoice.name}</p1>
                <br />
                <p1>#{invoice.number}</p1>
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
    </>
  );
};

export default Character;
