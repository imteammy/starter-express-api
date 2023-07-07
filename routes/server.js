const {
  hero,
  tierlist,
  items,
  herocombo,
  roons,
  challengersskill,
  latensskill
} = require("@controllers");

const { auth } = require("@middleware/auth");


module.exports = (app) => {


  app.get("/tierlist", tierlist.getAll);
  app.post("/tierlist/add", auth, tierlist.create);
  app.post("/tierlist/update", auth, tierlist.update);

  app.get("/hero/", hero.getAllHeroes);
  app.post("/hero/id", auth, hero.findhero);
  app.post("/hero/add", auth, hero.create);
  app.post("/hero/addmany", hero.createMany);
  app.post("/hero/update", auth, hero.update);
  app.post("/hero/delete", auth, hero.delete);

  app.get("/items", items.getAllItems);
  app.post("/items/id", auth, items.getByID);
  app.post("/items/add", auth, items.create);
  app.post("/items/update", auth, items.update);
  app.post("/items/delete", auth, items.delete);

  app.get("/herocombo", herocombo.getAll);
  app.post("/herocombo/id", auth, herocombo.getByID);
  app.post("/herocombo/add", auth, herocombo.create);
  app.post("/herocombo/update", auth, herocombo.update);
  app.post("/herocombo/delete", auth, herocombo.delete);

  app.get("/roons", roons.getAll);
  app.post("/roons/id", auth, roons.getID);
  app.post("/roons/add", auth, roons.create);
  app.post("/roons/update", auth, roons.update);
  app.post("/roons/delete", auth, roons.delete);

  app.get("/challengersskill", challengersskill.getAll);
  app.post("/challengersskill/id", auth, challengersskill.getID);
  app.post("/challengersskill/add", auth, challengersskill.create);
  app.post("/challengersskill/update", auth, challengersskill.update);
  app.post("/challengersskill/delete", auth, challengersskill.delete);

  app.get('/latensskill', latensskill.getAll);
  app.post('/latensskill/id', auth, latensskill.getID);
  app.post('/latensskill/add', auth, latensskill.create);
  app.post('/latensskill/update', auth, latensskill.update);
  app.delete('/latensskill/delete', auth, latensskill.delete);

};
