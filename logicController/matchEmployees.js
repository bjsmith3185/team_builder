
const pool = require("../controllers/poolController");



module.exports = {
    performMatch: function (teamName, requirements, employeeResults) {

       
        // console.log("this is the requirements")
        // console.log(requirements);

        // console.log("these are available employees")
        // console.log(employeeResults);

        return new Promise((resolve, reject) => {

            // this is what is returned for requirements....
            // [{"language_1":"node","skill_1":"1"},{"language_2":"express","skill_2":"2"}]

            // this is what is returned for employees...
            // [ { assets: [ [Object] ],
            //     _id: 5c0e7e76aaef5e8abe2cf973,
            //     firstName: 'John',
            //     lastName: 'Smith',
            //     employeeNumber: '323',
            //     available: true,
            //     date: 2018-12-10T15:07:07.370Z },]

            for (var i = 0; i < requirements.length; i++) {

                for (var k = 0; k < employeeResults.length; k++) {
                    for (var y = 0; y < employeeResults[k].assets.length; y++) {

                        if (requirements[i].language === employeeResults[k].assets[y].language) {
                            console.log("this languages match!!!");
                            console.log(`requirement: ${requirements[i].language} employee language: ${employeeResults[k]}`);

                            // push the match to the pools collection
                            

                            pool.create({
                                teamName: teamName,
                                firstName: employeeResults[k].firstName,
                                lastName: employeeResults[k].lastName,
                                employeeNumber: employeeResults[k].employeeNumber,
                                assets: employeeResults[k].assets,
                            })
                                .then(result => {
                                    console.log("created new document in poolsModel")
                                    console.log(result)
                                })
                                .catch(err => res.status(422))

                                

                        }


                    }




                }

            }





            let result = requirements[0].language_1;


            resolve(result);
        })
    },

};