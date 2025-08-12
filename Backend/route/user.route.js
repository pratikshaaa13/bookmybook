import express from "express";
import { signup } from "../controller/user.controller.js"; // make sure the extension .js is there

const router = express.Router(); // <-- just create your own router, don't import book_route

router.post("/signup", signup);

export default router;
