// require.js
const r = (r) => require(r);

const express = r("express");
const mongoose = r("mongoose");
const NodeCache = r("node-cache");
const cors = r("cors");

const app = express();
const _nodeNC = new NodeCache();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
