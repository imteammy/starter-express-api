import express, { json, Express, urlencoded } from "express";
const app: Express = express();
import cors from "cors";
import nodeCache from "node-cache";
const _node = new nodeCache();
const PORT = process.env.PORT || 4000;

import "./aliases";
require("dotenv").config();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

import routes from "./src/routes/server";
app.use(routes);
import connectDB from "./src/config/database";
connectDB();

const HALF_HOUR = 1800000;
function clearCache() {
  console.log("Clearing cache")
  _node.flushAll();
}
setInterval(() => {
  clearCache();
}, HALF_HOUR);

app.listen(PORT, () => {
  console.log("> 🚀 [ Server ] is running on http://localhost:" + PORT);
});
