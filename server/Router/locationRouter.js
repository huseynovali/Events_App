import express from "express";
import { locationController } from "../controller/locationController.js";


const locationRouter = express.Router();

locationRouter.get("/", locationController.getAll);
locationRouter.get("/:id", locationController.getByiD);
locationRouter.post("/", locationController.addLocation);
locationRouter.delete("/:id/deletelocation", locationController.deleteLocation);



export default locationRouter;