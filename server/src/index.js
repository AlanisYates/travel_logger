const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

//Middlewares
app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Error handeling middleware
app.get("/", (req, res) => {
  res.json({
    medssage: "Hello world",
  });
});

app.use((req, res, next) => {
  const error = new Error(`Not found = ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'Not avialible fam' : error.stack,
  });
});

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Listining at http://localhost:${port}`);
});
