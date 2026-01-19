console.log("devtinder started")
const express=require("express")
const app=express();
app.listen(7777)

app.use(("/test"),function(req,res){
    res.send("hello! server is running on port 7777")
})
app.get(("/user"),(req,res)=>{
    res.send({firstName:"Mobasshir",lastName:"Hussain"})
})
app.post(("/user"),(req,res)=>{
    // saving data in DB
    res.send("Data saved successfully")
})