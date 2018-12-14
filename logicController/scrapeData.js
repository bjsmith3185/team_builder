// this file will be called from "./operation.js".


// the function will take in a parameter for the url to scrape  (linkedin)


module.exports = {
    performScrape: function(location) {
     // location is the url to scrape
    let data = [];


      data = [
        {
          resumeName: "Trey",
          resume: "words words more words react node words",
        },
        {
          resumeName: "Holland",
          resume: "words words more words express handlebars words",
        },
        {
          resumeName: "Brian",
          resume: "words words more words html css bootstrap words",
        }
      ]

    
     return data;
    },
   
  };
  