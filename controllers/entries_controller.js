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

// ROUTE: Get a entry by id
entries.get("/:id", (req, res) => {
  Entry.findById(req.params.id)
    .populate("entry")
    .then((foundEntry) => {
      res.render("show", {
        entry: foundEntry,
      });
    })
    .catch((err) => {
      console.log("ERROR: ", err);
      res.send("404");
    });
});

// ROUTE: DELETE -> Deletes the entry by id
entries.delete("/:id", (req, res) => {
  Entry.findByIdAndDelete(req.params.id).then((deletedEntry) => {
    res.status(303).redirect("/entries");
  });
});

// ROUTE: Create a new entry
entries.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  Entry.create(req.body).then(() => {
    res.redirect("/entries");
  });
});

//EXPORT
module.exports = entries;
