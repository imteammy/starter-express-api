const express = require("express");
const cors = require("cors");
const nodeCache = require("node-cache");

const app = express();
const NodeCache = new nodeCache();
const PORT = process.env.PORT || 4000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require("./src/routes/server");
const connectDB = require("./src/config/database");
routes(app);
connectDB();

const TEN = 300000;
const HALF_HOUR = 1800000;
const clearCache = () => console.log("clear"); NodeCache.flushAll();
setInterval(() => clearCache(), TEN);
app.listen(PORT, () => {
  console.log("> 🚀 [ Server ] is running on http://localhost:" + PORT);
});
