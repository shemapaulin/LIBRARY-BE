import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    names:{
        type: String,
        require:true
    },
    age:{
        type: Number,
        require:true  
    },
    email:{
        type: String,
        require:true  
    }
})

const customer= mongoose.model("customer",customerSchema)
export default customer;