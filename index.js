const r = (r) => require(r);

const express = r("express");
const app = express();
const cors = r("cors");
const nodeCache = r("node-cache");
const _node = new nodeCache();
const PORT = process.env.PORT || 4000 ;

r("./aliases");
r("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = r("@route/server");
routes(app);
const connectDB = r("@config/database");
connectDB();

const HALF_HOUR = 1800000;
function clearCache() {
  _node.flushAll();
}
setInterval(() => {
  clearCache();
}, HALF_HOUR);

app.listen(PORT, (p) => {
  console.log("> Server is running on http://localhost:" + PORT);
});
