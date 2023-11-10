const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose;

// ENTRY SCHEMA
const entrySchema = new Schema({
  title: { type: String },
  body: { type: String },
  image: { type: String, default: "http://placehold.it/500x500.png" },
});

//ENTRY MODEL
const Entry = mongoose.model("Entry", entrySchema);

//EXPORT
module.exports = Entry;
