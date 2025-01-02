const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    phone:Number,
    age:Number
  });

module.exports = mongoose.model("user",userSchema);
  