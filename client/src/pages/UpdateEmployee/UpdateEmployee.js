import React, { Component } from 'react';
import API from '../../utils/API';
import "./UpdateEmployee.css";
import UpdateEmployeeList from "../../components/UpdateEmployeeList";
import AdminNav from '../../components/AdminNav';


export default class UpdateEmployee extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    employeeNumber: "",
    employeeAvailable: true,
    employeeMugShot: "",

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

    allEmployeesArray: [],

    updateWindow: false,
  }

  componentDidMount = () => {
    this.allEmployees();
  };

  allEmployees = () => {

    API.getAllEmployees()
      .then(res => {
        console.log("this is the return for getAllEmployees")
        console.log(res.data)
        this.setState({
          allEmployeesArray: res.data
        })
      })
      .catch(err => console.log(err));
  };

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  // need to get the previous employee info to show on the update form
  // then compare if changes were mande or to use the extisting data
  // before sending to the server.



  onSubmit = event => {
    event.preventDefault();

    let data = [];

    if (this.state.language_1) {
      data.push({
        language_1: this.state.language_1,
        skill_1: this.state.skill_1
      })
    }

    if (this.state.language_2) {
      data.push({
        language_2: this.state.language_2,
        skill_2: this.state.skill_2
      })
    }

    if (this.state.language_3) {
      data.push({
        language_3: this.state.language_3,
        skill_3: this.state.skill_3
      })
    }

    if (this.state.language_4) {
      data.push({
        language_4: this.state.language_4,
        skill_4: this.state.skill_4
      })
    }

    if (this.state.language_5) {
      data.push({
        language_5: this.state.language_5,
        skill_5: this.state.skill_5
      })
    }


    API.updateEmployee(this.state.employeeNumber,

      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        employeeNumber: this.state.employeeNumber,
        employeeAvailable: this.state.employeeAvailable,
        assets: data,
      })
      .then(res => {
        console.log("this is the return for addNewEmployee()")
        console.log(res.data)
      })
      .catch(err => console.log(err));



    this.setState({
      firstName: "",
      lastName: "",
      employeeNumber: "",
      employeeAvailable: true,
      employeeMugShot: "",

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
    })
  }


  makeChanges = (employeeNumber) => {

    console.log("this is the employee# to modify: " + employeeNumber)

    for (var i = 0; i < this.state.allEmployeesArray.length; i++) {
      if (employeeNumber === this.state.allEmployeesArray[i].employeeNumber) {
        this.setState({
          firstName: this.state.allEmployeesArray[i].firstName,
          lastName: this.state.allEmployeesArray[i].lastName,
          employeeNumber: this.state.allEmployeesArray[i].employeeNumber,
          employeeAvailable: this.state.allEmployeesArray[i].employeeAvailable,
          employeeMugShot: this.state.allEmployeesArray[i].employeeMugShot,

          language_1: this.state.allEmployeesArray[i].language_1,
          skill_1: this.state.allEmployeesArray[i].skill_1,
          language_2: this.state.allEmployeesArray[i].language_2,
          skill_2: this.state.allEmployeesArray[i].skill_2,
          language_3: this.state.allEmployeesArray[i].language_3,
          skill_3: this.state.allEmployeesArray[i].skill_3,
          language_4: this.state.allEmployeesArray[i].language_4,
          skill_4: this.state.allEmployeesArray[i].skill_4,
          language_5: this.state.allEmployeesArray[i].language_5,
          skill_5: this.state.allEmployeesArray[i].skill_5,

        })
      }
    }

    if (this.state.updateWindow === false) {
      this.setState({
        updateWindow: true
      })
    } else {
      // this.setState({
      //   updateWindow: false,
      //   firstName: "",
      //   lastName: "",
      //   employeeNumber: "",
      //   employeeAvailable: true,
      //   employeeMugShot: "",

      //   language_1: "",
      //   skill_1: "",
      //   language_2: "",
      //   skill_2: "",
      //   language_3: "",
      //   skill_3: "",
      //   language_4: "",
      //   skill_4: "",
      //   language_5: "",
      //   skill_5: "",

      // })
    }

  };

  removeEmployee = (employeeNumber) => {
    console.log(employeeNumber);

    API.deleteEmployee(employeeNumber)
    .then(res => {
      console.log("this is the return for deleteEmployee()")
      console.log(res.data)
    })
    .catch(err => console.log(err));

  };

  render() {
    return (
      <div >
        <AdminNav />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-3">
            <UpdateEmployeeList
              allEmployeesArray={this.state.allEmployeesArray}
              removeEmployee={this.removeEmployee}
              makeChanges={this.makeChanges}
            />

          </div>

          <div className="col-9">
            {!this.state.updateWindow ? (
              <div>select employee to update</div>
            ) : (

                <form>
                  <h1 className="text-center">Update Employee</h1>
                  <br />

                  <h4>First Name</h4>
                  <input
                    name='firstName'
                    // placeholder={this.state.firstName}
                    value={this.state.firstName}
                    onChange={event => this.change(event)}
                  />
                  <br />
                  <h4>Last Name</h4>
                  <input
                    name='lastName'
                    // placeholder={this.state.lastName}
                    value={this.state.lastName}
                    onChange={event => this.change(event)}
                  />
                  <br />
                  <h4>Employee Number</h4>
                  <input
                    name='employeeNumber'
                    // placeholder='"Employee Number"'
                    value={this.state.employeeNumber}
                    onChange={event => this.change(event)}
                  />
                  <br />
                 




                  <br />
                  <h3 className="text-center">Enter coding skills.</h3>
                  <br />

                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3">
                      <label for="language_1">Language 1</label>
                      <br />
                      <input
                        name='language_1'
                        // placeholder={this.state.language_1}
                        value={this.state.language_1}
                        onChange={event => this.change(event)}
                      />
                    </div>

                    <div className="col-3">
                      <label for="skill_1">skill 1</label>
                      <br />
                      <input
                        name='skill_1'
                        placeholder='skill_1'
                        value={this.state.skill_1}
                        onChange={event => this.change(event)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3">
                      <label for="language_2">Language 2</label>
                      <br />
                      <input
                        name='language_2'
                        placeholder='language_2'
                        value={this.state.language_2}
                        onChange={event => this.change(event)}
                      />
                    </div>

                    <div className="col-3">
                      <label for="skill_2">skill 2</label>
                      <br />
                      <input
                        name='skill_2'
                        placeholder='skill_2'
                        value={this.state.skill_2}
                        onChange={event => this.change(event)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3">
                      <label for="language_1">Language 1</label>
                      <br />
                      <input
                        name='language_3'
                        placeholder='language_3'
                        value={this.state.language_3}
                        onChange={event => this.change(event)}
                      />
                    </div>

                    <div className="col-3">
                      <label for="skill_3">skill 3</label>
                      <br />
                      <input
                        name='skill_3'
                        placeholder='skill_3'
                        value={this.state.skill_3}
                        onChange={event => this.change(event)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3">
                      <label for="language_4">Language 4</label>
                      <br />
                      <input
                        name='language_4'
                        placeholder='language_4'
                        value={this.state.language_4}
                        onChange={event => this.change(event)}
                      />
                    </div>

                    <div className="col-3">
                      <label for="skill_4">skill 4</label>
                      <br />
                      <input
                        name='skill_4'
                        placeholder='skill_4'
                        value={this.state.skill_4}
                        onChange={event => this.change(event)}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3">
                      <label for="language_5">Language 5</label>
                      <br />
                      <input
                        name='language_5'
                        placeholder='language_5'
                        value={this.state.language_5}
                        onChange={event => this.change(event)}
                      />
                    </div>

                    <div className="col-3">
                      <label for="skill_5">skill 5</label>
                      <br />
                      <input
                        name='skill_5'
                        placeholder='skill_5'
                        value={this.state.skill_5}
                        onChange={event => this.change(event)}
                      />
                    </div>
                  </div>


                  <br />

                  <button onClick={this.onSubmit}>Submit</button>
                </form>

              )}


          </div>




        </div>




      </div>
    )
  }
}
