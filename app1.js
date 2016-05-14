/**
 * Created by Affixus_Shashikant on 5/14/2016.
 */
var express=require("express");
var bodyParser = require('body-parser');
var multer = require('multer');

var app=express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/dc",function (req,res) {
    var query = req.query;
    var name = query.name;

    res.send("API 2 For GET :: " + name);

});

app.post("/dc",function (req,res) {
    var query = req.query;
    var name = query.name;
    var email=query.email;
    res.send("API 2 For POST :: " + name+" Email:: "+email);

});
app.get("/user",function (req,res) {
    var query=req.query;
    var name=query.name;
     res.send("API 2 for get user"+name);

});

app.post("/user",function (req,res) {
    var reqjson = req.body;
    res.send("API 2 for post user ::"+ reqjson.name +"::"+ reqjson.email);

});
app.get("/abc",function (req,res) {
    var reqjson=req.body;
    res.send("Api Body::")

});
app.post("/abc",function (req,res) {
    var reqjson=req.body;
    res.send("Api Body::"+reqjson.name+"::"+reqjson.email);

});


app.listen(4000,function () {
    console.log("server started");
});

