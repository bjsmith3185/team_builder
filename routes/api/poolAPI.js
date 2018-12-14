const router = require("express").Router();
const pool = require("../../controllers/poolController");

 // Matches with "/api/pool"


router.route("/")
  .get((req, res) => {
    // console.log("a request for all potential team members.")
    pool.findAll()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/")
  .post((req, res) => {
    // console.log("post request to create pool")
    // console.log(req.body)

    pool.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:teamname")
  .get((req, res) => {
    console.log("requesting pool to select members from")
    pool.findByTeamName(req.params.teamname)
      .then(dbresults => {
        // console.log("this is all matches for teamName")
        // console.log(dbresults)
        res.json(dbresults)
      })
      .catch(err => res.status(422).json(err))
  })


  router.route("/:employeenumber")
  .put((req, res) => {
    // console.log("this is updating pool info")
    // console.log(req.params.teamname)
    // console.log(req.body)
    pool.update(req.params.employeenumber, req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  // router.route("/:teamname")
  // .put((req, res) => {
  //   // console.log("this is updating pool info")
  //   // console.log(req.params.teamname)
  //   // console.log(req.body)
  //   pool.update(req.params.teamname, req.body)
  //     .then(dbresults => res.json(dbresults))
  //     .catch(err => res.status(422).json(err))
  // })

  router.route("/:teamname")
  .delete((req, res) => {
    // console.log("this is req to delete teamname");
    // console.log(req.params.teamname)
    pool.remove(req.params.teamname)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })


  module.exports = router;

  //===================================
