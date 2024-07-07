import express, { Router, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";
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
routerResourcesGame.post(
  "/recovery",
  async function (req: Request, res: Response) {
    const userID = uuidv4();
    const { email, userData } = req.body;

    if (email && userData) {
      if (!EmailValidator.validate(email)) {
        res.json({
          msg: "Please provide a valid email address",
        });
        return;
      }

      try {
        const { UserData } = await mongooseClient();
        const insertUserData = {
          uuid: userID,
          email: email,
          userData: userData,
          createdAt: new Date(),
        };
        await UserData.create(insertUserData);
        const disconnect = await mongooseClientDisconnect();

        const { JWT_SECRET_KEY } = process.env;

        if (JWT_SECRET_KEY) {
          const token = jwt.sign(insertUserData, JWT_SECRET_KEY, {
            expiresIn: "90d",
          });

          res.json({
            YOUR_RECOVERY_KEY: userID,
            SESSION_TOKEN: token,
            SESSION_TOKEN_EXPIRES: new Date(
              Date.now() + 1000 * 60 * 60 * 24 * 90 - 10000
            ),
          });
        } else {
          throw new Error("JWT_SECRET_KEY not found in .env file");
        }
      } catch (error) {
        console.error(
          '\n\n####  ERROR -> /v1/resource_game/routerResourceGame.ts - "/recovery" #### \n\n\n' +
            "Timestamp: " +
            new Date().toString() +
            "\n\nError Message: " +
            error +
            "\n\n\n####  ERROR END  ####\n\n"
        );

        res.json({
          msg: "Error by saving data",
        });
      }
    } else {
      res.json({
        msg: "Please provide email and userdata",
      });
    }
  }
);

// HOLT MARKTDATEN AUS DATENBANK
routerResourcesGame.get("/data", async function (req: Request, res: Response) {
  try {
    const { MarketData } = await mongooseClient();

    let data = await MarketData.findOne({}, { _id: 0 })
      .sort({ createdAt: -1 })
      .then((feedback) => feedback);

    if (!data || data.createdAt < new Date().getTime() - 1000 * 60 * 5) {
      // Get data from API
      const response = await fetch(
        "https://resources-game.ch/resapi/?q=1006&f=1&k=" +
          process.env.API_RESOURCES_TOKEN +
          "&l=en&d=30"
      );

      // Save data to database
      const ResourcesData = await response.json();
      let insertMarketData: IMarketData = {
        marketData: [],
        createdAt: new Date(),
      };

      ResourcesData.map(
        (item: {
          itemID: number;
          itemName: string;
          KIprice: number;
          price: number;
          unixts: number;
        }) =>
          insertMarketData.marketData.push({
            itemID: item.itemID,
            KIprice: item.KIprice,
            price: item.price,
            unixts: item.unixts,
          })
      );

      await MarketData.create(insertMarketData);
      data = insertMarketData;
      // Return data
    }

    const disconnect = await mongooseClientDisconnect();

    if (!data) {
      res.json({
        msg: "No market data found",
      });
    } else {
      res.json(data);
    }
  } catch (error) {
    console.error(
      '\n\n####  ERROR -> /v1/resource_game/routerResourceGame.ts - "/data" #### \n\n\n' +
        "Timestamp: " +
        new Date().toString() +
        "\n\nError Message: " +
        error +
        "\n\n\n####  ERROR END  ####\n\n"
    );

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
