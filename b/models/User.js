const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userschema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },

  email1: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userschema);

module.exports = User;
