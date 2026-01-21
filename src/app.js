const express = require("express");
const connectDB = require("./config/databaseConnection");
const userModel = require("./models/users");
const app = express();

app.use(express.json());
console.log("server started")
// to find data by email
app.get("/finduser", async (req, res) => {
  const getemail = req.body.email;
 

  try {
    const getUser = await userModel.find({ email: getemail });
    if (getUser.length === 0) {
      res.status(404).send("Data not found");
    } else {
      res.send(getUser);
    }
  } catch (error) {
    res.status(400).send("Something went wrong in adding data");
  }
});

// to find one data
app.get(("/findOne"),async (req,res)=>{
  const findOneEmail=req.body.email;
  try {
    const getOne=await userModel.findOne({email:findOneEmail})
 if (getOne.length === 0) {
      res.status(404).send("Data not found");
    } else {
      res.send(getOne);
    }
  } catch (error) {
    res.status(400).send("Something went wrong in adding data");
  }
})
// homework =  find data by id  
app.get("/findbyId", async (req,res)=>{
  const findbyId=req.body._id
  try {
     const getId=await userModel.find({_id:findbyId})
     if(getId.length===0){
   res.status(404).send("Data not found by id");
    } else {
      res.send(getId);
    }
  } catch (error) {
    res.status(400).send("Something went wrong in adding data");
  }
})

// feed- to get all data
app.get(("/feed"), async (req, res) => {
  try {
    const feed = await userModel.find({});
    res.send(feed);
  } catch (error) {
    res.status(400).send("Something went wrong in adding data");
  }
});

//  find Id and Delete data from db
app.delete(("/users"), async (req,res)=>{
  const data=req.body._id
  try{
    const deletedData=await userModel.findByIdAndDelete({_id:data})
    if(deletedData.length===0){
      res.status(401).send("Data not found")
    }else{
      res.send(deletedData)
    }
  } catch (error) {
    res.status(400).send("Something went wrong in adding data");
  }
}) 
app.post("/signup", async (req, res) => {
  console.log(req.body);

  const user = new userModel(req.body);
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).res.send("SOmething went wrong in adding data");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, function () {
      console.log("server is running on port 7777");
    });
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });
