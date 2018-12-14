import React, { Component } from 'react';
import API from '../../utils/API';
import "./User.css";
import Nav from '../../components/Nav';


export default class User extends React.Component {


  render() {
    return (
      <div>
        <Nav />
        <div className="form-style">
          <br />
          <br />
          <br />
          <br />

          <div>This is the home page once the user has logged in.</div>


          <a href="/create">Enter New Team Requirements</a>
          <br />
          <a href="/modify">Select Team Members</a>
          <br />
          <a href="/viewteam">View Team</a>
         

        </div>
      </div>
    );
  }
}
