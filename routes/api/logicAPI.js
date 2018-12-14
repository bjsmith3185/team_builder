const router = require("express").Router();
const teamRequirements = require("../../controllers/teamRequirementsController");
const employees = require("../../controllers/employeeController");
const matchEmployees = require("../../logicController/matchEmployees");

// Matches with "/api/logic"
router.route("/:teamname")
  .post((req, res) => {
    let teamName = req.params.teamname;
    console.log("&&&&&&&&&&&& what is this?")
    console.log(req.body)
   
    // teamRequirements.findByTeamName(req.params.teamname)
    //   .then(dbresults => {
        // console.log("!!!!!!!!!!!!this is the team name response")
        // console.log(dbresults)
       

        // get employees from database
        employees.findByAvailable()
          .then(employeeResults => {
            // console.log("this is the available employees");
            // console.log(employeeResults);


            // send requirements and employees to the logic file

            let requirements = [];
            requirements = req.body.assets;
            // requirements = dbresults.assets;
            // console.log(requirements);
            console.log(`teamname: ${teamName}, requirements: ${requirements}`)

            matchEmployees.performMatch(teamName, requirements, employeeResults)
              .then(result => {
                // console.log(result)
                res.send("finished")
              })
              .catch(err => res.status(422).json(err))

          })
          // .catch(err => res.status(422).json(err))



      // })

    // res.send("finished")
  });




module.exports = router;
