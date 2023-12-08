import book from "../Model/book.js";



const addBook=async(req,res)=>{
    try {
        const addBook=book.create(req.body);
        if(addBook)return res.status(200).json({
            result: req.body,
            message:"new Book added successfully!"
        });
        else return res.status(404).send("could not work");
    } catch (error) {
        res.status(404).send("internal service error");
        console.log("internal server error",error);
    }
}

const getBook=async(req,res)=>{
    try {
        const id=req.params.id;
        const oneBook=await book.findById(id);
        if(oneBook){
            res.status(200).json({
               result: oneBook.Title,
                message : `book retrieved `,


            })
        }else{
            res.status(403).send("could not workout"); 
        }
    } catch (error) {
        res.status(500).send("internal service error");
        console.log("internal server error",error);
    }
   
}
const getBooks=async(req,res)=>{
    try {
        const Books=await book.find() ;
        res.status(200).json({
            result: Books
        })
    } catch (error) {
        res.status(500).send("internal server error");
        console.log("internal server error",error);
    }
}
const deleteBook=async(req,res)=>{
    const popBook=await book.findOneAndDelete(req.params.id)
    if(popBook){
        res.status(200).send("you have deleted book!")
    }else{
        res.status(404).send("you have failed to delete book!")
    }
}
export{addBook,getBook,getBooks,deleteBook}