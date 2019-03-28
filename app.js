const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();
const sendMail = require("./nodemailer-setup.js");
const Recaptcha = require('express-recaptcha').Recaptcha;
const recaptcha = new Recaptcha('6LcQW44UAAAAAHxGkQlxAt89Njt0-Vmf0kcTdNp6', process.env.RECAPTCHA_SECRET_KEY);

const app = express();
app.use(helmet({noSniff: false}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', recaptcha.middleware.render, (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

function verifyCaptcha(req, res, next) {
  if (req.recaptcha.error) {
    return res.json({error: "Recaptcha failed"})
  }
  return next();
}

app.post("/api/form", recaptcha.middleware.verify, verifyCaptcha, (req, res)=>{
  sendMail(req.body.from, req.body.email, req.body.subject, req.body.message, (err, done)=>{
    if (err) return res.json({error: err});
    return res.json(done);
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
  console.log("Server listening on port " + PORT)
});