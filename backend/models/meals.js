const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const meals_schema = new mongoose.Schema({
  mealtext: {
    type: String,
    required: "meal name is required",
  },
  mealCalorie: {
    type: Number,
    required: "calorie is required",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  addedDate: {
    type: String,
    default: Date.now,
  },
});

meals_schema.plugin(uniqueValidator);

module.exports = mongoose.model("Meals", meals_schema);
