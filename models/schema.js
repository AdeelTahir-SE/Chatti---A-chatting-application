import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
Name :String,
Email:String,
Password:String,
Bio:String,
Imgurl:{type:String , default:'https://via.placeholder.com/150'}

})

export const user =mongoose.model("users",userSchema)