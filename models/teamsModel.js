const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamsSchema = new Schema({

  // insert the search requirements from the company

  teamName: { type: String },
  manager: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  assets: [],
  members: [],


  date: { type: Date, default: Date.now }


});

const TeamsModel = mongoose.model("Teams", teamsSchema);

module.exports = TeamsModel;




// WOULD LIKE TO GET THIS WORKING...

// members: [ {
//   type: Schema.Types.ObjectId,
//   ref: "Pool"
// } ],