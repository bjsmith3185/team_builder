const router = require("express").Router();
const teams = require("../../controllers/teamsController");

 // Matches with "/api/teams"


router.route("/")
  .get((req, res) => {
    // console.log("a request for all companies.")
    teams.findAll()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/")
  .post((req, res) => {
    // console.log("post request to create teams")
    // console.log(req.body)
    let name = req.body.teamName;
    // console.log("3333333333333 that is theis: " + name)

    teams.create(req.body, name)
      .then(dbresults => {
        console.log("this is the new team collection33333333333333333333")
        console.log(dbresults)
        res.json(dbresults)
      })
      .catch(err => res.status(422).json(err))
  });
  

  router.route("/:teamname")
  .get((req, res) => {
    console.log("222222222")
    teams.findByTeamName(req.params.teamname)

      .then(dbresults => {
       console.log("222222 this should be only one team document here")
        console.log(dbresults);
        res.json(dbresults)
      })
        
      
      .catch(err => res.status(422).json(err))
  })

  router.route("/:teamname")
  .put((req, res) => {
    console.log("this is updating teams")
    console.log(req.params.teamname)
    console.log(req.body)
    teams.update(req.params.teamname, req.body)
      .then(dbresults => {
        console.log("!!!!!!!!this is the team array with populate that is not working")
        console.log(dbresults);
        res.json(dbresults)})
     
        
        
      .catch(err => res.status(422).json(err))
  })

  router.route("/:teamname")
  .delete((req, res) => {
    // console.log("this is req to delete teamname");
    // console.log(req.params.teamname)
    teams.remove(req.params.teamname)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })


  module.exports = router;

  //===================================
