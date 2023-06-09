import express from "express";
import { categoryController } from "../controller/categoryController.js";


const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.getAll);
categoryRouter.get("/:id", categoryController.getByiD);
categoryRouter.post("/", categoryController.addCategory);
categoryRouter.delete("/:id/deletelocation", categoryController.deleteCategory);



export default categoryRouter;