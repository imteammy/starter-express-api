const {
  hero,
  tierlist,
  items,
  herocombo,
  roons,
  challengersskill,
  latensskill,
} = require("@controllers");

const { auth } = require("@middleware/auth");

module.exports = app => {
  const ti = "/tierlist/";
  app.get(ti, tierlist.getAll);
  app.post(ti + "/add", auth, tierlist.create);
  app.post(ti + "/update", auth, tierlist.update);

  const he = "/hero/";
  app.get(he, hero.getAllHeroes);
  app.post(he + "id", auth, hero.findhero);
  app.post(he + "add", auth, hero.create);
  app.post(he + "addmany", hero.createMany);
  app.post(he + "update", auth, hero.update);
  app.post(he + "delete", auth, hero.delete);

  const it = "/items/";
  app.get(it, items.getAllItems);
  app.post(it + "/id", auth, items.getByID);
  app.post(it + "/add", auth, items.create);
  app.post(it + "/update", auth, items.update);
  app.post(it + "/delete", auth, items.delete);

  const hc = "/herocombo";
  app.get(hc, herocombo.getAll);
  app.post(hc + "/id", auth, herocombo.getByID);
  app.post(hc + "/add", auth, herocombo.create);
  app.post(hc + "/update", auth, herocombo.update);
  app.post(hc + "/delete", auth, herocombo.delete);

  const ro = "/roons";
  app.get(ro, roons.getAll);
  app.post(ro + "/id", auth, roons.getID);
  app.post(ro + "/add", auth, roons.create);
  app.post(ro + "/update", auth, roons.update);
  app.post(ro + "/delete", auth, roons.delete);

  const ch = "/challengersskill/";
  app.get(ch, challengersskill.getAll);
  app.post(ch + "/id", auth, challengersskill.getID);
  app.post(ch + "/add", auth, challengersskill.create);
  app.post(ch + "/update", auth, challengersskill.update);
  app.post(ch + "/delete", auth, challengersskill.delete);

  const lt = "/latensskill/";
  app.get(lt, latensskill.getAll);
  app.post(lt + "/id", auth, latensskill.getID);
  app.post(lt + "/add", auth, latensskill.create);
  app.post(lt + "/update", auth, latensskill.update);
  app.post(lt + "/delete", auth, latensskill.delete);
};
