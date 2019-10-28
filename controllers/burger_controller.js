var express = require("express");
var burger = require("../models/burger");

//this is where we build router connections
var router = express.Router();

//GET Router
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hdbrsObj = {
            burger: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });

    //POST Router
    router.post("./api/burger", function (req, res) {
        burger.insert(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function (result) {
                res.json({ id: result.insertID });
            }
        )
    })
});