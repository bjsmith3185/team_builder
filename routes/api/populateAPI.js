const router = require("express").Router();
const employee = require("../../controllers/employeeController");
const pool = require("../../controllers/poolController");
const teams = require("../../controllers/teamsController");
("../../controllers/teamRequirementsController");
const teamRequirements = require("../../controllers/teamRequirementsController");

// Matches with "/api/populate"

const employeeSeedArray = [
    {
        firstName: "John",
        lastName: "Smith",
        employeeNumber: 393,
        assets: [{
            language: "javascript",
            level: 3,
        }],
        available: true,
    },

    {
        firstName: "Scooter",
        lastName: "Thompson",
        employeeNumber: 565,
        assets: [{
            language: "react",
            level: 2,
        }],
        available: true,
    },


    {
        firstName: "Beau",
        lastName: "Lewis",
        employeeNumber: 787,
        assets: [{
            language: "node",
            level: 3,
        }],
        available: true,
    },

    {
        firstName: "Herbert",
        lastName: "Schultz",
        employeeNumber: 582,
        assets: [{
            language: "express",
            level: 3,
        }],
        available: true,
    },

    {
        firstName: "Holland",
        lastName: "Crookson",
        employeeNumber: 777,
        assets: [{
            language: "css",
            level: 1,
        }],
        available: true,
    },

    {
        firstName: "Brian",
        lastName: "Smurf",
        employeeNumber: 132,
        assets: [{
            language: "css",
            level: 3,
        }],
        available: true,
    },

    {
        firstName: "Trey",
        lastName: "Boomer",
        employeeNumber: 242,
        assets: [{
            language: "react",
            level: 3,
        }],
        available: true,
    },

    {
        firstName: "Darin",
        lastName: "Boogsh",
        employeeNumber: 868,
        assets: [{
            language: "css",
            level: 3,
        }],
        available: true,
    },

    {
        firstName: "Kevin",
        lastName: "foof",
        employeeNumber: 464,
        assets: [{
            language: "react",
            level: 2,
        }],
        available: true,
    },

    {
        firstName: "Adele",
        lastName: "Yoot",
        employeeNumber: 824,
        assets: [{
            language: "css",
            level: 2,
        }],
        available: true,
    },

    {
        firstName: "John",
        lastName: "Yeet",
        employeeNumber: 096,
        assets: [{
            language: "css",
            level: 2,
        }],
        available: true,
    },

    {
        firstName: "Bill",
        lastName: "Crows",
        employeeNumber: 555,
        assets: [{
            language: "node",
            level: 3,
        }],
        available: true,
    },

    {
        firstName: "Odin",
        lastName: "Alfather",
        employeeNumber: 333,
        assets: [{
            language: "node",
            level: 3,
        }],
        available: true,
    },

    {
        firstName: "Daniel",
        lastName: "Boone",
        employeeNumber: 343,
        assets: [{
            language: "mongo",
            level: 2,
        }],
        available: true,
    },

    {
        firstName: "Ronald",
        lastName: "Roogan",
        employeeNumber: 353,
        assets: [{
            language: "mongo",
            level: 2,
        }],
        available: true,
    },

    {
        firstName: "George",
        lastName: "Brush",
        employeeNumber: 363,
        assets: [{
            language: "react",
            level: 5,
        }],
        available: true,
    },

    {
        firstName: "Jason",
        lastName: "Smith",
        employeeNumber: 373,
        assets: [{
            language: "javascript",
            level: 5,
        }],
        available: true,
    },

    {
        firstName: "Larry",
        lastName: "Smith",
        employeeNumber: 383,
        assets: [{
            language: "express",
            level: 5,
        }],
        available: true,
    }
]


router.route("/")
    .post((req, res) => {
        for (var i = 0; i < employeeSeedArray.length; i++) {
            employee.create(employeeSeedArray[i])
        }
    });

router.route("/reset")
    .post((req, res) => {
        console.log("removing pools")
        // clear pools
        pool.removeAll()
            .then(dbresults => res.json(dbresults))
            .catch(err => res.status(422).json(err))
        // clear teamrequest

        teamRequirements.removeAll()
            .then(dbresults => res.json(dbresults))
            .catch(err => res.status(422).json(err))
        // clear teams
        teams.removeAll()
            .then(dbresults => res.json(dbresults))
            .catch(err => res.status(422).json(err))

        employee.removeAll()
            .then(dbresults => res.json(dbresults))
            .catch(err => res.status(422).json(err))
    });



module.exports = router;


