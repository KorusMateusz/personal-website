const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
require('dotenv').config();
const sendMail = require("./nodemailer-setup.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.post("/api/form", (req, res)=>{
  sendMail(req.body.from, req.body.subject, req.body.message, (err, done)=>{
    if (err) return res.json({error: err});
    return res.json(done);
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
  console.log("Server listening on port " + PORT)
});