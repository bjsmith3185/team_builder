
// this file will be called from routes/api/companyResultsAPI.js

const scrapeData = require("./scrapeData");


const db = require("../models");
const companyRequirements = require("../controllers/companyRequirementsController");
const companyResults = require("../controllers/companyResultsController");

// function's to control logic for external api's
module.exports = {


  runSpecificCompanyforMatch: function (company) {
    // get the name of the company
    //  console.log("this is the company: " + company);

    companyRequirements.findByCompany(company)
      .then(dbresults => {
        console.log("this is the company searchwords back from database.");
        console.log(dbresults.searchWords);
        // !!!!! here we can call the linkedin api with keywords !!!!!
          // scrapeData.performScrape()
        // call a scrape() from "./scrapeData.js".
        // req.body.location = "linkedin url".

        



        return dbresults.searchWords;
      })
      .catch(err => console.log(err))






    // function to match keyword

    //  save the matches to db.companymatches

  },


  runAllCompaniesForMatches: function (req, res) {

  },


};