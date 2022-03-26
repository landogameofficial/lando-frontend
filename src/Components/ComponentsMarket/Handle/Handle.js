import React from "react";
import { Link , Outlet} from "react-router-dom";
import { getInvoicesHandle } from "./dataHandle";
import Roll from "react-reveal/Roll"
import "./Handle.css"
const Handle = (props) => {
  let invoicesHandle = getInvoicesHandle();
  return (

    <div className="list">
    {invoicesHandle.map((invoiceHandle) => (
      <Roll top>
        <div className="item item-handle">
        <Link to={`/marketplace`}>
        <img className="img-handle" src={invoiceHandle.img} alt="Handle"/>
        </Link>
        <h1 className="name-item">
              <p1>Name: {invoiceHandle.name}</p1>
              <br />
              <p1>#{invoiceHandle.number}</p1>
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
