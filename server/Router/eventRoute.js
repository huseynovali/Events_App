import express from "express";
import { eventController } from "../controller/eventsController.js";

const eventsRouter = express.Router();

eventsRouter.get("/", eventController.getAll);
eventsRouter.get("/:id", eventController.getByiD);
eventsRouter.post("/", eventController.addEvent);
eventsRouter.delete("/:id/deleteevent", eventController.deleteEvent);



export default eventsRouter;