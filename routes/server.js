const {
  hero,
  tierlist,
  items,
  herocombo,
  roons,
  challengersskill,
  latensskill
} = require("../controllers/index");

const { auth } = require("../middleware/auth");
const login = require("../controllers/future/login");

module.exports = (app) => {


  app.post("/login", login.login);

  app.get("/tierlist", tierlist.getAll);
  app.post("/tierlist/add", auth, tierlist.add);
  app.post("/tierlist/update", auth, tierlist.update);

  app.get("/hero/", hero.getAllHeroes);
  app.post("/hero/id", auth, hero.findhero);
  app.post("/hero/add", auth, hero.add);
  app.post("/hero/addmany", hero.addMany);
  app.post("/hero/update", auth, hero.update);
  app.post("/hero/delete", auth, hero.delete);

  app.get("/items", items.getAllItems);
  app.post("/items/id", auth, items.getByID);
  app.post("/items/add", auth, items.add);
  app.post("/items/update", auth, items.update);
  app.post("/items/delete", auth, items.delete);

  app.get("/herocombo", herocombo.getAll);
  app.post("/herocombo/id", auth, herocombo.getbyid);
  app.post("/herocombo/add", auth, herocombo.add);
  app.post("/herocombo/update", auth, herocombo.update);
  app.post("/herocombo/delete", auth, herocombo.delete);

  app.get("/roons", roons.getAll);
  app.post("/roons/id", auth, roons.getID);
  app.post("/roons/add", auth, roons.add);
  app.post("/roons/update", auth, roons.update);
  app.post("/roons/delete", auth, roons.delete);

  app.get("/challengersskill", challengersskill.getAll);
  app.post("/challengersskill/id", auth, challengersskill.getID);
  app.post("/challengersskill/add", auth, challengersskill.add);
  app.post("/challengersskill/update", auth, challengersskill.update);
  app.post("/challengersskill/delete", auth, challengersskill.delete);

  app.get('/latensskill', latensskill.getAll);
  app.post('/latensskill/id', auth, latensskill.getID);
  app.post('/latensskill/add', auth, latensskill.add);
  app.post('/latensskill/update', auth, latensskill.update);
  app.delete('/latensskill/delete', auth, latensskill.delete);

};
