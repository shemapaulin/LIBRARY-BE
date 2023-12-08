import { Router } from "express";

import { createdOrder, getOrders} from "../controller/index.js";

const router=Router()

router.post("/addOrder",createdOrder);
router.get("/getOrders",getOrders);



const orderRouters=router;
export default orderRouters;
