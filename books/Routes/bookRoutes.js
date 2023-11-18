import { Router } from "express";

import { addBook, getBook, getBooks,deleteBook } from "../controller/index.js";

const router=Router();

router.post("/createBook",addBook);
router.get("/getBooks",getBooks);
router.get("/getBook/:id",getBook);
router.delete("/deleteBook",deleteBook)


const bookRoutes=router;
export default bookRoutes;


