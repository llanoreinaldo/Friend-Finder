// Routes
// =============================================================

// Displays a single character, or returns false
app.get("/api/friends", function (req, res) {
    return res.json(surveyData);
});

app.post("/api/friends", function (req, res) {
    var newSurvey = req.body;

    newSurvey.name = newSurvey.name.replace(/\s+/g, "").toLowerCase();

    console.log(newSurvey);

    surveyData.push(newSurvey);

    res.json(newSurvey);
});