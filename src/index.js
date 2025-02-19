import express from "express";
import routes from "./contollers/index.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

routes.forEach((route) => {
  app.use("/api", route);
});

app.listen(PORT, () => {
  console.log(`Listening to htttp://localhost:${PORT}`);
});
