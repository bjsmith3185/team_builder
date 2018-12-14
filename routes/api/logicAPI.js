const router = require("express").Router();
const teamRequirements = require("../../controllers/teamRequirementsController");
const employees = require("../../controllers/employeeController");
const matchEmployees = require("../../logicController/matchEmployees");

// Matches with "/api/logic"
router.route("/:teamname")
  .get((req, res) => {
    let teamName = req.params.teamname;
    // console.log("!!!! Team Name: " + teamName);
    // get requirements from database
    teamRequirements.findByTeamName(req.params.teamname)
      .then(dbresults => {
        // console.log("this is the team requirements")
        // console.log(dbresults)

        // get employees from database
        employees.findByAvailable()
          .then(employeeResults => {
            // console.log("this is the available employees");
            // console.log(employeeResults);


            // send requirements and employees to the logic file

            let requirements = [];
            requirements = dbresults.assets;
            // console.log(requirements);

            matchEmployees.performMatch(teamName, requirements, employeeResults)
              .then(result => {
                // console.log(result)
              })
              .catch(err => res.status(422).json(err))

          })
          .catch(err => res.status(422).json(err))



      })




    // function to create pools collection
    // db.pool.replaceOne(
    //   { employeeNumber: employeeNmuber },
    //   { employeeNumber: employeeNumber,

    //   },
    //   { upsert: true }
    // )



    //       })
    //       .catch(err => res.status(422).json(err))


    res.send("finished")
  });










// router.route("/")
//   .get((req, res) => {
//     console.log("a request for all companies.")
//     teamRequirements.findAll()
//       .then(dbresults => res.json(dbresults))
//       .catch(err => res.status(422).json(err))
//   })

//   router.route("/")
//   .post((req, res) => {
//     console.log("post request to create team")
//     console.log(req.body)

//     teamRequirements.create(req.body)
//       .then(dbresults => res.json(dbresults))
//       .catch(err => res.status(422).json(err))
//   });

//   router.route("/:teamname")
//   .get((req, res) => {
//     teamRequirements.findByTeamName(req.params.teamname)
//       .then(dbresults => {
//         console.log("this is the team name response")
//         console.log(dbresults)
//         res.json(dbresults)
//       })
//       .catch(err => res.status(422).json(err))
//   })

//   router.route("/:teamname")
//   .put((req, res) => {
//     console.log("this is updating teamrequirements info")
//     console.log(req.params.teamname)
//     console.log(req.body)
//     teamRequirements.update(req.params.teamname, req.body)
//       .then(dbresults => res.json(dbresults))
//       .catch(err => res.status(422).json(err))
//   })

//   router.route("/:teamname")
//   .delete((req, res) => {
//     console.log("this is req to delete team");
//     console.log(req.params.teamname)
//     teamRequirements.remove(req.params.teamname)
//       .then(dbresults => res.json(dbresults))
//       .catch(err => res.status(422).json(err))
//   })


module.exports = router;
