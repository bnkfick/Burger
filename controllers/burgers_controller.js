var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function (req, res) {

    console.log("fouter.get");

});

router.post("/", function (req, res) {
    console.log("router.post");
});

router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);
});


module.exports = router;