const router = require("express").Router();
const mongoose = require("mongoose");
const Meals = mongoose.model("Meals");

router.post("/get", async (req, res) => {
  const meals = await Meals.find({ userId: req.body.userId });
  res.send(meals);
});

router.post("/add", async (req, res) => {
  const newMeal = new Meals();
  newMeal.mealtext = req.body.mealtext;
  newMeal.mealCalorie = req.body.mealCalorie;
  newMeal.userId = req.body.userId;

  await newMeal.save((err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
  res.send(newMeal);
});

router.post("/edit", async (req, res) => {
  const oldMeal = await Meals.findOne({ _id: req.body.mealId });
  const newMeal = await Meals.findByIdAndUpdate(
    { _id: req.body.mealId },
    { mealtext: req.body.mealtext, mealCalorie: req.body.mealCalorie },
    { new: true },
    (err, res) => {
      if (err) {
        return err;
      } else {
        return res;
      }
    }
  );
  res.send(newMeal);
});

router.delete("/remove/:mealId", async (req, res) => {
  const meal = await Meals.findByIdAndRemove({ _id: req.params.mealId });
  res.send(meal);
});
module.exports = router;
