import  Express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoutes from "./Routes/bookRoutes.js";

dotenv.config();

const app=Express();
const port= 5757;

app.use(Express.json());

app.get("/",(req,res)=>{
    console.log("this is our books service")
})

app.use("/",bookRoutes)
app.listen(port ,()=>{
    console.log(`server is running on port`,port);
})

mongoose
.connect("mongodb+srv://shmplnmamba44:smollet1024@library.180wkis.mongodb.net/Libray")
.then(()=> console.log("DB Connected"))
.catch((error)=>{
    console.log("connecting to database has failed",error);
})


