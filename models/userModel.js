const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;

// USER SCHEMA
const userSchema = new Schema({
  name: { type: String, required: [true, "Please add your name."] },

  email: {
    type: String,
    required: [true, "Please add your email."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },

  photo: {
    type: String,
    default: "http://placehold.it/500x500.png",
  },

  password: {
    type: String,
    required: [true, "Please provide a password."],
    minlength: 8,
  },
});

//USER MODEL
const User = mongoose.model("User", userSchema);

//EXPORT USER
module.exports = User;

// confirmPassword: {
//   type: String,
//   required: [true, "Please confirm your password."],
// },
