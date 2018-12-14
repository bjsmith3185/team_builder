

const scrapeData = require("./scrapeData");


const db = require("../models");
// const companyRequirements = require("../controllers/companyRequirementsController");
const companyResults = require("../controllers/companyResultsController");
const companyRequirements = require("../controllers/teamRequirementsController");

// function to create matches for company
module.exports = {


    match: function (company) {
       return companyRequirements.findByCompany(company)
            // .then(dbresults => {
            //     console.log("this is the company searchwords back from database.");
            //     console.log(dbresults.searchWords);
            // })
        }
              
    };