//DEPENDENCIES
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const morgan = require("morgan");

//CONFIG
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("Hello from middleware.  😁");
  next();
});
app.use(morgan("dev"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Blog");
});

// Entries
const entriesController = require("./controllers/entries_controller.js");
app.use("/entries", entriesController);

//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI, {});

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
