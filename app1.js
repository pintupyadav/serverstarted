/**
 * Created by Affixus_Shashikant on 5/14/2016.
 */
var express=require("express");

var app=express();

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
    var query=req.query;
    var name=query.name;
    var email=query.email;
    res.send("API 2 for post user ::" +
        "                   "+name+"::"+email);

});

app.listen(4000,function () {
    console.log("server started");
});

