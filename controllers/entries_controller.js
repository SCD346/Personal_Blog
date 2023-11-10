const express = require("express");
const entries = express.Router();
const Entry = require("../models/entry");

//ROUTE: Get all the entries (index)
entries.get("/", (req, res) => {
  Entry.find().then((foundEntries) => {
    console.log("index page hit");
    res.render("Index", {
      entries: foundEntries,
      title: "Index Page",
    });
  });
});

//ROUTE: GET FORM to create new
entries.get("/new", (req, res) => {
  res.render("new");
});

// ROUTE: Creata a new entry
entries.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }

  Entry.create(req.body).then(() => {
    res.redirect("/entries");
  });
  // .catch(error => {
  //     res.render('New', {
  //       error
  //     })
  // })
});

//EXPORT
module.exports = entries;
