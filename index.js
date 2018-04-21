var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var keys = require("./config/keys");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

require("./routes/users")(app);

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5000;
app.listen(port);

module.exports = app;
