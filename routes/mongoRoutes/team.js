var mongojs = require("mongojs");

var databaseUrl = "horseshoe";
var collections = ["team"];

var db = mongojs(databaseUrl, collections);

db.on("error", function (error) {
    console.log("Database Error:", error);
});

app.get("/all", function (req, res) {
    // Find all teams in the team collection
    db.team.find({}, function (error, found) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        else {
            // Otherwise, send json of the team back to user
            // This will fire off the success function of the ajax request
            res.json(found);
        }
    });
});

app.get("/find/:id", function (req, res) {
    // When searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))

    // Find just one result in the team collection
    db.team.findOne(
        {
            // Using the id in the url
            _id: mongojs.ObjectId(req.params.id)
        },
        function (error, found) {
            // log any errors
            if (error) {
                console.log(error);
                res.send(error);
            }
            else {
                // Otherwise, send the team to the browser
                // This will fire off the success function of the ajax request
                console.log(found);
                res.send(found);
            }
        }
    );
});

app.post("/submit", function (req, res) {
    console.log(req.body);
    // Insert the teams into the team collection
    db.team.insert(req.body, function (error, saved) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        else {
            // Otherwise, send the team back to the browser
            // This will fire off the success function of the ajax request
            res.send(saved);
        }
    });
});

app.post("/update/:id", function (req, res) {
    // When searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))

    // Update the team that matches the object id
    db.team.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            // Set the team name, manager name, start/end date, and team members
            // sent in the req body.
            $set: {
                teamName: req.body.teamName,
                manager: req.body.manager,
                beginDate: req.body.beginDate,
                endDate: req.body.endDate,
                members: [{
                    employeeName: req.body.employeeName,
                    employeeNumber: req.body.employeeNumber
                }]

            }
        },
        function (error, edited) {
            // Log any errors from mongojs
            if (error) {
                console.log(error);
                res.send(error);
            }
            else {
                // Otherwise, send the mongojs response to the browser
                // This will fire off the success function of the ajax request
                console.log(edited);
                res.send(edited);
            }
        }
    );
});

// Clear the DB
app.get("/clearall", function (req, res) {
    // Remove every team from the team collection
    db.team.remove({}, function (error, response) {
        // Log any errors to the console
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            // Otherwise, send the mongojs response to the browser
            // This will fire off the success function of the ajax request
            console.log(response);
            res.send(response);
        }
    });
});

// Delete One from the DB
app.get("/delete/:id", function (req, res) {
    // Remove a team using the objectID
    db.team.remove(
        {
            _id: mongojs.ObjectID(req.params.id)
        },
        function (error, removed) {
            // Log any errors from mongojs
            if (error) {
                console.log(error);
                res.send(error);
            }
            else {
                // Otherwise, send the mongojs response to the browser
                // This will fire off the success function of the ajax request
                console.log(removed);
                res.send(removed);
            }
        }
    );
});