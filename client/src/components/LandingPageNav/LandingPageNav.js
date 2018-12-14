import React from "react";
import "./LandingPageNav.css";
// nav-bar functionality

export default class LandingPageNav extends React.Component {
  componentDidMount() {
    const navBar = document.getElementById('topNav'); 
    window.onscroll = function() {
        if (window.pageYOffset > 1) {
            navBar.style.background = "#789198";
            navBar.style.boxShadow = "0px 4px 2px #33333";
        } else  {
            navBar.style.background = "transparent";
            navBar.style.boxShadow = "0px 4px 2px #33333";
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
         
          <a href="/build">Build Team</a>
          <a href="/viewteam">view Team</a>
          <a href="/modify">Modify Team</a>
          <a href="/admin">Admin</a>
         

          <a href="/">Logout</a>

         
          </div>

      </nav>
    );
  }
}


