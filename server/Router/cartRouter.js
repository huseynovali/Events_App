import express from "express";
import { cartController } from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.get("/:userId", cartController.getCartByUserId)
 cartRouter.post("/", cartController.addToCart)
// cartRouter.post("/", register.singUp)


export default cartRouter;