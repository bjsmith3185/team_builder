import React, { Component } from "react";
import "./resultsList.css";


const ResultsList = (props) => (

  <div>
    <h1>Results List</h1>
    <ul>
      {props.companyMatches.map(resume => (
        <li key={resume.name}>
          <h4>{resume.name}</h4>
          <p>{resume.resume}</p>
          <div>________________________</div>
          <br />
        </li>


      ))}
    </ul>
  </div>

);

export default ResultsList;


