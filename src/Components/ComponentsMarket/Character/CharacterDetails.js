import React from 'react'
import {Link, useParams, useLocation} from "react-router-dom"
import { getInvoice } from './data';
const CharacterDetails = (props) => {
    const {id} = useParams();
    let invoice = getInvoice(parseInt(id, 10)); 
    console.log("URL : " + id)

  return (
    <>
    <h1>Title Of Page 2</h1>
    <img src={invoice.img} alt="image"/>
    <p1>Number: {id}</p1><br/>
    <h1>Name: {invoice.name}</h1><br/>
    <h1>Amount: {invoice.amount}</h1><br/>
    <h1>Aue: {invoice.due}</h1><br/>
    <Link to="/marketplace">Page 1</Link>
    </>
  )
}

export default CharacterDetails;