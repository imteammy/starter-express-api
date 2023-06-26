const express = require('express')
const app = express.Router();

const {
  hero,
  tierlist,
  items,
  herocombo,
  roons,
  challengersskill,
  latensskill
} = require("../controllers/page");

app.get("/", (req, res, next) => {
    return res.render("index");
});

app.get('/dashboard', (req, res) => {
  return res.render("dashboard");
})

app.get("/admin/", async (req, res) => {
      res.render('admin', );
  });

app.get("/admin/hero", async (req, res) => {
const data = await hero.getAllHeroes()
    res.render('hero', {data});
});
app.get("/admin/herocombo", async (req, res) => {
  const data = await herocombo.getAll();
      res.render('herocombo', {data});
  });
module.exports = app;