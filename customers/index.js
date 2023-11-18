import  Express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import customerRoutes from "./Routes/customerRoutes.js";

dotenv.config();

const app=Express();
const port= 3001;

app.use(Express.json());

app.use("/",customerRoutes)
app.get("/",(req,res)=>{
    console.log("this is our customers service")
})

app.listen(port ,()=>{
    console.log(`server is running on port`,port);
})

mongoose
.connect("mongodb+srv://shmplnmamba44:smollet1024@library.180wkis.mongodb.net/Libray")
.then(()=> console.log("DB Connected"))
.catch((error)=>{
    console.log("connecting to database has failed",error);
})


