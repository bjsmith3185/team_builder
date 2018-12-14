const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamRequestSchema = new Schema({

// insert the search requirements from the company

  teamName: { type: String },
  manager: { type: String },
  teamStartDate: { type: String },
  teamEndDate: { type: String },

  assets: [],
  
  date: { type: Date, default: Date.now }


});

const TeamRequestModel = mongoose.model("TeamRequest", teamRequestSchema);

module.exports = TeamRequestModel;
