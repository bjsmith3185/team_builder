import React, { Component } from 'react';
import API from '../../utils/API';
import "./ViewTeam.css";
import CreateStatusBar from '../../components/CreateStatusBar';
import Nav from '../../components/Nav';

export default class ViewTeam extends React.Component {
  state = {
    teamsArray: [],
    selectedTeam: [],

    showTeam: false,

  };

  componentDidMount = () => {
    // this.teamPool();
    // this.currentTeam();
    this.getTeamNames();
  };

  getTeamNames = () => {
    API.getTeam()
      .then(res => {
        console.log("this is the return for geting teams to create a name list")
        console.log(res.data)


        this.setState({
          teamsArray: res.data
        })
      })
      .catch(err => console.log(err));
  };

  showTeam = (teamName) => {
    API.getSpecificTeam(teamName)
      .then(res => {
        console.log("this is the team to view")
        console.log(res.data)
        let tempArray = [];
        tempArray.push(res.data)

        this.setState({
          selectedTeam: tempArray,
          showTeam: true,
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

        {/* <CreateStatusBar modify="Select Team Members" /> */}

        <hr />
        <div>Select team to view members</div>

        <div className="row">
          <div className="col-6">

            <ul>
              {this.state.teamsArray.map(team => (
                <li key={team.teamName}>
                  <h4 onClick={() => this.showTeam(team.teamName)}>Team: {team.teamName}</h4>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6">
            <div>
              {this.state.showTeam ? (
                <div>
                  <div>Team Members </div>
                  <ul>
                    {this.state.selectedTeam.map(team => (
                      <li key={team.teamName}>
                        <div>Team: {team.teamName}</div>
                        <div>Manager: {team.manager}</div>
                        <br/>
                        <ul>
                          <div>Languages Required: </div>
                          {team.assets.map(language => (
                            <li key={language.language}>
                              {language.language}
                            </li>
                          ))}

                        </ul>
                                  <br/>
                            <div>Team Members:</div>

                        <ul>
                          {team.members.map(person => (
                            <li key={person.employeeNumber}>
                              <div>{person.firstName} {person.lastName}</div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>

                </div>
              ) : (
                  <div>No team selected</div>
                )}

            </div>

          </div>

        </div>







      </div>
    );
  }
}



