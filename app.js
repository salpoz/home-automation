const express = require("express");
const ejs = require("ejs");
const app = express();

app.use(express.json({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const greet = "Simple Home Automation Project";

app.get("/", (req, res) => {
  res.render("main", { hello: greet });
});

app.listen(5000, () => {
  console.log("Server up and running on port 5000");
});
