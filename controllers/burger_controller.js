var express = require("express");
var burger = require("../models/burger");

//this is where we build router connections
var router = express.Router();

//GET Router
router.get("/", function (req, res) {
    burger.select(function (data) {
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
        );
    });
    //PUT Router
    router.put("/api/burger/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
        burger.update({ devoured: req.body.devoured }, condition, function (result) {
            if (result, changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    });
    // DELETE Router
    router.delete("/api/burger/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.delete(condition, function (result) {
            if (result, changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});
module.exports = router;