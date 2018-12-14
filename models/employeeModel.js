const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

// insert the search requirements from the company

  firstName: { type: String },
  lastName: { type: String },
  employeeNumber: { type: Number },
  available: { type: Boolean },

  assets: [],
  
  date: { type: Date, default: Date.now }


});

const EmployeeModel = mongoose.model("Employee", employeeSchema);

module.exports = EmployeeModel;
