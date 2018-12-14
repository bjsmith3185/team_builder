import React, { Component } from 'react';
import API from '../../utils/API';

import AdminNav from '../../components/AdminNav';


export default class Populate extends React.Component {
  state = {

  }

  populateEmployees = () => {
    API.populateEmployeePool()
      .then(res => {
        console.log("populate employees")
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }

  resetAll = () => {
    API.resetAll()
    .then(res => {
      console.log("clearing collections")
      console.log(res.data)
    })
    .catch(err => console.log(err));
  }

  redirectStartPage = () => {
    this.props.history.push({
      pathname: "/start",
      
    });
  };


  render() {
    return (
      <div >
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.resetAll}>Reset All</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.populateEmployees}>Populate Employees</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.redirectStartPage}>Back to app</button>
      </div>
    )
  }
}
