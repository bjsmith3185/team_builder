import React, { Component } from "react";
import "./ModifyToolBar.css";


const ModifyToolBar = (props) => (

  <div>
    <h3 className="text-center">Select from an option below</h3>
   
    <br/>
    <div className="text-center">
    <span  onClick={() => props.modifyData(props.teamName)}>Modify Team Data</span>
    <span>/</span>
    <span onClick={() => props.deleteTeamMember(props.teamName)}>Remove Team Member</span>
    <span>/</span>
    <span onClick={() => props.addTeamMember(props.teamName)}>Add Team Member</span>
    <span>/</span>
    <span onClick={props.back}>Back to Teams List</span>

    </div>
    
    
  </div>

);

export default ModifyToolBar;


