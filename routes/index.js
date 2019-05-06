const path = require("path");
const router = require('express').Router();
const mailer=require("./nodemailer");
require("dotenv").config();
const nodemailer= require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'jon.hernandez169@gmail.com',
        pass:process.env.password
    }
});
router.post('/schedule',function(req,res){
    let mailOptions={
        from:'jon.hernandez169@gmail.com',
        to:req.body.email,
        subject:"testing",
        text:`Hello from Chucks Construction we have you set for an appoinment at ${req.body.dateChosen.startDate}
        we will be giving you a call shortly to confirm appointment`
    }
    // transporter.sendMail(mailOptions,function(err,data){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("it worked!")
//     }
// })
    res.send("Confirmed")
})

router.post("/test",function(req,res){
    console.log("made it")
})
router.use(function(req,res){
    console.log("here")
    res.sendFile(path.join(__dirname,"../../client/build/index.html"))
})
module.exports= router;