const express = require("express");
const app = express();
const cors = require("cors");
const nodeCache = require("node-cache");
const _node = new nodeCache();
const PORT = process.env.PORT || 4000;

require("./aliases");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require("@route/server");
routes(app);
const connectDB = require("@config/database");
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
