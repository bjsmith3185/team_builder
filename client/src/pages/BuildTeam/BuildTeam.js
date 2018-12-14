import React, { Component } from 'react';
import API from '../../utils/API';
import './buildTeam.css';
import CreateStatusBar from '../../components/CreateStatusBar';
import Nav from '../../components/Nav';

export default class BuildTeam extends React.Component {
  state = {
    requirementsPage: true,
    selectPage: false,
    viewPage: false,


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

    teamPoolArray: [],
    currentTeamArray: [],
    // startBuilding: false,

    teamArray: [],
  };

  componentDidMount = () => {

    this.setTeamName();
  };

  setTeamName = () => {
    this.setState({
      teamName: sessionStorage.getItem("sessionTeamName"),
      teamStartDate: sessionStorage.getItem("sessionStartDate"),
      teamEndDate: sessionStorage.getItem("sessionEndDate"),
      language_1: sessionStorage.getItem("sessionLanguage_1"),
      skill_1: sessionStorage.getItem("sessionSkill_1"),
      language_2: sessionStorage.getItem("sessionLanguage_2"),
      skill_2: sessionStorage.getItem("sessionSkill_2"),
      language_3: sessionStorage.getItem("sessionLanguage_3"),
      skill_3: sessionStorage.getItem("sessionSkill_3"),
      language_4: sessionStorage.getItem("sessionLanguage_4"),
      skill_4: sessionStorage.getItem("sessionSkill_4"),
      language_5: sessionStorage.getItem("sessionLanguage_5"),
      skill_5: sessionStorage.getItem("sessionSkill_5"),
      manager: sessionStorage.getItem("sessionManager"),
    })
  };

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value.toLowerCase()
    });
  }

  createRequirements = (event) => {
    event.preventDefault();

    sessionStorage.setItem("sessionTeamName", this.state.teamName);
    sessionStorage.setItem("sessionStartDate", this.state.teamStartDate);
    sessionStorage.setItem("sessionEndDate", this.state.teamEndDate);
    sessionStorage.setItem("sessionManager", this.state.manager);
    sessionStorage.setItem("sessionLanguage_1", this.state.language_1);
    sessionStorage.setItem("sessionSkill_1", this.state.skill_1);
    sessionStorage.setItem("sessionLanguage_2", this.state.language_2);
    sessionStorage.setItem("sessionSkill_2", this.state.skill_2);
    sessionStorage.setItem("sessionLanguage_3", this.state.language_3);
    sessionStorage.setItem("sessionSkill_3", this.state.skill_3);
    sessionStorage.setItem("sessionLanguage_4", this.state.language_4);
    sessionStorage.setItem("sessionSkill_4", this.state.skill_4);
    sessionStorage.setItem("sessionLanguage_5", this.state.language_5);
    sessionStorage.setItem("sessionSkill_5", this.state.skill_5);


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
      assets: data,
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

        let info = {
          teamName: this.state.teamName,
          teamStartDate: this.state.teamStartDate,
          teamEndDate: this.state.teamEndDate,
          manager: this.state.manager,
          assets: data,
        }

        this.findMatchingEmployees(this.state.teamName, info);
        // this.resetRequirementsState();  not sure what to reset yet
        this.setState({
          requirementsPage: false,
          selectPage: true,
        })
        this.startBuildingTeam(this.state.teamName)
      })
      .catch(err => console.log(err));

  };

  // call a function to make the comparisons
  findMatchingEmployees = (teamName, data) => {
    console.log("finding matching employees")
    API.logicForPool(teamName, data)
      .then(res => {
        console.log("this is the return for findMatching Employees")
      })
      .catch(err => console.log(err));
  };

  resetRequirementsState = () => {
    this.setState({

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
  //-------------- end of create page -------------

  startBuildingTeam = (teamName) => {
    // console.log(`start building ${teamName}.`)

    this.teamPool(teamName);
    // this.teamRequirements(teamName);
  };



  teamPool = (teamName) => {

    API.getSpecificTeamPool(teamName)
      .then(res => {
        // console.log("this is the return for getspecificteampool()")
        // console.log(res.data)
        this.setState({
          teamPoolArray: res.data,
        })
        this.currentTeam(this.state.teamName);
      })

      .catch(err => console.log(err));
  };


  addToTeam = (employeeNumber) => {
    console.log("this is the add to team #: " + employeeNumber);

    let data = {
      addedToTeam: true
    };

    API.updateTeamPool(employeeNumber, data)
      .then(res => {
        console.log("this is the return for updateteampool()")
        console.log(res.data)
        this.teamPool(this.state.teamName);
        // this.currentTeam();
      })
      .catch(err => console.log(err));
  };

  removeFromTeam = (employeeNumber) => {

    let data = {
      addedToTeam: false
    };

    API.updateTeamPool(employeeNumber, data)
      .then(res => {
        // console.log("this is the return for updateteampool()")
        // console.log(res.data)
        this.teamPool(this.state.teamName);
        // this.currentTeam();
      })
      .catch(err => console.log(err));

  };

  currentTeam = (teamName) => {
    // this check to see if addedToTeam is true/false, if true add to the currentTeam[]
    let tempArray = [];

    this.setState({
      currentTeamArray: []
    })

    API.getSpecificTeamPool(teamName)
      .then(res => {
        console.log("??????? this is the return for getspecificteampool()")
        console.log(res.data)
        // here sort and display only employees where addedtoteam is true
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].addedToTeam === true) {
            console.log(`this one matches ${res.data[i].firstName}`)
            tempArray.push(res.data[i]);
            this.setState({
              currentTeamArray: tempArray
            })
          }
        }
      })

      .catch(err => console.log(err));

  };


  submitTeam = () => {
    // console.log("submitting team")
    new Promise((resolve, reject) => {
      for (var i = 0; i < this.state.currentTeamArray.length; i++) {


        // need to find the correct _id from the employee collection to update here!!!!!!
        //   employeeNumber: this.state.currentTeamArray[i].employeeNumber
        //    _id: this.state.currentTeamArray[i]._id
        API.updateTeam(this.state.teamName,
          {
            firstName: this.state.currentTeamArray[i].firstName,
            lastName: this.state.currentTeamArray[i].lastName,
            employeeNumber: this.state.currentTeamArray[i].employeeNumber,
            assets: this.state.currentTeamArray[i].assets,
          }
        )
          .then(res => {
            // console.log("added to team collection array")
          })
          .catch(err => console.log(err));

        // changing available status to false in employee collection
        this.updateAvailability(this.state.currentTeamArray[i].employeeNumber)

      }
      resolve(this.loadViewPage());
    })

  };

  loadViewPage = () => {
    console.log("this is in the load team page")
    this.getSpecificTeam(this.state.teamName);
    // this.setState({
    //   selectPage: false,
    //   viewPage: true,
    // })
    this.getSpecificTeam(this.state.teamName);
  };


  updateAvailability = (employeeNumber) => {
    console.log(`this is the employee number for changing availability: ${employeeNumber}`);

    let data = {
      available: false
    };

    API.updateEmployee(employeeNumber, data)
      .then(res => {
        console.log("changed available to false")
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };
  // ----------- End of select page ------



  getSpecificTeam = (teamName) => {


    API.getSpecificTeam(teamName)
      .then(res => {
        console.log("this is the return for getSpecificteam()")
        console.log(res.data)
        this.setState({
          teamArray: res.data,
          selectPage: false,
          viewPage: true,
        })
      })
      .catch(err => console.log(err));
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
        {this.state.requirementsPage ? (
          <div>
            <CreateStatusBar requirements="Enter Team Requirements" />
            <hr />
            {/* Team Questionaire Info */}
            <div className="container-fluid">
              <form>
                <div className="Form-Container">
                <h4>team name</h4>
                <input className="form-control form-control-lg"
                  name='teamName'
                  placeholder='"Team name"'
                  value={this.state.teamName}
                  onChange={event => this.change(event)}
                />
                <h4>start date</h4>
                <input className="form-control form-control-lg"
                  name='teamStartDate'
                  placeholder='"start date"'
                  value={this.state.teamStartDate}
                  onChange={event => this.change(event)}
                />
                <h4>end date</h4>
                <input className="form-control form-control-lg"
                  name='teamEndDate'
                  placeholder='"end date"'
                  value={this.state.teamEndDate}
                  onChange={event => this.change(event)}
                />
                <h4>team manager</h4>
                <input className="form-control form-control-lg"
                  name='manager'
                  placeholder='"Team Manager"'
                  value={this.state.manager}
                  onChange={event => this.change(event)}
                />
                </div>
                {/* Language and Skill Level Forms */}
                <h3 className="text-center" id="title-font">CODING SKILLS REQUIRED</h3>
                <div className="container-fluid">
                <div className="row">
                  <div className="col-3">
                    <label for="language_1"><h4>Language</h4></label>
                    <input className="form-control form-control-sm"
                      name='language_1'
                      placeholder='language'
                      value={this.state.language_1}
                      onChange={event => this.change(event)}
                    />
                  </div>
                  <div className="col-3">
                    <label for="skill_1"><h4>Skill</h4></label>
                    <input className="form-control form-control-sm"
                      name='skill_1'
                      placeholder='skill'
                      value={this.state.skill_1}
                      onChange={event => this.change(event)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    {/* <label for="language_2">Language</label> */}
                    <input className="form-control form-control-sm"
                      name='language_2'
                      placeholder='language'
                      value={this.state.language_2}
                      onChange={event => this.change(event)}
                    />
                  </div>
                  <div className="col-3">
                    {/* <label for="skill_2">skill</label> */}
                    <input className="form-control form-control-sm"
                      name='skill_2'
                      placeholder='skill'
                      value={this.state.skill_2}
                      onChange={event => this.change(event)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    {/* <label for="language_1">Language</label> */}
                    <input className="form-control form-control-sm"
                      name='language_3'
                      placeholder='language'
                      value={this.state.language_3}
                      onChange={event => this.change(event)}
                    />
                  </div>
                  <div className="col-3">
                    {/* <label for="skill_3">skill</label> */}
                    <input className="form-control form-control-sm"
                      name='skill_3'
                      placeholder='skill'
                      value={this.state.skill_3}
                      onChange={event => this.change(event)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    {/* <label for="language_4">Language</label> */}
                    <input className="form-control form-control-sm"
                      name='language_4'
                      placeholder='language'
                      value={this.state.language_4}
                      onChange={event => this.change(event)}
                    />
                  </div>
                  <div className="col-3">
                    {/* <label for="skill_4">skill</label> */}
                    <input className="form-control form-control-sm"
                      name='skill_4'
                      placeholder='skill'
                      value={this.state.skill_4}
                      onChange={event => this.change(event)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    {/* <label for="language_5">Language</label> */}
                    <input className="form-control form-control-sm"
                      name='language_5'
                      placeholder='language'
                      value={this.state.language_5}
                      onChange={event => this.change(event)}
                    />
                  </div>
                  <div className="col-3">
                    {/* <label for="skill_5">skill</label> */}
                    <input className="form-control form-control-sm"
                      name='skill_5'
                      placeholder='skill'
                      value={this.state.skill_5}
                      onChange={event => this.change(event)}
                    />
                  </div>
                </div>
                </div>
                <button onClick={this.createRequirements} className="btn btn-success btn-lg btn-block">Submit</button>
              </form>
            </div>
          </div>

        ) : (
            <div>
              {this.state.selectPage ? (

                <div>
                  <CreateStatusBar modify="Select Team Members" />

                  <hr />
                  <div>Selecting tean member for team: {this.state.teamName}</div>


                  <div className="row">
                    <div className="col-6">
                      <h4>Select team from this list</h4>
                      <ul>
                        {this.state.teamPoolArray.map(person => (
                          <li key={person.employeeNumber}>
                            <h4>{person.firstName} {person.lastName}</h4>

                            <ul>
                              {person.assets.map(language => (
                                <li key={language.language}>
                                  <div>Language: {language.language}</div>
                                  <div>Skill Level: {language.level}</div>
                                </li>
                              ))}
                            </ul>

                            {!person.addedToTeam ? (
                              <button onClick={() => this.addToTeam(person.employeeNumber)}>Add To Team</button>
                            ) : (
                                <button onClick={() => this.removeFromTeam(person.employeeNumber)}>Remove From Team</button>
                              )}


                            <div>________________________</div>
                            <br />
                          </li>


                        ))}
                      </ul>

                    </div>

                    <div className="col-6">
                      <h4>Current Team Members</h4>

                      <div>
                        <ul>

                          {
                            this.state.currentTeamArray.map(person => (
                              <li key={person.employeeNumber}>
                                <h4>{person.firstName} {person.lastName}</h4>

                                <br />
                              </li>

                            ))
                          }
                        </ul>
                        <br />
                        <div className="text-center">
                          <button onClick={this.submitTeam}>Save Team</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                  <div>
                    {this.state.viewPage ? (
                      <div>
                        <CreateStatusBar view="View Team Members" />

                        <hr />
                        <br />
                        <br />
                        <br />
                        <div className="row">
                          <div className="col-2"></div>
                          <div className="col-8">
                            <h3 className="text-center">Team Members</h3>
                            <h4 className="text-center">Team: {this.state.teamName}</h4>

                            {this.state.teamArray ? (
                              <div>
                                <div>Team Name: {this.state.teamName}</div>
                                <div>Team Manager: {this.state.teamArray.manager}</div>
                                <div>Start Date: {this.state.teamArray.startDate}</div>
                                <div>End Date: {this.state.teamArray.endDate}</div>
                                <hr />
                                <div>Members</div>
                                <ul>
                                  {this.state.teamArray.members.map(person => (
                                    <li key={person.employeeNumber}>
                                      <div>{person.firstName} {person.lastName}</div>
                                    </li>
                                  ))}

                                </ul>

                              </div>
                            ) : (
                                <div> No team to display </div>
                              )}

                          </div>
                        </div>
                      </div>
                    ) : (
                        <div></div>
                      )}

                  </div>
                )}
            </div>
          )}

      </div>
    );
  }
}
