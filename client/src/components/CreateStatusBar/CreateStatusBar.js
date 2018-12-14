import React, { Component } from "react";
import "./CreateStatusBar.css";


const CreateStatusBar = (props) => (

  <div>
    <h3 className="text-center" id="title-font">DEVELOP YOUR TEAM</h3>
    <div className="row">
      <div className="col-4 text-center">
        <h3 className="text-center">{props.requirements}</h3>
      </div>

      <div className="col-4 text-center">
        <h3 className="text-center">{props.modify}</h3>
      </div>

      <div className="col-4 text-center">
        <h3 className="text-center">{props.view}</h3>
      </div>

    </div>
  </div>

);

export default CreateStatusBar;


