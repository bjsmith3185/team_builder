import React, { Component } from 'react';
import API from '../../utils/API';
import "./ViewAllEmployees.css";
import CreateStatusBar from '../../components/CreateStatusBar';
import AdminNav from '../../components/AdminNav';

export default class ViewAllEmployees extends React.Component {
  state = {
    employeesArray: [],
    details: false,

    firstName: '',
    lastName: '',
    employeeNumber: '',
    available: '',
    assets: [],

  };

  componentDidMount = () => {
    this.getAllEmployees();
  };

  getAllEmployees = () => {
    API.getAllEmployees()
      .then(res => {
        console.log("this is the return for get all employees")
        console.log(res.data)


        this.setState({
          employeesArray: res.data
        })
      })
      .catch(err => console.log(err));
  };

  findSpecificEmployee = (employeeNumber) => {
    this.setState({
      details: true
    })
    // console.log("hellow")
    // console.log(employeeNumber)
    let newEmployeeNumber = parseInt(employeeNumber)
    API.getSpecificEmployee(newEmployeeNumber)
      .then(res => {
        console.log("this is the return for get specific employees")
        console.log(res.data)


        this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          employeeNumber: res.data.employeeNumber,
          available: res.data.available,
          assets: res.data.assets
        })
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

        {/* <CreateStatusBar modify="Select Team Members" /> */}

        <hr />
        <div>All Employees</div>

        <div className="row">
          <div className="col-6">

            <ul>
              {this.state.employeesArray.map(person => (
                <li onClick={() => this.findSpecificEmployee(person.employeeNumber)} key={person.employeeNumber}>
                  {person.firstName} {person.lastName}

                </li>
              ))}
            </ul>
          </div>

          <div className="col-6">
            {this.state.details ? (

              <div>
                <div>{this.state.firstName} {this.state.lastName}</div>
                <div>Employee Number: {this.state.employeeNumber}</div>
                <div>Languages:</div>
                <ul>
                  {this.state.assets.map(language => (
                    <li key={language.language}>
                      Language: {language.language},   Level: {language.level}.
                    </li>
                  ))}
                </ul>


              </div>


            ) : (

                <div>Click Employee to View Information</div>
              )}


          </div>

        </div>

      </div>
    );
  }
}



