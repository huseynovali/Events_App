import express from "express";
import { eventController } from "../controller/eventsController.js";

const eventsRouter = express.Router();

eventsRouter.get("/", eventController.getAll);
eventsRouter.get("/:id", eventController.getByiD);
eventsRouter.post("/", eventController.addEvent);
eventsRouter.put("/:id/seats/:seatId/reservation", eventController.createReservation);
eventsRouter.delete("/:id/deleteevent", eventController.deleteEvent);



export default eventsRouter;