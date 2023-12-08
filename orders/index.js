import  Express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import orderRouters from "./routes/orderRoutes.js";


dotenv.config();

const app=Express();
const port=process.env.PORT;

app.use(Express.json());
app.use("/",orderRouters)
app.get("/",(req,res)=>{
    res.send("this is our order service")
})



app.listen(port ,()=>{
    console.log(`server is running on port-orders`,port);
})

mongoose
.connect("mongodb+srv://shmplnmamba44:smollet1024@library.180wkis.mongodb.net/Libray")
.then(()=> console.log("DB Connected"))
.catch((error)=>{
    console.log("connecting to database has failed",error);
})


