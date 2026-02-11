const mongoose = require("mongoose");

const pgSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    area: { type: String, required: true },
    rent: { type: Number, required: true },
    food: { type: Boolean, default: false },
    gender: {
      type: String,
      enum: ["male", "female", "any"],
      default: "any",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PG", pgSchema);
