import customer from "../model/customer.js";





const createCustomer=async(req,res)=>{
    try {
        const addCustomer=customer.create(req.body);
        if(addCustomer)return res.status(200).send(req.body);
        else return res.status(404).send("could not work");
    } catch (error) {
        res.status(500).send("internal server error",error)
        console.log("internal server error",error)
    }
   
}

const getCustomer=async(req,res)=>{
try {
    const id=req.params.id;
    const getCustomer=await customer.findOne({ _id: id });

if(getCustomer){
    res.status(200).json({
        result: getCustomer.names,
        
    })
}else{
    res.status(405).send("could not workout still");
}

} catch (error) {
    res.status(500).send("internal server error");
    console.log("internal server error",error)
}
}
const getCustomers=async(req,res)=>{
    try {
        const customers=await customer.find() ;
        res.status(200).json({
            result: customers
        })
    } catch (error) {
        res.status(500).send("internal server error");
        console.log("internal server error",error);
    }
}
const deletecustomer=async(req,res)=>{
    const popCustomer=await customer.findOneAndDelete(req.params.id)
    if(popCustomer){
        res.status(200).send("you have deleted customer!")
    }else{
        res.status(404).send("you have failed to delete order!")
    }
}

export{createCustomer,getCustomer,getCustomers,deletecustomer}