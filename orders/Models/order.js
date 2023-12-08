import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    CustomerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"customer",
        require:true
    },
    BookId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"book",
        require:true  
    },
    InitialDate:{
        type: String,
        require:true  
    },
    ReturnDate:{
        type: String,
        require:true 
    }
})

const order= mongoose.model("order",orderSchema)
export default order;