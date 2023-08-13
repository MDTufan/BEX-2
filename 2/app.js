const express =require("express");
const app = express();
const userRoute=require("./route");
const port =3000;

app.use(userRoute);
// app.get("/about",(req,res)=>{
//     res.status(200).json({
//         name:"tufan Ali",
//         age:"23",
//         statusCode:200
//     })
// })
// app.get("/about",(req,res)=>{
//     res.statusCode=200;
//     res.sendFile(__dirname + "/view/index.html")
//     res.end()
    
// })
app.get("/about",(req,res)=>{

    res.cookie("name","Tufan")
    res.cookie("age","23")
    res.end();
    
})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
module.exports = app;
