import React, { Component } from 'react';
import API from '../../utils/API';
import "./AddEmployee.css";
import AdminNav from '../../components/AdminNav';


export default class AddEmployee extends React.Component {
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


  }

  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

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


    API.addNewEmployee({
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

  render() {
    return (
      <div >
        <AdminNav />
        <br />
        <br />
        <br />
        <br />
        <br />

        <form>
          <h1 className="text-center">Add New Employee</h1>
          <br />

          <div className="row">
            <div className="col-4 text-center">
              <div>First Name</div>
              <input
                name='firstName'
                placeholder='"first name"'
                value={this.state.firstName}
                onChange={event => this.change(event)}
              />
              <br />
              <div>Last Name</div>
              <input
                name='lastName'
                placeholder='"last name"'
                value={this.state.lastName}
                onChange={event => this.change(event)}
              />
              <br />
              <div>Employee Number</div>
              <input
                name='employeeNumber'
                placeholder='"Employee Number"'
                value={this.state.employeeNumber}
                onChange={event => this.change(event)}
              />
              <br />
              <br />
              <br />
              <br />
              <br />


              <button onClick={this.onSubmit}>Submit</button>

            </div>

            <div className="col-3 text-center">
              <div>Languages</div>
              <input
                name='language_1'
                placeholder='language_1'
                value={this.state.language_1}
                onChange={event => this.change(event)}
              />
              <br />
              <br />
              <input
                name='language_2'
                placeholder='language_2'
                value={this.state.language_2}
                onChange={event => this.change(event)}
              />
              <br />
              <br />
              <input
                name='language_3'
                placeholder='language_3'
                value={this.state.language_3}
                onChange={event => this.change(event)}
              />
              <br />
              <br />
              <input
                name='language_4'
                placeholder='language_4'
                value={this.state.language_4}
                onChange={event => this.change(event)}
              />
              <br />
              <br />
              <input
                name='language_5'
                placeholder='language_5'
                value={this.state.language_5}
                onChange={event => this.change(event)}
              />




            </div>

            <div className="col-3 text-center">
              <div>Skill Level</div>
              <input
                name='skill_1'
                placeholder='skill_1'
                value={this.state.skill_1}
                onChange={event => this.change(event)}
              />
              <br />
              <br />
              <input
                name='skill_2'
                placeholder='skill_2'
                value={this.state.skill_2}
                onChange={event => this.change(event)}
              />
              <br />
              <br />

              <input
                name='skill_3'
                placeholder='skill_3'
                value={this.state.skill_3}
                onChange={event => this.change(event)}
              />
              <br />
              <br />
              <input
                name='skill_4'
                placeholder='skill_4'
                value={this.state.skill_4}
                onChange={event => this.change(event)}
              />
              <br />
              <br />
              <input
                name='skill_5'
                placeholder='skill_5'
                value={this.state.skill_5}
                onChange={event => this.change(event)}
              />



            </div>




          </div>



        </form>
      </div>
    )
  }
}
