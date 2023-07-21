const { GetAll, GetID, Create, CreateMany, Update, Remove, Clear } = require("../controllers");
const { auth } = require("@middleware/auth");

module.exports = (app) => {
  app.get('/clear', Clear)
  app.get("/:models/", GetAll);
  app.get("/:models/:id/", GetID);
  app.post("/:models/:id", auth, GetID);

  app.post("/:models/add", auth, Create);
  app.post("/:models/addMany", auth, CreateMany);

  app.post("/:models/update", auth, Update);
  app.put("/:models/update", auth, Update);

  app.post("/:models/delete", auth, Remove);
  app.delete("/:models/delete", auth, Remove);

};
