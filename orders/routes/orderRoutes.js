import { Router } from "express";

import { createdOrder, getOrders,getOrder } from "../controller/index.js";

const router=Router()

router.post("/addOrder",createdOrder);
router.get("/getOrders",getOrders);
router.get("/getOrder/:id",getOrder);


const orderRouters=router;
export default orderRouters;
