import React, { Component } from 'react';
import API from '../../utils/API';
import "./ModifyTeam.css";
import CreateStatusBar from '../../components/CreateStatusBar';
import Nav from '../../components/Nav';
import ModifyToolBar from '../../components/ModifyToolBar';
import UpdateForm from '../../components/UpdateForm';



export default class ModifyTeam extends React.Component {
  state = {
    teamsArray: [],
    selectedTeam: [],

    teamList: true,
    showToolBar: false,

    modifyTeamData: false,
    removeTeamMember: false,
    addTeamMember: false,


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
          showToolBar: true,
          teamList: false,

          // teamName: res.data.teamName,
          // teamStartDate: res.data.startDate,
          // teamEndDate: res.data.endDate,
          // manager: res.data.manager,
        })
      })
      .catch(err => console.log(err));

    API.getSpecificTeamRequirements(teamName)
      .then(res => {
        console.log("!!!!!!this is the team requirements")
        console.log(res.data)
        this.setState({
          teamName: res.data.teamName,
          teamStartDate: res.data.teamStartDate,
          teamEndDate: res.data.teamEndDate,
          manager: res.data.manager,
          language_1: res.data.assets[0].language,
          skill_1: res.data.assets[0].skill,
         })

        if (res.data.assets[1]) {
          this.setState({
            language_2: res.data.assets[1].language,
            skill_2: res.data.assets[1].skill,
          })
        }

        if (res.data.assets[2]) {
          this.setState({
            language_3: res.data.assets[2].language,
            skill_3: res.data.assets[2].skill,
          })
        }

        if (res.data.assets[3]) {
          this.setState({
            language_4: res.data.assets[3].language,
            skill_4: res.data.assets[3].skill,
          })
        }

        if (res.data.assets[4]) {
          this.setState({
            language_5: res.data.assets[4].language,
            skill_5: res.data.assets[4].skill,
          })
        }




      })
      .catch(err => console.log(err));


  };

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  modifyData = () => {
    this.setState({
      modifyTeamData: true,
    })

  }

  deleteTeamMember = () => {

  }

  addTeamMember = () => {

  }

  back = () => {
    this.setState({
      showToolBar: false,
      teamList: true,
    })
  }

  updateRequirements = () => {

    // send as an update to the original create team api
    // if it is different then offer to add new employees that match the
    // new requirements
    this.redirectStartPage();

  }

  redirectStartPage = () => {
    this.props.history.push({
      pathname: "/start",
      
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


        {/* <CreateStatusBar modify="Select Team Members" /> */}

        <hr />


        <div className="row">
          <div className="col-12">
            {this.state.teamList ? (
              <ul>
                <h3>Select team to modify</h3>
                {this.state.teamsArray.map(team => (
                  <li key={team.teamName}>
                    <div onClick={() => this.showTeam(team.teamName)}>Team: {team.teamName}</div>
                  </li>
                ))}
              </ul>
            ) : (
                <div>

                  <ModifyToolBar
                    modifyData={this.modifyData}
                    deleteTeamMember={this.deleteTeamMember}
                    addTeamMember={this.addTeamMember}
                    back={this.back}
                  />
                </div>
              )}

            <div>
              {/* AREA TO MAKE CHANGES BELOW */}
              {this.state.modifyTeamData ? (
                <div>
                  <div className="row">
                    <div className="col-4 text-center">

                      <div className="text-center">Team Name</div>
                      <input className="text-center"
                        name='teamName'
                        placeholder='"Team name"'
                        value={this.state.teamName}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <div className="text-center">Manger</div>
                      <input className="text-center"
                        name='manager'
                        placeholder=''
                        value={this.state.manager}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <div className="text-center">Team Start Date</div>
                      <input className="text-center"
                        name='teamStartDate'
                        placeholder=''
                        value={this.state.teamStartDate}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <div className="text-center">Team End Date</div>
                      <input className="text-center"
                        name='teamEndDate'
                        placeholder=''
                        value={this.state.teamEndDate}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />

                      <button onClick={() => this.updateRequirements(this.state.teamName)}>Update</button>


                    </div>

                    <div className="col-2 text-center">
                      <div className="text-center">Languages</div>
                      <input className="text-center"
                        name='language_1'
                        placeholder=''
                        value={this.state.language_1}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <div className="text-center">Languages</div>
                      <input className="text-center"
                        name='language_2'
                        placeholder=''
                        value={this.state.language_2}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <div className="text-center">Languages</div>
                      <input className="text-center"
                        name='language_3'
                        placeholder=''
                        value={this.state.language_3}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <div className="text-center">Languages</div>
                      <input className="text-center"
                        name='language_4'
                        placeholder=''
                        value={this.state.language_4}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <div className="text-center">Languages</div>
                      <input className="text-center"
                        name='language_5'
                        placeholder=''
                        value={this.state.language_5}
                        onChange={event => this.change(event)}
                      />
                      <br />

                    </div>

                    <div className="col-2 text-center">
                      <div className="text-center">Level</div>
                      <input className="text-center"
                        name='skill_1'
                        placeholder=''
                        value={this.state.skill_1}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <div className="text-center">Level</div>
                      <input className="text-center"
                        name='skill_2'
                        placeholder=''
                        value={this.state.skill_2}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <div className="text-center">Level</div>
                      <input className="text-center"
                        name='skill_3'
                        placeholder=''
                        value={this.state.skill_3}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <div className="text-center">Level</div>
                      <input className="text-center"
                        name='skill_4'
                        placeholder=''
                        value={this.state.skill_4}
                        onChange={event => this.change(event)}
                      />
                      <br />
                      <div className="text-center">Level</div>
                      <input className="text-center"
                        name='skill_5'
                        placeholder=''
                        value={this.state.skill_5}
                        onChange={event => this.change(event)}
                      />
                      <br />


                    </div>


                  </div>
                  
                </div>
              ) : (
                  <div></div>
                )}




            </div>


          </div>





        </div>







      </div>
    );
  }
}






{/* <div className="col-6">
<div>
  {this.state.showTeam ? (
    <div>
      <div>Team Members </div>
      <ul>
        {this.state.selectedTeam.map(team => (
          <li key={team.teamName}>
            <div>Team: {team.teamName}</div>
            <div>Manager: {team.manager}</div>

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

</div> */}