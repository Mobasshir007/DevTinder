console.log("devtinder started")
const express=require("express")
const app=express();
app.listen(7777)

app.use(("/test"),function(req,res){
    res.send("hello! server is running on port 7777")
})
app.use((req,res)=>{
res.send("homepage .................")
})