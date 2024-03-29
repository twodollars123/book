const mongoose = require("mongoose");
const user = require("./userSchema").schema;

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    publishedDate: {
      type: String,
    },
    byUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);
