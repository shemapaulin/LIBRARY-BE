import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    Title:{
        type: String,
        require:true
    },
    author:{
        type: String,
        require:true  
    },
    numberPages:{
        type: Number,
        require:true  
    },
    publisher:{
        type: String,
        require:true 
    }
})

const book= mongoose.model("Book",bookSchema)
export default book;

