const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.json({ message: "Ok" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
