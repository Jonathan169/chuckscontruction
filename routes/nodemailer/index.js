require("dotenv").config();
const nodemailer= require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'jon.hernandez169@gmail.com',
        pass:process.env.password
    }
});

let mailOptions={
    from:'jon.hernandez169@gmail.com',
    to:'candy5_28@hotmail.com',
    subject:"testing",
    text:'holla'
}
// transporter.sendMail(mailOptions,function(err,data){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("it worked!")
//     }
// })