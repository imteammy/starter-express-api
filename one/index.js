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

// variable
const port = 3000;
const PORT = port || 4000;
const timeOut = 300;
const MONGODB_URL =
  "mongodb+srv://peerawat:YDCOyOKDb1LEyUV8@nodedev.fgnykzv.mongodb.net/ROV";
const SchemaType = { type: String, default: "null" };

// config.js

const auth = async (req, res, next) => {
    const { token } = req.body;
    if (!token) {
      res.status(401).json({ error: "Token is required" });
    }
    if (token !== "12345") {
      return res.status(401).json({ error: "Invalid token!" });
    } else {
      next();
    }
  };
  
  const connectDB = async () => {
    await mongoose
      .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000,
      })
      .then(() => {
        console.log("> MongoDB connected");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  
  connectDB();
  
  const Clear = (req, res) => {
    _nodeNC.flushAll();
    res.status(200).json({message : 'Cleared!'});
  }
  
const HeroSkillType = {
  name: SchemaType,
  image: SchemaType,
  effect: SchemaType,
  cooldown: SchemaType,
}
const HeroItemType = {
  name: SchemaType,
  image: SchemaType,
  price: SchemaType,
}
const HeroRoonType = {
  name: SchemaType,
  image: SchemaType,
  total: SchemaType,
}
const HeroLatenType = {
  name: SchemaType,
  image: SchemaType,
  effect: SchemaType,
}
const HeroComboType = {
  name: SchemaType,
  image: SchemaType,
}

const heroSchema = new mongoose.Schema({
    name: SchemaType,
    story: SchemaType,
    image: SchemaType,
    role: {
      main: SchemaType,
      sub: SchemaType,
    },
    passiveSkill: HeroSkillType,
    firstSkill: HeroSkillType,
    secondSkill: HeroSkillType,
    ultimateSkill: HeroSkillType,
    items: {
      one: HeroItemType,
      two: HeroItemType,
      three: HeroItemType,
      four: HeroItemType,
      five: HeroItemType,
      six: HeroItemType,
    },
    roons: {
      one: HeroRoonType,
      two: HeroRoonType,
      three: HeroRoonType,
    },
    challengerSkills: {
      name: SchemaType,
      image: SchemaType,
      effect: SchemaType,
    },
    LatensSkills: {
      one: {
        one: HeroLatenType,
        two: HeroLatenType,
        three: HeroLatenType,
      },
      two: {
        one: HeroLatenType,
        two: HeroLatenType,
      },
      three: {
        one: HeroLatenType,
        two: HeroLatenType,
      },
    },
    comboHero: {
      one: HeroComboType,
      two: HeroComboType,
      three: HeroComboType,
      four: HeroComboType,
      five: HeroComboType,
    },
  });
let ComboTypeA = {
  name: SchemaType,
  image: SchemaType,
};
let ComboTypeB = {
  one: ComboTypeA,
  two: ComboTypeA,
  three: ComboTypeA,
  four: ComboTypeA,
  five: ComboTypeA,
};
const ComboSchema = new mongoose.Schema({
  comboName: SchemaType,
  comboImage: SchemaType,
  heroCombo: ComboTypeB,
  comboLost: ComboTypeB,
  itemsSolution: ComboTypeB,
  comboWin: ComboTypeB,
});

let TeamTypeA = {
  name: SchemaType,
  image: SchemaType,
};
const teamSchema = new mongoose.Schema({
  teamName: SchemaType,
  teamImage: SchemaType,
  team: {
    one: TeamTypeA,
    two: TeamTypeA,
    three: TeamTypeA,
    four: TeamTypeA,
    five: TeamTypeA,
  },
});

const itemSchema = new mongoose.Schema({
  name: SchemaType,
  image: SchemaType,
  effect: SchemaType,
  itemPassive: SchemaType,
  cooldown: SchemaType,
  cost: SchemaType,
});

const roonSchema = new mongoose.Schema({
  name: SchemaType,
  color: SchemaType,
  image: SchemaType,
  effect: SchemaType,
});

const ChallengerSchema = new mongoose.Schema({
  name: SchemaType,
  image: SchemaType,
  effect: SchemaType,
  cooldown: SchemaType,
});

const latenSchema = new mongoose.Schema({
  name: SchemaType,
  image: SchemaType,
  effect: SchemaType,
  color: SchemaType,
});

const tierlistSchema = new mongoose.Schema({
  image: SchemaType,
});

// model.js
const ItemModel = mongoose.model("Items", itemSchema);
const HeroModel = mongoose.model("Hero", heroSchema);
const RoonModel = mongoose.model("Roons", roonSchema);
const ComboModel = mongoose.model("ComboHero", ComboSchema);
const LatenModel = mongoose.model("LatensSkills", latenSchema);
const ChallengerModel = mongoose.model("ChallengerSkills", ChallengerSchema);
const TierlistModel = mongoose.model("Tierlist", tierlistSchema);
const TeamModel = mongoose.model("Teamhero", teamSchema);

const getModel = (models) => {
    switch (models) {
      case 'hero':
        return HeroModel; 
      case 'items':
        return ItemModel;
      case 'challengers':
        return ChallengerModel; 
      case 'roons':
        return RoonModel; 
      case 'tierlist':
        return TierlistModel; 
      case 'herocombos':
        return ComboModel; 
      case 'latens':
        return LatenModel; 
      case 'teams':
        return TeamModel; 
      default:
        return false;
    }
  };
// controller.js
const GetAll = async (req, res) => {
  const models = req.params.models;
  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }
  const c = _nodeNC.get(models);
  if (c) {
    return res.status(200).json(c);
  }
  await Model.find({})
    .then((r) => {
      if (!r || r === undefined || r === null || r.lenght === undefined) {
        return res.status(200).json({ message: `${models} is empty.` });
      }
      _nodeNC.set(models, r, timeOut);
      return res.status(200).json(r);
    })
    .catch((err) => {
      return res.status(500).json({ message: "Invalid request parameters" });
    });
};

const GetID = async (req, res) => {
  const models = req.params.models;
  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }

  const { id } = req.body;
  const c = _nodeNC.get(id);
  if (c) return res.json(c);

  await Model.findOne({ _id: id })
    .then((r) => {
      if (!r || r.lenght === 0) {
        return res.json({ message: `${models} not found!` });
      }
      _nodeNC.set(id, r);
      return res.status(200).json(r);
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

const Create = async (req, res) => {
  const models = req.params.models;
  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }

  const data = req.body;
  delete data.token;

  await Model.create(data)
    .then((r) => {
      return res
        .status(200)
        .json({ message: `Create ${models} success.`, data: r });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

const CreateMany = async (req, res) => {
  const models = req.params.models;

  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }

  const d = req.body;
  delete d.token;

  const result = d.map((obj) => {
    const { token, ...r } = obj;
    return r;
  });

  await Model.insertMany(result)
    .then((r) => {
      return res
        .status(200)
        .json({ message: `Create many ${models} successfully.`, data: r });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

const Update = async (req, res) => {
  const models = req.params.models;
  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }

  const data = req.body;
  delete data.token;

  const id = { _id: data.id };
  const update = Object.assign({}, data);

  const c = _nodeNC.get(id);
  if (c) return res.json(c);

  await Model.findOneAndUpdate(id, update, { new: true })
    .then((r) => {
      if (!r) {
        const message = { message: `${models} not found for update.` };
        _nodeNC.set(id, message, timeOut);
        return res.status(200).json(message);
      }
      _nodeNC.set(id, update, timeOut);
      return res.status(200).json({
        message: `${models} updated success.`,
        data: r,
      });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

const Remove = async (req, res) => {
  const models = req.params.models;
  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }

  const { id } = req.body;
  const c = _nodeNC.get(id);
  if (c) return res.json(c);

  await Model.findOneAndDelete({ _id: id })
    .then((r) => {
      if (!r || r === null) {
        const message = { message: `${models} not found for delete.` };
        _nodeNC.set(id, message, timeOut);
        return res.status(200).json(message);
      }
      return res
        .status(200)
        .json({ message: `Delete ${models} success.`, data: r });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

// Routes.js

  app.get('/:models', GetAll);

  app.post('/:models/id', auth, GetID);
  app.post('/:models/add', auth, Create);

  app.post('/:models/addmany',auth, CreateMany);

  app.post('/:models/update', auth, Update);
  app.put('/:models/update', auth, Update);
  
  app.post('/:models/delete', auth, Remove);
  app.delete('/:models/delete', auth, Remove);

  app.post('/clear', Clear);
//app.js

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});