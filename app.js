const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const sendMail = require("./nodemailer-setup.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/api/form", (req, res)=>{
  sendMail(req.body.from, req.body.subject, req.body.message, (err, done)=>{
    if (err) return console.log(err);
    return console.log(done)
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
  console.log("Server listening on port " + PORT)
});