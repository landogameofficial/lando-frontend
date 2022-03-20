import React from 'react'
import {Link, useParams } from "react-router-dom"
import { getInvoiceGun } from './dataGun';
const GunDetails = (props) => {
    const {id} = useParams();
    let invoiceGun = getInvoiceGun(parseInt(id, 10)); 
    console.log("URL : " + id)

  return (
    <>
    <h1>Title Of Page 2</h1>
    <img src={invoiceGun.img} alt="image"/>
    <p1>Number: {id}</p1><br/>
    <h1>Name: {invoiceGun.name}</h1><br/>
    <h1>Amount: {invoiceGun.amount}</h1><br/>
    <h1>Aue: {invoiceGun.due}</h1><br/>
    <Link to="/marketplace">Page 1</Link>
    </>
  )
}

export default GunDetails;