var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");



router.get("/", function (req, res) {
    //console.log("get(/...");
    burger.all(function (data) {
        var burgersObj = {
            burgers: data
        };
        //console.log(burgersObj);
        res.render("index", burgersObj);
    });
});


router.post("/api/burger", function (req, res) {
    //console.log("post(/api/burger...");
    burger.insertOne([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
        ], function (result) {
            res.redirect("/");
        });
});


router.put("/api/burgers/:id", function (req, res) {
    //console.log("put(/api/burgers/:id...");
    var burgerId = "id = " + req.params.id;
    //console.log(`burgerId ${burgerId}`);

    burger.updateOne({
        devoured: req.body.devoured
    }, burgerId, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;