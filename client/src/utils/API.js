import axios from "axios";

export default {

// uses route: /api/companyrequirements/
 
addNewTeamRequirements: function(data) {
  // console.log(data);
  return axios.post("/api/teamrequirements", data);
},

getSpecificTeamRequirements: function(teamName) {
  // console.log("getting specif team requirement for: " +teamName);
  return axios.get("/api/teamrequirements/"+teamName);
},




addNewEmployee: function(data) {
  // console.log(data)
  return axios.post("/api/employees", data);
},

getAllEmployees: function() {
  return axios.get("/api/employees");
},

// working on this one now 77777777777777777
updateEmployee: function (employeeNumber, data) {

  return axios.put("/api/employees/" + employeeNumber, data);
},

deleteEmployee: function(employeeNumber) {
  return axios.delete("/api/employees/" + employeeNumber);
},

getSpecificEmployee: function(employeeNumber) {
console.log(typeof(employeeNumber))
  return axios.get("/api/employees/" + employeeNumber);
},




getSpecificTeamPool: function(teamName) {
return axios.get("/api/pool/"+teamName);
},

getAllTeamPool: function() {
  return axios.get("/api/pool");
},


updateTeamPool: function(employeeNumber, data) {
  return axios.put("/api/pool/"+employeeNumber, data)
},



updateTeam: function(teamName, data) {
  console.log("update team with employees")
  console.log(teamName)
  console.log("this should be employee's info")
  console.log(data);
  return axios.put("/api/teams/"+teamName, data);
},

getSpecificTeam: function(teamName) {
  return axios.get("/api/teams/"+teamName);
},

getTeam: function() {
  return axios.get("/api/teams");
},

createNewTeam: function(data) {
  return axios.post("/api/teams", data);
},



logicForPool: function(teamName, data) {
  // console.log("logicForPool: " + teamName)
return axios.post("/api/logic/"+teamName, data);
},



populateEmployeePool: function() {
  return axios.post("/api/populate");
},

resetAll: function() {
  return axios.post("/api/populate/reset");
}



};

