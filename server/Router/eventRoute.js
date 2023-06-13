import express from "express";
import { eventController } from "../controller/eventsController.js";
import { favorites } from "../controller/favorite.js";

const eventsRouter = express.Router();

eventsRouter.get("/", eventController.getAll);
eventsRouter.get("/:id", eventController.getById);
eventsRouter.get("/category/:category", eventController.getByCategory);
eventsRouter.post("/", eventController.addEvent);
eventsRouter.post("/favorite/:userId/favorites/:eventId", favorites.addFavorite);
eventsRouter.get("/favorite/:userId/", favorites.listFavorites);
eventsRouter.put("/:id/seats/:seatId/reservation", eventController.createReservation);
eventsRouter.delete("/:id/deleteevent", eventController.deleteEvent);



export default eventsRouter;