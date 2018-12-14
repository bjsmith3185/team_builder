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
          // language_2: res.data.assets[1].language,
          // skill_2: res.data.assets[1].skill,
          // language_3: res.data.assets[2].language,
          // skill_3: res.data.assets[2].skill,
          // language_4: res.data.assets[3].language,
          // skill_4: res.data.assets[3].skill,
          // language_5: res.data.assets[4].language,
          // skill_5: res.data.assets[4].skill,

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
                  <div>{this.state.teamName} </div>
                  <div>{this.state.teamStartDate} </div>
                  <div>{this.state.teamEndDate} </div>
                  <div>{this.state.manager} </div>

                  <div>{this.state.language_1} </div>
                  <div>{this.state.skill_1} </div>

                  <div>{this.state.language_2} </div>
                  <div>{this.state.skill_2} </div>

                  <div>{this.state.language_3} </div>
                  <div>{this.state.skill_3} </div>


                  <input
                    name='teamName'
                    placeholder='"Team name"'
                    value={this.state.teamName}
                    onChange={event => this.change(event)}
                  />
                  <input
                    name='manager'
                    placeholder=''
                    value={this.state.manager}
                    onChange={event => this.change(event)}
                  />
                  <input
                    name='teamStartDate'
                    placeholder=''
                    value={this.state.teamStartDate}
                    onChange={event => this.change(event)}
                  />
                  <input
                    name='teamEndDate'
                    placeholder=''
                    value={this.state.teamEndDate}
                    onChange={event => this.change(event)}
                  />
                  <input
                    name='language_1'
                    placeholder=''
                    value={this.state.language_1}
                    onChange={event => this.change(event)}
                  />
                  <input
                    name='skill_1'
                    placeholder=''
                    value={this.state.skill_1}
                    onChange={event => this.change(event)}
                  />



                </div>

                // <div>
                //   {/* {this.state.selectedTeam.map(team => ( */}
                //   <div>
                //     <p>Update Form for: {team.teamName}</p>
                //     <br />
                //     <br />
                //     <form>

                //       <br />
                //       {/* <div>What is the teams name?</div> */}
                //       <input
                //         name='teamName'
                //         placeholder='"Team name"'
                //         value={this.state.teamName}
                //         onChange={event => this.change(event)}
                //       />
                //       <br />
                //       <div>When will the team begin?</div>
                //       <input
                //         name='teamStartDate'
                //         placeholder='"start date"'
                //         value={this.state.teamStartDate}
                //         onChange={event => this.change(event)}
                //       />
                //       <br />
                //       <div>When will the team end?</div>
                //       <input
                //         name='teamEndDate'
                //         placeholder='"end date"'
                //         value={this.state.teamEndDate}
                //         onChange={event => this.change(event)}
                //       />
                //       <br />


                //       <div>Who is the team manager?</div>
                //       <input
                //         name='manager'
                //         placeholder='"Team Manager"'
                //         value={this.state.manager}
                //         onChange={event => this.change(event)}
                //       />
                //       <br />
                //       <h3 className="text-center">What coding skill are required?</h3>
                //       <br />

                //       <div className="row">
                //         <div className="col-3"></div>
                //         <div className="col-3">
                //           <label for="language_1">Language</label>
                //           <br />
                //           <input
                //             name='language_1'
                //             placeholder='language'
                //             value={this.state.language_1}
                //             onChange={event => this.change(event)}
                //           />
                //         </div>

                //         <div className="col-3">
                //           <label for="skill_1">Skill</label>
                //           <br />
                //           <input
                //             name='skill_1'
                //             placeholder='skill'
                //             value={this.state.skill_1}
                //             onChange={event => this.change(event)}
                //           />
                //         </div>
                //       </div>

                //       <div className="row">
                //         <div className="col-3"></div>
                //         <div className="col-3">
                //           {/* <label for="language_2">Language</label> */}
                //           <br />
                //           <input
                //             name='language_2'
                //             placeholder='language'
                //             value={this.state.language_2}
                //             onChange={event => this.change(event)}
                //           />
                //         </div>

                //         <div className="col-3">
                //           {/* <label for="skill_2">skill</label> */}
                //           <br />
                //           <input
                //             name='skill_2'
                //             placeholder='skill'
                //             value={this.state.skill_2}
                //             onChange={event => this.change(event)}
                //           />
                //         </div>
                //       </div>

                //       <div className="row">
                //         <div className="col-3"></div>
                //         <div className="col-3">
                //           {/* <label for="language_1">Language</label> */}
                //           <br />
                //           <input
                //             name='language_3'
                //             placeholder='language'
                //             value={this.state.language_3}
                //             onChange={event => this.change(event)}
                //           />
                //         </div>

                //         <div className="col-3">
                //           {/* <label for="skill_3">skill</label> */}
                //           <br />
                //           <input
                //             name='skill_3'
                //             placeholder='skill'
                //             value={this.state.skill_3}
                //             onChange={event => this.change(event)}
                //           />
                //         </div>
                //       </div>

                //       <div className="row">
                //         <div className="col-3"></div>
                //         <div className="col-3">
                //           {/* <label for="language_4">Language</label> */}
                //           <br />
                //           <input
                //             name='language_4'
                //             placeholder='language'
                //             value={this.state.language_4}
                //             onChange={event => this.change(event)}
                //           />
                //         </div>

                //         <div className="col-3">
                //           {/* <label for="skill_4">skill</label> */}
                //           <br />
                //           <input
                //             name='skill_4'
                //             placeholder='skill'
                //             value={this.state.skill_4}
                //             onChange={event => this.change(event)}
                //           />
                //         </div>
                //       </div>

                //       <div className="row">
                //         <div className="col-3"></div>
                //         <div className="col-3">
                //           {/* <label for="language_5">Language</label> */}
                //           <br />
                //           <input
                //             name='language_5'
                //             placeholder='language'
                //             value={this.state.language_5}
                //             onChange={event => this.change(event)}
                //           />
                //         </div>

                //         <div className="col-3">
                //           {/* <label for="skill_5">skill</label> */}
                //           <br />
                //           <input
                //             name='skill_5'
                //             placeholder='skill'
                //             value={this.state.skill_5}
                //             onChange={event => this.change(event)}
                //           />
                //         </div>
                //       </div>


                //       <br />

                //       <button onClick={this.onSubmit}>Submit</button>
                //     </form>
                //   </div>

                // ))}

                // </div>
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