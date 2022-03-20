import React from 'react'
import {Link, useParams} from "react-router-dom"
import { getInvoiceSkill } from './dataSkill';
const SkillDetails = (props) => {
    const {id} = useParams();
    let invoiceSkill = getInvoiceSkill(parseInt(id, 10)); 
    console.log("URL : " + id)

  return (
    <>
    <h1>Title Of Page 2</h1>
    <img src={invoiceSkill.img} alt="image"/>
    <p1>Number: {id}</p1><br/>
    <h1>Name: {invoiceSkill.name}</h1><br/>
    <h1>Amount: {invoiceSkill.amount}</h1><br/>
    <h1>Aue: {invoiceSkill.due}</h1><br/>
    <Link to="/marketplace">Page 1</Link>
    </>
  )
}

export default SkillDetails;