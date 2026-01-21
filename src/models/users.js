const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength:4,
      maxLength:30
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      lowercase:true,
      unique:true,
      trim:true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    photoUrl: {
      type: String,
      default:
        "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg",
    },
    about:{
        type:String,
        default:"This is default detail "
    },
    skill: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
