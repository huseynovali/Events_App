import express from "express";
import { register } from "../controller/registerController.js";

import login from "../controller/loginContriller.js";

const authRouter = express.Router();

authRouter.get("/users", register.getAllUser)
authRouter.post("/login", login)
authRouter.post("/register", register.singUp)


export default authRouter;