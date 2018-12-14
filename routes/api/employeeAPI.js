const router = require("express").Router();
const employee = require("../../controllers/employeeController");

 // Matches with "/api/employee"


router.route("/")
  .get((req, res) => {
    console.log("a request for all employees.")
    employee.findAll()
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })

  router.route("/")
  .post((req, res) => {
    // console.log("post request to create employee")
    // console.log(req.body)

    employee.create(req.body)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  });

  router.route("/:employeenumber")

  .get((req, res) => {
    console.log("@@@@@@@@@")
    console.log(req.params.employeenumber)
    employee.findByEmployeeNumber(req.params.employeenumber)
      .then(dbresults => {
        console.log("!!!!!!!!!!!!!!!")
        console.log(dbresults)
        res.json(dbresults)
      })
      .catch(err => res.status(422).json(err))
  })

  router.route("/:employeenumber")
  .put((req, res) => {
    console.log("this is updating employee available to FALSE")
    console.log(req.params.employeenumber)
    console.log(req.body)
    employee.update(req.params.employeenumber, req.body)
      .then(dbresults => {
        console.log("this should have the assigned: false")
        console.log(dbresults);
        res.json(dbresults)})
      .catch(err => res.status(422).json(err))
  })

  router.route("/:employeenumber")
  .delete((req, res) => {
    // console.log("this is req to delete employeenumber");
    // console.log(req.params.employeenumber)
    employee.remove(req.params.employeenumber)
      .then(dbresults => res.json(dbresults))
      .catch(err => res.status(422).json(err))
  })


  module.exports = router;

  //===================================
