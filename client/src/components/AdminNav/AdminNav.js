import React from "react";
import "./AdminNav.css";
// nav-bar functionality

export default class AdminNav extends React.Component {
  componentDidMount() {
    const navBar = document.getElementById('topNav'); 
    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            navBar.style.background = "#789198";
            navBar.style.boxShadow = "0px 4px 2px #33333"
        } else  {
            navBar.style.background = "transparent";
            navBar.style.boxShadow = "0px 4px 2px #33333"
        } 
    }
  }
  componentDidUnmount() {
    window.onscroll=function() {
      undefined
    }
  }
  render() {
    return (
      <nav>
        <div id="topNav">
          <a href="/"><span id="companyName">HorseShoe Business Solutions</span></a>
          <a href="/start">Home</a>
          <a href="/addemployee">Add Employee</a>
          <a href="/updateemployee">Update Employee</a>
          <a href="/modifylogin">Update Passwords</a>

          <a href="/">Logout</a>

         
          </div>

      </nav>
    );
  }
}


