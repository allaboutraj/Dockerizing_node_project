const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/home", (req, res) => {
  res.json({ message: "Ok" });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port 3000");
});
