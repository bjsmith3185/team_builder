const router = require("express").Router();
const teamRequirements = require("../../controllers/teamRequirementsController");

 // Matches with "/api/teamrequirements"


router.route("/")
  .get((req, res) => {
    // console.log("a request for all companies.")
    teamRequirements.findAll()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/")
  .post((req, res) => {
    // console.log("post request to create team")
    // console.log(req.body)
    let name = req.body.teamName;

    teamRequirements.create(req.body, name)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:teamname")

  .get((req, res) => {
    teamRequirements.findByTeamName(req.params.teamname)
      .then(dbresults => {
        // console.log("!!!!!!!!!!!!this is the team name response")
        // console.log(dbresults)
        res.json(dbresults)
      })
      .catch(err => res.status(422).json(err))
  })

  router.route("/:teamname")
  .put((req, res) => {
    // console.log("this is updating teamrequirements info")
    // console.log(req.params.teamname)
    // console.log(req.body)
    teamRequirements.update(req.params.teamname, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/:teamname")
  .delete((req, res) => {
    // console.log("this is req to delete team");
    // console.log(req.params.teamname)
    teamRequirements.remove(req.params.teamname)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })


  module.exports = router;

  //===================================
