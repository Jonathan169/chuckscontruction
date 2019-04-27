const path = require("path");
const router = require('express').Router();
const mailer=require("./nodemailer");

// router.use("/appointment",mailer)
router.post("/test",function(req,res){
    console.log("made it")
})
router.use(function(req,res){
    console.log("here")
    res.sendFile(path.join(__dirname,"../../client/build/index.html"))
})
module.exports= router;