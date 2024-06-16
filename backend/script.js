import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { user } from "../models/schema.js";
let conn = await mongoose.connect("mongodb://localhost:27017/Users");
const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  
  const {name,email,password } = req.body;

  const newUser = new user({
    Name: name || 'null',
    Email: email || 'null',
    Password: password || '',
    Bio: 'null',
    Imgurl: 'https://via.placeholder.com/150',
    chats:[]
  });

  newUser.save()
    .then(() => {
      console.log('User registered successfully');
      res.status(200).send('User registered successfully');
    })
    .catch((err) => {
      console.error('Error saving user:', err);
      res.status(500).send('Error saving user');
    });
});

app.post("/login", async(req,res)=>{
  const {email,password } = req.body;


  try {
    const User = await user.findOne({Email:email,Password:password})
    User?res.status(200).send("Login successfull"):res.status(401).send("Invalid credentials");
console.log("Login successfully");

  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Error fetching users' });
  }



});
app.get("/friends", async(req,res)=>{
  try {
    const users = await user.find(); // Fetch all users
    res.json(users); // Send the users as JSON response
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Error fetching users' });
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/Chatroom", async(req,res)=>{
  try {
   const msg =req.body;
   
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Error fetching users' });
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


app.get("/friendsmsg", async (req, res) => {
  try {

    const receiver = await user.findOne(req.body);
    if (receiver) {

      res.redirect('/Chatroom');
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ error: 'Error fetching user' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
