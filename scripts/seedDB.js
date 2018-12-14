const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const companyRequirementsmodelSeed = [
  {
    company: "lowes",
    searchWords: ["node", "express", "react"],
    date: new Date(Date.now())
  },
  {
    company: "wells",
    searchWords: ["basic", "css", "html"],
    date: new Date(Date.now())
  },
 
];

db.CompanyRequirementsModel
  .remove({})
  .then(() => db.CompanyRequirementsModel.collection.insertMany(companyRequirementsmodelSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
