import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
Name :String,
Email:{type:String,required:true,unique:true},
Password:String,
Bio:String,
Imgurl:{type:String , default:'https://via.placeholder.com/150'},
chats:{type:Object,default:[]}

})

export const user =mongoose.model("users",userSchema)