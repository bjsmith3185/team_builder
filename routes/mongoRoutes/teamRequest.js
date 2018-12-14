var mongojs = require("mongojs");

var databaseUrl = "horseshoe";
var collections = ["teamRequest"];

var db = mongojs(databaseUrl, collections);

db.on("error", function (error) {
    console.log("Database Error:", error);
});

app.get("/all", function (req, res) {
    // Find all team requests in the team request collection
    db.teamRequest.find({}, function (error, found) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        else {
            // Otherwise, send json of the team request back to user
            // This will fire off the success function of the ajax request
            res.json(found);
        }
    });
});

app.get("/find/:id", function (req, res) {
    // When searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))

    // Find just one result in the team request collection
    db.teamRequest.findOne(
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
                // Otherwise, send the team request to the browser
                // This will fire off the success function of the ajax request
                console.log(found);
                res.send(found);
            }
        }
    );
});

app.post("/submit", function (req, res) {
    console.log(req.body);
    // Insert the teams status into the team request collection
    db.teamRequest.insert(req.body, function (error, saved) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        else {
            // Otherwise, send the team request back to the browser
            // This will fire off the success function of the ajax request
            res.send(saved);
        }
    });
});

app.post("/update/:id", function (req, res) {
    // When searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))

    // Update the team status that matches the object id
    db.teamRequest.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            // Set the team name, manager name, start/end dates, and languages required
            // sent in the req body.
            $set: {
                teamName: req.body.teamName,
                manager: req.body.manager,
                beginDate: req.body.beginDate,
                endDate: req.body.endDate,
                languageRequired: [{
                    languageReq: req.body.languageReq,
                    skillReq: req.body.skillReq
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
    // Remove every team request from the team request collection
    db.teamRequest.remove({}, function (error, response) {
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
    // Remove a team request using the objectID
    db.teamRequest.remove(
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