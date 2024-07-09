import express, { Router, Request, Response } from "express";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";
import jwt from "jsonwebtoken";
import * as EmailValidator from "email-validator";
import { sendEmail } from "@/lib/mailer";
import {
  mongooseClient,
  mongooseClientDisconnect,
} from "@/lib/database/mongooseClient";
import { IMarketData } from "@/lib/Interfaces/IMarketData.interfaces";
import { IUserData } from "@/lib/Interfaces/IUserData.interfaces";

const routerResourcesGame: Router = express.Router();

// RUFT DIE AKTION AUF DAMIT EINE EMAIL MIT EINEN EINMAL TOKEN GESENDET WIRD
routerResourcesGame.get(
  "/recovery/:UUID",
  async function (req: Request, res: Response) {
    const { UUID } = req.params;

    // Check if UUID is valid
    if (!uuidValidate(UUID)) {
      res.json({
        msg: "Please provide a valid UUID",
      });
      return;
    }

    let email;

    // Get Email from Database
    try {
      const { UserData } = await mongooseClient();

      email = await UserData.findOne({ uuid: UUID }, { email: 1 });

      if (!email) {
        res.json({
          msg: "No User Data found for this Recovery Key",
        });
        return;
      }

      const disconnect = await mongooseClientDisconnect();
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
        msg: "Error by getting the email data from recovery key",
      });
      return;
    }

    // Generate Token
    let TokenUUID = uuidv4();

    // Token saved in Database
    try {
      const { Token } = await mongooseClient();

      const getToken = await Token.findOne({
        uuid: UUID,
        for: "get",
        usedAt: { $exists: false },
      });

      if (!getToken) {
        await Token.create({
          uuid: UUID,
          token: TokenUUID,
          for: "get",
          createdAt: new Date(),
        });
      } else {
        TokenUUID = await getToken.token;
      }

      const disconnect = await mongooseClientDisconnect();
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
        msg: "Error by saving token in database",
      });
      return;
    }

    // Send Email with Token
    try {
      const mailsend = await sendEmail({
        to: email,
        subject: "Dein Token von Resources Game Stats App",
        html:
          "<h1>Dein Token um deine Daten wiederherzustellen lautet: </h1><p>" +
          TokenUUID +
          "</p>",
      });

      // Check if send email was successful
      if (mailsend instanceof Error) {
        throw mailsend;
      }

      // Return response
      res.json({
        msg: "Please continue the recovery process in the email sent to you.",
      });
      return;
    } catch (error) {
      console.error(
        '\n\n####  ERROR -> /v1/resource_game/routerResourceGame.ts - "/recovery" #### \n\n\n' +
          "Timestamp: " +
          new Date().toString() +
          "\n\nError Message: " +
          error +
          "\n\n\n####  ERROR END  ####\n\n"
      );

      try {
        const { Token } = await mongooseClient();
        await Token.deleteOne({ token: TokenUUID });
        const disconnect = await mongooseClientDisconnect();
      } catch (error2) {
        console.error(
          '\n\n####  ERROR -> /v1/resource_game/routerResourceGame.ts - "/recovery" #### \n\n\n' +
            "Timestamp: " +
            new Date().toString() +
            "\n\nError Message: " +
            error2 +
            "\n\n\n####  ERROR END  ####\n\n"
        );
      }

      res.json({
        msg: "Error by sending email with token",
      });
      return;
    }
  }
);

