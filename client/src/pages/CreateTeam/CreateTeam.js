import React, { Component } from 'react';
import API from '../../utils/API';
import "./CreateTeam.css";
import CreateStatusBar from '../../components/CreateStatusBar';
import Nav from '../../components/Nav';

export default class CreateTeam extends React.Component {
  state = {
    teamName: '',
    teamStartDate: '',
    teamEndDate: '',
    language_1: "",
    skill_1: "",
    language_2: "",
    skill_2: "",
    language_3: "",
    skill_3: "",
    language_4: "",
    skill_4: "",
    language_5: "",
    skill_5: "",
    manager: "",
    dateCreated: "",

    assetsArray: [],

  }

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();

    sessionStorage.setItem("sessionCompanyName", this.state.teamName);

    let data = [];

    if (this.state.language_1) {
      data.push({
        language: this.state.language_1,
        skill: this.state.skill_1
      })
    }

    if (this.state.language_2) {
      data.push({
        language: this.state.language_2,
        skill: this.state.skill_2
      })
    }

    if (this.state.language_3) {
      data.push({
        language: this.state.language_3,
        skill: this.state.skill_3
      })
    }

    if (this.state.language_4) {
      data.push({
        language: this.state.language_4,
        skill: this.state.skill_4
      })
    }

    if (this.state.language_5) {
      data.push({
        language: this.state.language_5,
        skill: this.state.skill_5
      })
    }
    // creating new team document to be populated later
    API.createNewTeam({
      teamName: this.state.teamName,
      manager: this.state.manager,
      startDate: this.state.teamStartDate,
      endDate: this.state.teamEndDate,
    })
      .then(res => {
        console.log("this is the return for create new team")
      })
      .catch(err => console.log(err));

    // create new team request document
    API.addNewTeamRequirements({
      teamName: this.state.teamName,
      teamStartDate: this.state.teamStartDate,
      teamEndDate: this.state.teamEndDate,
      manager: this.state.manager,
      assets: data,

    })
      .then(res => {
        console.log("this is the return for create new team requirement")
        console.log(res.data)
        // redirect to user page
        this.findMatchingEmployees(this.state.teamName);
        this.redirectUserPage();
        this.resetState();

      })
      .catch(err => console.log(err));

  };

  // call a function to make the comparisons
  findMatchingEmployees = (teamName) => {
    console.log("finding matching employees")
    API.logicForPool(teamName)
      .then(res => {
        console.log("this is the return for findMatching Employees")
      })
      .catch(err => console.log(err));
  };

  resetState = () => {
    this.setState({
      teamName: '',
      teamStartDate: '',
      teamEndDate: '',
      language_1: "",
      skill_1: "",
      language_2: "",
      skill_2: "",
      language_3: "",
      skill_3: "",
      language_4: "",
      skill_4: "",
      language_5: "",
      skill_5: "",
      manager: "",
      dateCreated: "",

      assetsArray: [],
    })
  };

  redirectUserPage = () => {
    this.props.history.push({
      pathname: "/modify",
      state: {
        teamName: this.state.teamName
      }
    });
  };



  render() {
    return (
      <div >
        <Nav />
        <br />
        <br />
        <br />
        <br />
        <br />
  <CreateStatusBar requirements="Enter Team Requirements" />
        <hr />

        <form>

          <br />
          <div>What is the teams name?</div>
          <input
            name='teamName'
            placeholder='"Team name"'
            value={this.state.teamName}
            onChange={event => this.change(event)}
          />
          <br />
          <div>When will the team begin?</div>
          <input
            name='teamStartDate'
            placeholder='"start date"'
            value={this.state.teamStartDate}
            onChange={event => this.change(event)}
          />
          <br />
          <div>When will the team end?</div>
          <input
            name='teamEndDate'
            placeholder='"end date"'
            value={this.state.teamEndDate}
            onChange={event => this.change(event)}
          />
          <br />


          <div>Who is the team manager?</div>
          <input
            name='manager'
            placeholder='"Team Manager"'
            value={this.state.manager}
            onChange={event => this.change(event)}
          />
          <br />
          <h3 className="text-center">What coding skill are required?</h3>
          <br />

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <label for="language_1">Language</label>
              <br />
              <input
                name='language_1'
                placeholder='language'
                value={this.state.language_1}
                onChange={event => this.change(event)}
              />
            </div>

            <div className="col-3">
              <label for="skill_1">Skill</label>
              <br />
              <input
                name='skill_1'
                placeholder='skill'
                value={this.state.skill_1}
                onChange={event => this.change(event)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              {/* <label for="language_2">Language</label> */}
              <br />
              <input
                name='language_2'
                placeholder='language'
                value={this.state.language_2}
                onChange={event => this.change(event)}
              />
            </div>

            <div className="col-3">
              {/* <label for="skill_2">skill</label> */}
              <br />
              <input
                name='skill_2'
                placeholder='skill'
                value={this.state.skill_2}
                onChange={event => this.change(event)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              {/* <label for="language_1">Language</label> */}
              <br />
              <input
                name='language_3'
                placeholder='language'
                value={this.state.language_3}
                onChange={event => this.change(event)}
              />
            </div>

            <div className="col-3">
              {/* <label for="skill_3">skill</label> */}
              <br />
              <input
                name='skill_3'
                placeholder='skill'
                value={this.state.skill_3}
                onChange={event => this.change(event)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              {/* <label for="language_4">Language</label> */}
              <br />
              <input
                name='language_4'
                placeholder='language'
                value={this.state.language_4}
                onChange={event => this.change(event)}
              />
            </div>

            <div className="col-3">
              {/* <label for="skill_4">skill</label> */}
              <br />
              <input
                name='skill_4'
                placeholder='skill'
                value={this.state.skill_4}
                onChange={event => this.change(event)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              {/* <label for="language_5">Language</label> */}
              <br />
              <input
                name='language_5'
                placeholder='language'
                value={this.state.language_5}
                onChange={event => this.change(event)}
              />
            </div>

            <div className="col-3">
              {/* <label for="skill_5">skill</label> */}
              <br />
              <input
                name='skill_5'
                placeholder='skill'
                value={this.state.skill_5}
                onChange={event => this.change(event)}
              />
            </div>
          </div>


          <br />

          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
