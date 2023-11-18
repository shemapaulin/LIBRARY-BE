import { Router } from "express";

import { createCustomer,getCustomer,getCustomers,deletecustomer} from "../controller/index.js";


const router=Router();

router.post("/createCustomer",createCustomer);
router.get("/getCustomers",getCustomers);
router.get("/getCustomer/:id",getCustomer);
router.delete("/deleteCustomer",deletecustomer)


const customerRoutes=router;
export default customerRoutes;


