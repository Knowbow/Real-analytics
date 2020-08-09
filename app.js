const mongoose = require("mongoose");
const passport = require("passport");
const express = require("express");

const app = express();
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { 
      useNewUrlParser: true,
    useUnifiedTopology:true, })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello Worlds"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);

app.use(passport.initialize());
require("./config/passport")(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));