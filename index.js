const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connecting with the database
mongoose.connect("mongodb://localhost:27017/todoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model("Item", itemSchema);
// var nI = [];
// var wI = [];
//home route starts

app.get("/", (req, res) => {
  var d = date.getDay();
  Item.find({}, (err, foundItems) => {
    if (err) {
      console.log(err);
    } else {
      res.render("lists", { kindOfTodo: d, newListItem: foundItems });
    }
  });
});

app.post("/", (req, res) => {
  const newItem = req.body.newItem;
  const item = new Item({
    name: newItem,
  });
  item.save();
  res.redirect("/");
});

//home route ends

//work route starts

app.get("/work", function (req, res) {
  var j = date.getDay();
  res.render("lists-work", { kindOfTodo: "Work for " + j, newListItem: wI });
});

app.post("/work", function (req, res) {
  wI.push(req.body.newItem);
  res.redirect("/work");
});

//work route ends

app.listen(3000, function (req, res) {
  console.log("Server started on port 3000");
});
