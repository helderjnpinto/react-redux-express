var express = require("express");

var app = new express();

app.get("/", function(req, res) {
  res.render("../app/index.ejs", {});
});

app.listen(7777);