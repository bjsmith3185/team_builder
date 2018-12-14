import React, { Component } from "react";
import "./resultsSelection.css";


const ResultsSelection = (props) => (

  <div>
    <h1>List of all companies</h1>
    <ul>
      {props.allCompanies.map(company => (
        <li key={company._id}>
          <div>Company Name: {company.company}</div>
          <div>Search Terms: {company.searchWords}</div>
          <button onClick={() => props.runSearch(company.company)}>Run Search</button>


          <br></br>
          <div>______________________________________</div>
        </li>
      ))}
    </ul>
  </div>

);

export default ResultsSelection;


