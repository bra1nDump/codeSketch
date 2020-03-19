"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.use(express.json());
app.post('/run', function (req, res) {
    console.log(req.body);
    res.send({ output: 'console outputs this' });
});
app.listen(8000);
