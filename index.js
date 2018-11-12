const express = require("express");
const app = express();

app.get("/api/whoami", (req, res) => {
  var data = {
    ip: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  }
  res.status(200).json(data);
});

app.listen(3000, function() {
  console.log(`App listening on port => 3000`);
})