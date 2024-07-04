import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
var path = require('path');
var cookieParser = require('cookie-parser');
const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const v1 = require('./api/v1/routerv1');
app.use('/v1', v1);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // render the error page
    res.status(err.status || 500);
    res.redirect('https://shipy.de/');
  });*/


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;