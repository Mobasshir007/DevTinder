const express = require("express");
const connectDB = require("./config/databaseConnection");
const userModel = require("./models/users");
const app = express();
app.post("/signup", async (req, res) => {
  const user = new userModel({
    firstName: "ram",
    lastName: "kamra",
    email: "kaman134@gmail.com",
    password: "saii@123",

  });
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).res.send("SOmething went wrong in adding data");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, function () {
      console.log("server is running on port 7777");
    });
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });
