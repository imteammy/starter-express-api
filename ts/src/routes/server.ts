import express from 'express';
import { GetAll, GetID, Create, CreateMany, Update, Remove, Clear } from "../controllers";
import auth from "../middleware/auth";

const app = express();
const router = () => {
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

export default router