const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,     
  },
  type: {
    type: String,
    // reuired: true,
    default: "user",  // option "user" or "admin"    
  },  
},{timestamps: true});

const userModel = mongoose.model("user", userSchema); 
module.exports = userModel;







