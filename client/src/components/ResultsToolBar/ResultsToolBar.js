import React, { Component } from "react";
import "./resultsToolBar.css";


const ResultsToolBar = (props) => (

  <div>
    <h1>Creating results for: {props.currentCompany}</h1>
    <br></br>
    <button onClick={props.closeWindow}>Close Search</button>
    <button onClick={() => props.viewResults(props.currentCompany)}>View Results</button>
    <br />
  </div>

);

export default ResultsToolBar;


