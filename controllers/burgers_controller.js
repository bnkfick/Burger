var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");



router.get("/", function(req, res) {
    console.log("router.get");
    burger.all(function(data) {
      var burgersObj = {
        burgers: data
      };
      console.log(burgersObj);
      res.render("index", burgersObj);
    });
});
  
router.post("/", function (req, res) {
    console.log("router.post");
});

router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);
});


module.exports = router;