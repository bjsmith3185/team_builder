import React, { Component } from 'react';
import API from '../../utils/API';
import "./home.css";
import WebFont from 'webfontloader';
import Foot from '../../components/Foot';
import Image from './graph.svg'
import Image2 from './networking.svg'
import Image3 from './evaluation.svg'

WebFont.load({
  google: {
    families: ['Nunito Sans: 300,400,700', 'sans-serif']
  }
})
/* Import Components */

export default class Home extends React.Component {

  componentDidMount = () => {
    sessionStorage.clear();
  };

  saveUserName = (name) => {
    sessionStorage.setItem("name", name);
  };

  render() {
    return (
      <div>
       
        <div id="hero">
            <div id="blur-section">
            <h1><a href="/start">HORSESHOE SOLUTIONS</a></h1>
            <h2> All of your business sampling needs </h2>
          </div>
          </div>
        <div id="section-content">
          <div id="image-container">
            <img src={Image} alt="graph picture"></img> 
            <img src={Image2} alt="team picture"></img> 
            <img src={Image3} alt="evaluation picture"></img>
          </div>
          <h3>Using our business solution will save you and your company countless hours of labor. 
            With the simple implementation of our application you will see results of greater efficiency in planning and workflow.
            Create More Filler Text</h3>
        </div>
       
       


        <Foot />

      </div>
    );
  }
}