// RUF DIE AKTION AUF DAMIT EINE EMAIL MIT EINEM EINMAL TOKEN ZUM
// LÖSCHEN DER HINTERLEGTEN DATENSÄTZE GESENDET WIRD
routerResourcesGame.delete(
  "/recovery/:UUID/",
  async function (req: Request, res: Response) {
    const { UUID } = req.params;

    // Check if UUID is valid
    if (!uuidValidate(UUID)) {
      res.json({
        msg: "Please provide a valid UUID",
      });
      return;
    }

    let email;

    // Get Email from Database
    try {
      const { UserData } = await mongooseClient();

      email = await UserData.findOne({ uuid: UUID }, { email: 1 });

      if (!email) {
        res.json({
          msg: "No User Data found for this Recovery Key",
        });
        return;
      }

      const disconnect = await mongooseClientDisconnect();
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
        msg: "Error by getting the email data from recovery key",
      });
      return;
    }

    // Generate Token
    let TokenUUID = uuidv4();

    // Token saved in Database
    try {
      const { Token } = await mongooseClient();

      const getToken = await Token.findOne({
        uuid: UUID,
        for: "delete",
        usedAt: { $exists: false },
      });

      if (!getToken) {
        await Token.create({
          uuid: UUID,
          token: TokenUUID,
          for: "delete",
          createdAt: new Date(),
        });
      } else {
        TokenUUID = await getToken.token;
      }

      const disconnect = await mongooseClientDisconnect();
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
        msg: "Error by saving token in database",
      });
      return;
    }

    // Send Email with Token
    try {
      const mailsend = await sendEmail({
        to: email,
        subject: "Deine Löschanfrage von Resources Game Stats App",
        html:
          "<h1>Dein Token um deine Daten zu Löschen lautet: </h1><p>" +
          TokenUUID +
          "</p><br><br><p>ACHTUNG: DIESE AKTION KANN NICHT RÜCKGÄNGIG GEMACHT WERDEN, WENN DU DIESEN BESTÄTIGUNGSTOKEN EINGIBST!</p>",
      });

      // Check if send email was successful
      if (mailsend instanceof Error) {
        throw mailsend;
      }

      // Return response
      res.json({
        msg: "Please continue the delete process in the email sent to you.",
      });
      return;
    } catch (error) {
      console.error(
        '\n\n####  ERROR -> /v1/resource_game/routerResourceGame.ts - "/recovery" #### \n\n\n' +
          "Timestamp: " +
          new Date().toString() +
          "\n\nError Message: " +
          error +
          "\n\n\n####  ERROR END  ####\n\n"
      );

      try {
        const { Token } = await mongooseClient();
        await Token.deleteOne({ token: TokenUUID });
        const disconnect = await mongooseClientDisconnect();
      } catch (error2) {
        console.error(
          '\n\n####  ERROR -> /v1/resource_game/routerResourceGame.ts - "/recovery" #### \n\n\n' +
            "Timestamp: " +
            new Date().toString() +
            "\n\nError Message: " +
            error2 +
            "\n\n\n####  ERROR END  ####\n\n"
        );
      }

      res.json({
        msg: "Error by sending email with token",
      });
      return;
    }
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

      const insertUserData: IUserData = {
        uuid: userID,
        email: email,
        userData: userData,
        createdAt: new Date(),
      };

      try {
        const { UserData } = await mongooseClient();
        await UserData.create(insertUserData);
        const disconnect = await mongooseClientDisconnect();
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
        return;
      }

      try {
        const { JWT_SECRET_KEY } = process.env;

        if (JWT_SECRET_KEY) {
          const token = jwt.sign(insertUserData, JWT_SECRET_KEY, {
            expiresIn: "90d",
          });

          // send email with token
          const mailsend = await sendEmail({
            to: email,
            subject: "Dein Recovery Key von Resources Game Stats App",
            html: "<h1>Dein Recovery Key: </h1><p>" + userID + "</p>",
          });

          // Check if send email was successful
          if (mailsend instanceof Error) {
            throw mailsend;
          }

          // Return response
          res.json({
            YOUR_RECOVERY_KEY: userID,
            SESSION_TOKEN: token,
            SESSION_TOKEN_EXPIRES: new Date(
              Date.now() + 1000 * 60 * 60 * 24 * 90 - 10000
            ),
          });
          return;
        } else {
          throw new Error("JWT_SECRET_KEY not found in .env file!");
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

        try {
          const { UserData } = await mongooseClient();
          await UserData.deleteOne({ uuid: userID });
          const disconnect = await mongooseClientDisconnect();
        } catch (error2) {
          console.error(
            '\n\n####  ERROR (Manual intervention necessary) ####\n#  -> /v1/resource_game/routerResourceGame.ts - "/recovery"  # \n\n\n' +
              "Timestamp: " +
              new Date().toString() +
              "\n\nError Message: " +
              error2 +
              "\n\n\n####  ERROR END  ####\n\n"
          );
        }

        res.json({
          msg: "Error by saving data",
        });
        return;
      }
    } else {
      res.json({
        msg: "Please provide email and userdata",
      });
      return;
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
    }

    const disconnect = await mongooseClientDisconnect();

    // Return data
    if (!data) {
      res.json({
        msg: "No market data found",
      });
      return;
    } else {
      res.json(data);
      return;
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
    return;
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
