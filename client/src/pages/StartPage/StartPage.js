import React, { Component } from 'react';
import API from '../../utils/API';
import "./StartPage.css";
import LandingPageNav from '../../components/LandingPageNav';
import Foot from '../../components/Foot';
import Image1 from './hierarchy.svg';
import Image2 from './management.svg';
import Image3 from './id.svg';
import Image4 from './monitoring.svg';


export default class StartPage extends React.Component {




  componentDidMount = () => {
    this.clearStorage();
  };

  clearStorage = () => {
    sessionStorage.setItem("sessionTeamName", "");
    sessionStorage.setItem("sessionStartDate", "");
    sessionStorage.setItem("sessionEndDate", "");
    sessionStorage.setItem("sessionManager", "");
    sessionStorage.setItem("sessionLanguage_1", "");
    sessionStorage.setItem("sessionSkill_1", "");
    sessionStorage.setItem("sessionLanguage_2", "");
    sessionStorage.setItem("sessionSkill_2", "");
    sessionStorage.setItem("sessionLanguage_3", "");
    sessionStorage.setItem("sessionSkill_3", "");
    sessionStorage.setItem("sessionLanguage_4", "");
    sessionStorage.setItem("sessionSkill_4", "");
    sessionStorage.setItem("sessionLanguage_5", "");
    sessionStorage.setItem("sessionSkill_5", "");

  };

  render() {
    return (
      <div>
        <LandingPageNav />
          <div class="container">
            <div class="row align-items-start">
              <div class="col-xs-12 m-4">
                <img src={Image1}></img>
                <a href="/build" className="btn btn-outline-success"><h1>Building a Team</h1></a>
              </div>
              <div class="col-xs-12 m-4">
                <img src={Image4}></img>
                <a href="/viewteam" className="btn btn-outline-success"><h1>View Team</h1></a>
              </div>
              <div class="col-xs-12 m-4">
                <img src={Image2}></img>
                <a href="/modify" className="btn btn-outline-success"><h1>Modify Team</h1></a>
              </div>
              <div class="col-xs-12 m-4">
                <img src={Image3}></img>
                <a href="/admin" className="btn btn-outline-success"><h1>Admin Page</h1></a>
              </div>
            </div>
          </div>
          <Foot />
        </div>
        
        );
      }
    }
