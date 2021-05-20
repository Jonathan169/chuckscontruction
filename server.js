const path = require('path');
const express = require("express");
const fs = require('fs');
const https = require('https');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(express.static("client/build"))

// routes 
app.use(express.static(path.join(__dirname, '/assets'))); 

app.use(require("./routes"))
// app.use(require("./routes/nodemailer"))

// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
// });
//listener

//const sslServer = https.createServer({
//	key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
//	cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
//},app)

app.listen(port,function(){
    console.log("listening on http://localhost:"+port)
})

