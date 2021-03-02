const path = require('path');
const express = require("express");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(express.static("client/build"))

// routes 
var publicDir = require('path').join(__dirname, '/assets');
app.use(express.static(publicDir)); 

app.use(require("./routes"))
app.use(require("./routes/nodemailer"))

app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"/client/build/index.html"))
})
//listener
app.listen(port,function(){
    console.log("listening on http://localhost:"+port)
})

