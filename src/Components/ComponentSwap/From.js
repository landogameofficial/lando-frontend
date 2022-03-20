import React, { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./ContractAbi";
import { parseEther, parseUnits } from "ethers/lib/utils";
import "./Form.css";
const From = (props) => {
  const [amount, setAmount] = useState(null);
  const signer = props.signer;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const erc = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  console.log(erc)
  const AddressTo = "0xEeccf7e58f192f5d572AADfd6f20f8128F08ACaF";
  const amountToken = parseUnits("100");

  const RequestTx = async () => {
    console.log("Clicked!")
    const tx = await erc.mint(AddressTo, amountToken)
    console.log(tx);
    await tx.wait();
  }
  return (
    <div className="form-box">
      <h3 className="form-header">KVL ICO:</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label className="label">
            <div className="logo-bnb"> </div>
            &nbsp;&nbsp;BNB:
            <div className="balance-bnb">balance: {props.balance}</div>
          </label>
          <input
            className="form-input"
            value={amount}
            type="number"
            placeholder="0.0"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <div className="icon-change">
            <i className="icon-bar" class="fas fa-chevron-circle-down"></i>
          </div>
          <label className="label">
            <div className="logo-meg"> </div>
            &nbsp;&nbsp;MEG:
          </label>

          <div className="form-result">
            <h1>{amount * 120}</h1>
          </div>
          <div className="price">
            price:&nbsp;&nbsp; 0.08 BNB per KVL{" "}
          </div>

        </div>
      </form>
      <div >
            <button className="btn-submit" onclick={RequestTx}>Mint Token</button>
          </div>
    </div>
  );
};

export default From;
