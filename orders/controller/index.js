import order from "../Models/order.js";
import mongoose from "mongoose";
import axios from "axios";



const createdOrder=async(req,res)=>{
    try {
        const inputOrders = {
            CustomerId:new mongoose.Types.ObjectId(req.body.CustomerId),
            BookId: new mongoose.Types.ObjectId(req.body.BookId),
            InitialDate: req.body.InitialDate,
            ReturnDate: req.body.ReturnDate
        }
        
    
    const addOrder=await order.create(inputOrders);
    if(addOrder){
        res.status(200).json({
            result: req.body,
            message:"order sent!"
        })
    }else{
        res.status(404).send("could not send an order")
    } 
    } catch (error) {
        res.status(500).send("internal server error");
        console.log("internal server error",error);
    }
    
    
}
const getOrders=async(req,res)=>{
    try {
        const orders=await order.find() ;
        res.status(200).json({
            result: orders
        })
    } catch (error) {
        res.status(500).send("internal server error");
        console.log("internal server error",error);
    }
}

const getOrder = async (req, res) => {
    try {
      const id = req.params.id;
  
      const getOrder = await order.findById(id);
  
      if (getOrder) {
        const customerResponse = await axios.get(`http://localhost:3001/getCustomer/${getOrder.CustomerId}`);
        console.log(customerResponse.data);
  
       const bookResponse = await axios.get(`http://localhost:5757/getBook/${getOrder.BookId}`);
        console.log(bookResponse);
  return;
        const objects = {
          customerName: customerResponse.data.names,
          bookTitle: bookResponse.data.Title
        };
  
        res.status(200).send(objects);
      } else {
        res.status(404).send("invalid order");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  
const deleteOrder=async(req,res)=>{
    const popOrder=await order.findOneAndDelete(req.params.id)
    if(popOrder){
        res.status(200).send("you have deleted order!")
    }else{
        res.status(404).send("you have failed to delete order!")
    }
}
export {createdOrder,getOrders,getOrder,deleteOrder}