const express = require("express");
const routes = express.Router();
const GameController = require("./controllers/GameController");

routes.post("/game", GameController.store);
routes.get("/games", GameController.index)
routes.get("/game/:id", GameController.single);
routes.put("/game/:id", GameController.update);
routes.delete("/game/:id", GameController.delete);
module.exports = routes;