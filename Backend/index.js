import express from "express";// serer connect
import dotenv from "dotenv";


const app = express() //express app kulla annupuram
dotenv.config()
\

app.get("/",function (req,res) {

    res.send("<p>Im Under the water</p>")
    
} )  //app.get req and res eduthum 

const port = process.env.PORT

app.listen(port, ()=>{
    console.log("server started"); //listion oru port eduthukum and funtion la server start
})



