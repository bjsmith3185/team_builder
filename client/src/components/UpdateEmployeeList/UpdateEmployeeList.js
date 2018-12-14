import React, { Component } from "react";
import "./UpdateEmployeeList.css";


const UpdateEmployeeList = (props) => (

  <div>
    <h1>List of all employees</h1>
    <ul>
      {props.allEmployeesArray.map(person => (
        <li key={person.employeeNumber}>
          <div>Name: {person.firstName} {person.lastName}</div>
          {/* <div>Employee # : {person.employeeNumber}</div> */}
          <button onClick={() => props.makeChanges(person.employeeNumber)}>Update Info</button>

          <button onClick={() => props.removeEmployee(person.employeeNumber)}>Remove Employee</button>


          <br></br>
          <div>______________________________________</div>
        </li>
      ))}
    </ul>
  </div>

);

export default UpdateEmployeeList;


