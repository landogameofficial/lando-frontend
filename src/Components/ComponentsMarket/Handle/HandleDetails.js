import React from 'react'
import {Link, useParams} from "react-router-dom"
import { getInvoiceHandle } from './dataHandle';
const HandleDetails = (props) => {
    const {id} = useParams();
    let invoiceHandle = getInvoiceHandle(parseInt(id, 10)); 
    console.log("URL : " + id)

  return (
    <>
    <h1>Title Of Page 2</h1>
    <img src={invoiceHandle.img} alt="image"/>
    <p1>Number: {id}</p1><br/>
    <h1>Name: {invoiceHandle.name}</h1><br/>
    <h1>Amount: {invoiceHandle.amount}</h1><br/>
    <h1>Aue: {invoiceHandle.due}</h1><br/>
    <Link to="/marketplace">Page 1</Link>
    </>
  )
}

export default HandleDetails;