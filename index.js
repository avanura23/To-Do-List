const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var nI=[];
var wI=[];
//home route starts
app.get("/",function(req,res){

    var d = date.getDate();
    res.render("lists",{kindOfTodo : d , newListItem : nI});
});

app.post("/",function(req,res){
    nI.push(req.body.newItem);
    res.redirect("/");
});

//home route ends

//work route starts

app.get("/work",function(req,res){
    var j = date.getDay();
    res.render("lists-work",{kindOfTodo:"Work for "+j , newListItem : wI});
});

app.post("/work",function(req,res){
    wI.push(req.body.newItem);
    res.redirect("/work");
});

//work route ends

app.listen(3000,function(req,res){
    console.log("Server started on port 3000");
});