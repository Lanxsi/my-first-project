import "dotenv/config";
import express from "express";
import routes from "./controllers/index.js";
import client from "./db.js";
import { addUser } from "./addUser.js";

const app = express();

console.log("process.env.PORT:", process.env.PORT);

if (process.env.PORT === undefined) throw Error('The PORT is undefined');

const PORT = +process.env.PORT as number;

routes.forEach((route) => {
  app.use("/api", route);
});

app.listen(PORT, () => {
  console.log(`Listening to htttp://localhost:${PORT}`);
});
