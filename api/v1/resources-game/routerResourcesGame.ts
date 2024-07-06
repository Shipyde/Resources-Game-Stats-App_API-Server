import express, { Router, Request, Response } from "express";
import {
  mongooseClient,
  mongooseClientDisconnect,
} from "@/lib/database/mongooseClient";
import { IMarketData } from "@/lib/Interfaces/IMarketData.interfaces";

const routerResourcesGame: Router = express.Router();

// RUFT DIE AKTION AUF DAMIT EINE EMAIL MIT EINEN EINMAL TOKEN GESENDET WIRD
routerResourcesGame.get(
  "/recovery/:UUID",
  function (req: Request, res: Response) {
    res.json({
      msg: "ok",
      UUID: req.params.UUID,
    });
  }
);

// RUF DIE AKTION AUF DAMIT EINE EMAIL MIT EINEM EINMAL TOKEN ZUM
// LÖSCHEN DER HINTERLEGTEN DATENSÄTZE GESENDET WIRD
routerResourcesGame.delete(
  "/recovery/:UUID/",
  function (req: Request, res: Response) {
    res.json({
      msg: "Please continue the deletion process in the email sent to you.",
    });
  }
);

// GIBT EINMALIG DIE ZUR UUID IN DER DATENBANK GESPEICHERTEN DATEN ZURÜCK
// ODER BESTÄTIGT DAS LÖSCHEN EINES GESPEICHERTEN DATENSATZES
routerResourcesGame.get(
  "/recovery/:UUID/:TOKEN",
  function (req: Request, res: Response) {
    res.json({
      msg: "ok",
      UUID: req.params.UUID,
      TOKEN: req.params.TOKEN,
    });
  }
);

// SPEICHERT DIE DATEN AUS DER APP AB
routerResourcesGame.post("/recovery", function (req: Request, res: Response) {
  res.json({
    msg: "ok",
  });
});

// HOLT MARKTDATEN AUS DATENBANK
routerResourcesGame.get("/data", async function (req: Request, res: Response) {
  const { MarketData } = await mongooseClient();

  try {
    let data = await MarketData.findOne()
      .sort({ createdAt: -1 })
      .then((feedback) => feedback);

    const disconnect = await mongooseClientDisconnect();

    if (!data) {
      res.json({
        msg: "No market data found",
      });
    } else {
      res.json(data);
    }
  } catch (error) {
    res.json({
      msg: "Error by getting market data",
    });
  }
});

module.exports = routerResourcesGame;

/*

GET     /v1/resources-game/recovery/[:uuid]/            -> RETURN SEND EMAIL TO YOUR EMAIL + SEND EMAIL MIT TOKEN
DELETE  /v1/resources-game/recovery/[:uuid]/            -> RETURN SEND EMAIL TO YOUR EMAIL + SEND EMAIL MIT TOKEN TO VERIFIY TO DELETE DATA
GET     /v1/resources-game/recovery/[:uuid]/[:token]    -> RETURN GESPEICHERTE DATEN
POST    /v1/resources-game/recovery/                    -> RETURN ERGEBNIS + SEND EMAIL AN EMAILADRESSE

GET     /v1/resources-game/data/                        -> GET RESSOURCES MARKTDATA
GET RESSOURCES PLAYERDATA -> DIREKT ÜBER DESSEN API # DOCS:https://www.resources-game.ch/resapi/



*/
