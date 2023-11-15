const express = require("express");
const entries = express.Router();
const Entry = require("../models/entry");

//ROUTE: Get all the entries (index)
const getallEntries = (req, res) => {
  Entry.find().then((foundEntries) => {
    console.log("index page hit");
    res.render("Index", {
      entries: foundEntries,
      title: "Index Page",
    });
  });
};

// //ROUTE: GET FORM to create new
// const getNewEntryForm = (req, res) => {
//   res.render("new");
// };

entries.get("/new", (req, res) => {
  res.render("new");
});

// ROUTE: Get a entry by id
const getEntry = (req, res) => {
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
};

// ROUTE: GET the edit form, populates it by id
const getEditEntryForm =
  ("/:id/edit",
  (req, res) => {
    Entry.findById(req.params.id).then((foundEntry) => {
      res.render("edit", {
        entry: foundEntry,
      });
    });
  });

// ROUTE: PUT -> Updates an entry
const updateEntry =
  ("/:id",
  (req, res) => {
    Entry.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((updatedEntry) => {
        if (!updatedEntry) {
          return res.status(404).send("Entry not found");
        }
        console.log(updatedEntry);
        res.redirect(`/entries/${req.params.id}`);
      })
      .catch((error) => {
        console.error("Error updating entry:", error);
        res.status(500).send("Internal Server Error");
      });
  });

// ROUTE: DELETE -> Deletes the entry by id
const deleteEntry =
  ("/:id",
  (req, res) => {
    Entry.findByIdAndDelete(req.params.id).then(() => {
      res.status(303).redirect("/entries");
    });
  });

// ROUTE: Create a new entry
const createEntry =
  ("/",
  (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined;
    }
    Entry.create(req.body).then(() => {
      res.redirect("/entries");
    });
  });

//NEWLY REFACTORED ROUTES
entries.get("/", getallEntries);
entries.get("/:id", getEntry);
// entries.get("/new", getNewEntryForm);
entries.get("/:id/edit", getEditEntryForm);
entries.put("/:id", updateEntry);
entries.delete("/:id", deleteEntry);
entries.post("/", createEntry);

//EXPORT
module.exports = entries;
