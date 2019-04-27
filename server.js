const express= require("express");
const mongoose= require("mongoose");
const logger= require("morgan");

//intialize express
const app= express();
const port = process.env.port || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//serve static files
if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"))
}
//Mongodb connection
app.use(logger("dev"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/chucks", {useNewUrlParser:true});
mongoose.connection.once("open",function(){
    console.log("connnection has been made!")
}).on("error",function(err){
    console.log("connection error: \n",err)
})

//routes 
const routes=require("./routes");
app.use(routes)

//listener
app.listen(port,function(){
    console.log("listening on http://localhost:"+port)
})


