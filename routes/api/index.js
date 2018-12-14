const router = require("express").Router();

const createTeam = require("./createTeamAPI");
const teamsRoutes = require("./teamsAPI");
const employeeRoutes = require("./employeeAPI");
const poolRoutes = require("./poolAPI");
const logicRoutes = require("./logicAPI");
const populateRoutes = require("./populateAPI");


// create team route
router.use("/teamrequirements", createTeam);

// employee routes
router.use("/employees", employeeRoutes);

// pool routes
router.use("/pool", poolRoutes);

// teams routes
router.use("/teams", teamsRoutes);

// logic routes
router.use("/logic", logicRoutes);

// populate routes
router.use("/populate", populateRoutes);




module.exports = router;
