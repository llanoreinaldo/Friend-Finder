var path = require('path');
var friends = require('../data/friends.js'); //Stores friends database in friends variable.

module.exports = function (app) {

    // Routes
    // =============================================================

    // Displays all friends, or returns false
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        console.log(req.body.name);
        console.log(req.body.scores.length);

        var matchLogic = {};

        var matchScoreToBeat = 100;

        for (var i = 0; i < friends.length; i++) {

            var mathArray = [];
            var totalDifference = 0;


            for (var x = 0; x < friends[i].scores.length; x++) {

                mathArray.push(Math.abs(req.body.scores[x] - friends[x].scores[x]));

            };

            console.log(mathArray)

            for (var y = 0; y < mathArray.length; y++) {
                totalDifference += mathArray[y];
            }

            console.log(totalDifference)


            if (matchLogic == {}) {
                matchLogic = friends[i];
                matchScoreToBeat = totalDifference;
            } else if (totalDifference < mathScoreToBeat) {
                match = friends[i];
                mathScoreToBeat = totalDifference;
            }

            console.log(mathScoreToBeat)

        }

        console.log('Your match is: ' + matchLogic.name)

        // Push the new person into the friends array.
        friends.push(req.body)

        // Return the friends array as JSON.
        // res.json(friends)
        res.json(matchLogic)


    });

}
