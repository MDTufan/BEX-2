const express =require("express");
const route = express.Router();

route.get("/",(req,res)=>{
    res.send("Hi  I Am Home Page")
})
// route.get("/about",(req,res)=>{
//     res.cookie("name",'Tufan');
//     res.end()
   
// })

module.exports=route;