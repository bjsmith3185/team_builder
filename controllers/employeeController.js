const db = require("../models");

// received data for the company requirements: companyname, keywords
module.exports = {

  findAll: function () {
    return db.employeeModel
      .find({})
      // .sort({ date: -1 })
  },
  findByEmployeeNumber: function (employeeNumber) {
    console.log("????? " + employeeNumber)
    console.log(employeeNumber)
    
     return db.employeeModel
      .findOne({ employeeNumber : employeeNumber })
  },

 
  create: function (data) {
    // console.log("employeesController.js.create");
    // console.log(data);
    return db.employeeModel
      .create(data)
  },
  update: function (employeeNumber, data) {
    console.log("employeescontroller.js ")
    console.log(employeeNumber);
    console.log(data);
    return db.employeeModel
      .findOneAndUpdate({ employeeNumber: employeeNumber }, data, {new: true})
  },
  remove: function (employeeNumber) {
    // console.log("removing this one: " + employeeNumber)
    return db.employeeModel
    .findOneAndRemove({employeeNumber: employeeNumber})
      // .findById({ company: company })
      // .then(dbModel => dbModel.remove())
  },

  findByAvailable: function () {
    return db.employeeModel
      .find({available: true})
  },

  removeAll: function () {
    return db.employeeModel
    .deleteMany({})
      
  },

};


//===================================

