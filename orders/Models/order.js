import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    CustomerId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"customer",
        require:true
    },
    BookId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"book",
        require:true  
    },
    InitialDate:{
        type: Date,
        require:true  
    },
    ReturnDate:{
        type: Date,
        require:true 
    }
})

const order= mongoose.model("order",orderSchema)
export default order;