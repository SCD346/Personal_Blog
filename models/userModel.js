const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

// USER SCHEMA
const userSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

//check for matching password to stored pw for log in
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Before saving, encrypt the password with bcryptjs and salt
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//USER MODEL
const User = mongoose.model("User", userSchema);

//EXPORT USER
module.exports = User;

// confirmPassword: {
//   type: String,
//   required: [true, "Please confirm your password."],
// },
