var mongojs = require("mongojs");

var databaseUrl = "horseshoe";
var collections = ["employee"];

var db = mongojs(databaseUrl, collections);

db.on("error", function (error) {
    console.log("Database Error:", error);
});

app.get("/all", function (req, res) {
    // Find all employees in the employee collection
    db.employees.find({}, function (error, found) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        else {
            // Otherwise, send json of the employees back to user
            // This will fire off the success function of the ajax request
            res.json(found);
        }
    });
});

app.get("/find/:id", function (req, res) {
    // When searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))

    // Find just one result in the employees collection
    db.employees.findOne(
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
                // Otherwise, send the employee to the browser
                // This will fire off the success function of the ajax request
                console.log(found);
                res.send(found);
            }
        }
    );
});

app.post("/submit", function (req, res) {
    console.log(req.body);
    // Insert the employee into the employees collection
    db.employees.insert(req.body, function (error, saved) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        else {
            // Otherwise, send the employee back to the browser
            // This will fire off the success function of the ajax request
            res.send(saved);
        }
    });
});

app.post("/update/:id", function (req, res) {
    // When searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))

    // Update the employee that matches the object id
    db.employees.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            // Set the name, employee number, assets, and availability 
            // sent in the req body.
            $set: {
                name: req.body.name,
                employeeNumber: req.body.employeeNumber,
                assets: [{
                    language: req.body.language,
                    level: req.body.level,
                }],
                availability: [{
                    condition: req.body.condition,
                    assignment: req.body.assignment,
                    beginDate: req.body.beginDate,
                    endDate: req.body.endDate
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
    // Remove every employee from the employees collection
    db.employees.remove({}, function (error, response) {
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
    // Remove a employee using the objectID
    db.employees.remove(
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