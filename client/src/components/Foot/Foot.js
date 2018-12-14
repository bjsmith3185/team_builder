import React from "react";
import "./foot.css";
import Home from '@material-ui/icons/Home';
import Call from '@material-ui/icons/Call';
import Email from '@material-ui/icons/Email';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';

export const Foot = (props) => (
  
        <footer>
          <div id="footer-container">
            <div id="footer-section">
              <h2>Contact Us</h2>
              <Home /> <span id="content">320 E 9th St, Charlotte, NC 28202</span>
              <br></br>
              <Call /> <span id="content">980-111-1111</span>
              <br></br>
              <Email /> <span id="content">info@horseshoesolutions.com</span>
            </div>
            <div id="footer-section">
              <h2>About</h2>
              <CheckBoxOutlineBlank /> <span id="content">About Us </span>
              <br></br>
              <CheckBoxOutlineBlank /> <span id="content">Privacy </span>
              <br></br>
              <CheckBoxOutlineBlank /> <span id="content">Terms & Conditions </span>

            </div>
            <div id="footer-section">
              <h2>Other Things</h2>
            </div>
          </div>
      </footer>
    );
 
    export default Foot;

