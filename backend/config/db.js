const mongoose = require("mongoose");
require("dotenv").config();
const mongoDBErrors = require("mongoose-mongodb-errors");
//this mongo uri i have added statically as well so that you dont have to trouble urself for the creation on env file
const mongoURI =
  process.env.MONGOURI !== null && process.env.MONGOURI !== undefined
    ? process.env.MONGOURI
    : "mongodb+srv://deepbratt:samadder55@cluster0.emnc0.mongodb.net/tataaig";
// security measures i undertand but still i added this line so that you can plug and play. no extra config needed

mongoose.Promise = global.Promise;
mongoose.plugin(mongoDBErrors);
mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (req, res) {}
);
