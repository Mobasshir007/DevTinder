const mongoose = require("mongoose");

const connectDB = async function () {
  await mongoose.connect(
    "mongodb+srv://mobasshirhussain2002_db_user:vlshS4In06ZJqJSW@cluster0.qur7fgt.mongodb.net/?appName=Cluster0",
  );
};

module.exports=connectDB;