
// this file will be called from routes/api/companyResultsAPI.js

const scrapeData = require("./scrapeData");


const db = require("../models");
const companyRequirements = require("../controllers/teamRequirementsController");
const companyResults = require("../controllers/companyResultsController");
const createMatches = require("../logicController/createMatches");

// function's to control logic for external api's
module.exports = {

  // THIS ONE NEEDS A RETURN
  runSpecificCompanyforMatch: function (company) {


    return new Promise((resolve, reject) => {

      // get the name of the company
      console.log("this is the company: " + company);

      companyRequirements.findByCompany(company)
        .then(dbresults => {
          console.log("this is the company searchwords back from database.");
          console.log(dbresults.searchWords);

          // !!!!! here we can call the linkedin api with keywords !!!!!
          // scrapeData.performScrape()
          // call a scrape() from "./scrapeData.js".
          // req.body.location = "linkedin url".
          //=========================================================
          let resume1 = {
            company: company,
            name: "roger",
            resume: "i am this guy, i use keywords: " + dbresults.searchWords[0] + "and sometimes: " + dbresults.searchWords[1] + ".",
          };
          let resume2 = {
            company: company,
            name: "kevin",
            resume: "i am this guy, i use keywords: " + dbresults.searchWords[1] + "and sometimes: " + dbresults.searchWords[2] + ".",
          };
          let resume3 = {
            company: company,
            name: "larry",
            resume: "i am this guy, i use keywords: " + dbresults.searchWords[0] + "and sometimes: " + dbresults.searchWords[2] + ".",
          };

          let matches = [resume1, resume2, resume3];
          //==================================================
          for (var i = 0; i < matches.length; i++) {
            companyResults.create(matches[i])
              .then(uploaded => {
                console.log("match uploaded");
                console.log(uploaded);
                resolve(uploaded);
              })

          }

        });
    })


  },

  runAllCompaniesForMatches: function (req, res) {
    console.log("this is the runAllCompaniesForMatches()")

    // companyRequirements.findAll()
    // .then(dbresults => {
    //   console.log("this is all companyrequirements");
    //   console.log(dbresults);
    // })
  },


};