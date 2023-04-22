const express = require("express");
const { connection } = require("./config/db");
const { movieRouter } = require("./Router/movieRouter");
const app = express();

app.use(express.json());

app.use("/movies", movieRouter);

app.listen(8080, async () => {
  await connection;
  console.log(`Connected`);
});
