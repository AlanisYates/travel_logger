const express = require("express");

const app = express();

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Listining at http://localhost:${port}`);
});

