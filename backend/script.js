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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
