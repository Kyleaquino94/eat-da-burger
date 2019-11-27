//routing controller. build routing connection that will manage database, arrays

var express = require("express");
var router = express.Router();

var burger = require("../models/burgerModel.js");


router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    burger.create(req.body.name, function(result) {
        res.json({ id: result.insertId});
    });
});
    
router.put("/api/burger/:id", function(req, res){
    burger.update(req.params.id, function(result){
        if(result.changedRows == 0){
            //If no rows were changed, then the id must not exist, so 404
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});

module.exports = router;