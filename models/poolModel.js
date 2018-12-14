const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const poolSchema = new Schema({

  teamName: { type: String },

  firstName: { type: String },
  lastName: { type: String },
  employeeNumber: { type: String },
  employeeAvailable: { type: Boolean },

  assets: [],

  addedToTeam: false,
  
  date: { type: Date, default: Date.now }


});

const PoolModel = mongoose.model("Pool", poolSchema);

module.exports = PoolModel;
