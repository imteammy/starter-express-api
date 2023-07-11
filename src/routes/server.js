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

module.exports = (app) => {
  const titierlistPath = "/tierlist/";
  app.get(titierlistPath, tierlist.getAll);
  app.post(titierlistPath + "add", auth, tierlist.create);
  app.post(titierlistPath + "update", auth, tierlist.update);

  const heroPath = "/hero/";
  app.get(heroPath, hero.getAll);
  app.post(heroPath + "id", auth, hero.getID);
  app.post(heroPath + "add", auth, hero.create);
  app.post(heroPath + "addmany", hero.createMany);
  app.post(heroPath + "update", auth, hero.update);
  app.post(heroPath + "delete", auth, hero.remove);

  const itemsPath = "/items/";
  app.get(itemsPath, items.getAll);
  app.post(itemsPath + "id", auth, items.getID);
  app.post(itemsPath + "add", auth, items.create);
  app.post(itemsPath + "update", auth, items.update);
  app.post(itemsPath + "delete", auth, items.remove);

  const herocomboPath = "/herocombo/";
  app.get(herocomboPath, herocombo.getAll);
  app.post(herocomboPath + "id", auth, herocombo.getID);
  app.post(herocomboPath + "add", auth, herocombo.create);
  app.post(herocomboPath + "update", auth, herocombo.update);
  app.post(herocomboPath + "delete", auth, herocombo.remove);

  const roonsPath = "/roons/";
  app.get(roonsPath, roons.getAll);
  app.post(roonsPath + "id", auth, roons.getID);
  app.post(roonsPath + "add", auth, roons.create);
  app.post(roonsPath + "update", auth, roons.update);
  app.post(roonsPath + "delete", auth, roons.remove);

  const challengersSkillPath = "/challengersskill/";
  app.get(challengersSkillPath, challengersskill.getAll);
  app.post(challengersSkillPath + "id", auth, challengersskill.getID);
  app.post(challengersSkillPath + "add", auth, challengersskill.create);
  app.post(challengersSkillPath + "update", auth, challengersskill.update);
  app.post(challengersSkillPath + "delete", auth, challengersskill.remove);

  const latensSkillPath = "/latensskill/";
  app.get(latensSkillPath, latensskill.getAll);
  app.post(latensSkillPath + "id", auth, latensskill.getID);
  app.post(latensSkillPath + "add", auth, latensskill.create);
  app.post(latensSkillPath + "update", auth, latensskill.update);
  app.post(latensSkillPath + "delete", auth, latensskill.remove);
};
