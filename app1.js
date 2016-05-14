/**
 * Created by Affixus_Shashikant on 5/14/2016.
 */
var express=require("express");

var app=express();

app.get("/dc",function (req,res) {
    res.send("API 2 For GET");

});
app.post("/dc",function (req,res) {
    res.send("API 2 For POST")


});

app.listen(4000,function () {
    console.log("server started");
});

