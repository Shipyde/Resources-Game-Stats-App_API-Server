import express, { Router, Request, Response } from "express";

const routerv1: Router = express.Router();

const resourcesGame = require('./resources-game/routerResourcesGame');
routerv1.use('/resources-game', resourcesGame);

module.exports = routerv1;
/*

GET     /v1/resources-game/recovery/[:uuid]/            -> RETURN SEND EMAIL TO YOUR EMAIL + SEND EMAIL MIT TOKEN
DELETE  /v1/resources-game/recovery/[:uuid]/            -> RETURN SEND EMAIL TO YOUR EMAIL + SEND EMAIL MIT TOKEN TO VERIFIY TO DELETE DATA
GET     /v1/resources-game/recovery/[:uuid]/[:token]    -> RETURN GESPEICHERTE DATEN
POST    /v1/resources-game/recovery/                    -> RETURN ERGEBNIS + SEND EMAIL AN EMAILADRESSE

GET     /v1/resources-game/data/                        -> GET RESSOURCES MARKTDATA
GET RESSOURCES PLAYERDATA -> DIREKT ÜBER DESSEN API # DOCS:https://www.resources-game.ch/resapi/



*/