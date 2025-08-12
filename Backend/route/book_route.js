import express from "express";
import { getBook, addBook } from "../controller/book_controller.js";

const router = express.Router();

router.get("/book", getBook);
router.post("/book", addBook); // <-- New POST route

export default router;
