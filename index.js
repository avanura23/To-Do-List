const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var nI=[];
var wI=[];
//home route starts
app.get("/",function(req,res){

    var today = new Date();
    var h = today.getDay();
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long",
        year : "numeric"
    };

    var date = today.toLocaleDateString("en-IN",options);

    var day = arr[h];
    res.render("lists",{kindOfDay : date , newListItem : nI});
});

app.post("/",function(req,res){
    nI.push(req.body.newItem);
    res.redirect("/");
});

//home route ends


app.listen(3000,function(req,res){
    console.log("Server started on port 3000");
});