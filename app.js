const express = require("express");
const ejs = require("ejs");
const Gpio = require("onoff").Gpio;
const light = Gpio(17, "out");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const status = "Light is off!";

app.get("/", (req, res) => {
  res.render("main", { pstatus: status });
});

app.post("/", async (req, res) => {
  const btn = await req.body.button;
  if (btn === "on") {
    light.write(1, (err) => {
      res.render("main", { pstatus: "Light is ON!" });
    });
  } else {
    light.write(
      0,
      (err = {
        if(err) {
          throw err;
        }
      })
    );
  }
});

app.listen(5000, () => {
  console.log("Server up and running on port 5000");
});
