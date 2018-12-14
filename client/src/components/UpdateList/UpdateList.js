import React, { Component } from "react";
import "./updateList.css";


const UpdateList = (props) => (

  <div>
    <h1>List of all companies to update</h1>
    <ul>
      {props.allCompanies.map(company => (
        <li key={company.company}>
          <div>Company Name: {company.company}</div>
          <div>Search Terms: {company.searchWords}</div>
          <button onClick={() => props.makeChanges(company.company, company.searchWords)}>Update Info</button>

          <button onClick={() => props.removeCompany(company.company)}>Remove Company</button>


          <br></br>
          <div>______________________________________</div>
        </li>
      ))}
    </ul>
  </div>

);

export default UpdateList;


