const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  author: {
    type: String,
    required: true,
    minLength: 2,
  },
  year: {
    type: Number,
    required: true,
    minLength: 4,
  },
});

module.exports = mongoose.model("book", bookSchema);
