const express = require("express");
const routes = express.Router();
const GameController = require("./controllers/GameController");
const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");
routes.post("/game", GameController.store);
routes.get("/games", GameController.index)
routes.get("/game/:id", GameController.single);
routes.put("/game/:id", GameController.update);
routes.delete("/game/:id", GameController.delete);

routes.post("/user", UserController.store);
routes.post("/authenticate", AuthController.authentication);
module.exports = routes;