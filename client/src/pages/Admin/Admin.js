import React, { Component } from 'react';
import API from '../../utils/API';
import "./Admin.css";
import ResultsSelection from '../../components/ResultsSelection';
import ResultsList from '../../components/ResultsList';
import ResultsToolBar from '../../components/ResultsToolBar/ResultsToolBar';
import AdminNav from '../../components/AdminNav';



/* Import Components */

export default class Admin extends React.Component {
  state = {


  };




  render() {
    return (
      <div>
        <AdminNav />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center">Administrative Page</h1>
        <div className="row">
          <div className="col-6">
            <br />
            <br />
            <br />
            <br />

           
            <br />

            <a href="/addemployee">Add Employee</a>
            <br />
            <a href="/updateemployee">Update Employee</a>
            <br />
            <a href="/modifylogin">Update users/passwords</a>
            <br />
            <a href="/allemployees">View All Employees</a>
            <br />
            <br />
            <a href="/user">Home</a>
          </div>

        </div>


      </div>
    )
  }
}

