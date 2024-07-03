const express = require('express');
const routerResourcesGame = express.Router();

// RUFT DIE AKTION AUF DASS EINE EMAIL MIT EINEN EINMAL TOKEN GESENDET WIRD
routerResourcesGame.get('/recovery/:UUID', function(req, res){
    res.json({
        msg: 'ok',
        UUID: req.params.UUID
    });
});

// GIBT EINMALIG DIE ZUR UUID IN DER DATENBANK GESPEICHERTEN DATEN ZURÜCK
routerResourcesGame.get('/recovery/:UUID/:TOKEN', function(req, res){
    res.json({
        msg: 'ok',
        UUID: req.params.UUID,
        TOKEN: req.params.TOKEN
    });
});

// SPEICHERT DIE DATEN AUS DER APP AB
routerResourcesGame.post('/recovery', function(req, res){
    res.json({
        msg: 'ok'
    });
});


// HOLT MARKTDATEN AUS DATENBANK
routerResourcesGame.get('/data', function(req, res){
    res.json({
        msg: 'ok'
    });
});

module.exports = routerResourcesGame;


/*

GET     /v1/resources-game/recovery/[:uuid]/            -> RETURN SEND EMAIL TO YOUR EMAIL + SEND EMAIL MIT TOKEN
GET     /v1/resources-game/recovery/[:uuid]/[:token]    -> RETURN GESPEICHERTE DATEN
POST    /v1/resources-game/recovery/                    -> RETURN ERGEBNIS + SEND EMAIL AN EMAILADRESSE

GET     /v1/resources-game/data/                        -> GET RESSOURCES MARKTDATA
GET RESSOURCES PLAYERDATA -> DIREKT ÜBER DESSEN API # DOCS:https://www.resources-game.ch/resapi/



*/