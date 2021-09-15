const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(process.env.DATABASE_CONNECTION, () => {
    console.log("connected to DB!");
  });

const usersRoute = require("./routes/usersRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});



app.listen(5000);
