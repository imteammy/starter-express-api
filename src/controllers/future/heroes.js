const { Hero } = require("@models");
const { nc } = require("@config/node");
const time = 300;

exports.getAll = async (_, res) => {
  const c = nc.get("Heroes");
  if (c) return res.json(c);
  await Hero.find({})
  .then((r) => {
    if (!hero) { return res.status(200).json({ message: "Heroes is empty." });};
    nc.set("Heroes", hero, time);
    return res.status(200).json(hero);    
  }).catch((err) => {
    return err.message;
  });
};

exports.getID = async (req, res) => {
  const { id } = req.body;
  const c = nc.get(id);
  if (c) return res.json(c);
  await Hero.findOne({ _id: id }).then((r) => {
    if (!hero) { return res.json({ message: "Hero not found!" }); }
    nc.set(id, r);
    return res.json(r);
  }).catch((err) => {
    return res.status(500).json({ message: err.message });
  });
};

exports.create = async (req, res) => {
  const data = req.body;
  delete data.token;
  await Hero.create(data).then((r) => {
    return res
      .status(200)
      .json({ message: "Create hero success.", data: r });
  }).catch((err) => {
    return res.status(500).json({ message: err.message });
  });
};

exports.createMany = async (req, res) => {
  const d = req.body;
  delete d.token;
  const result = d.map((obj) => {
    const { token, ...rest } = obj;
    return rest;
  });
  await Hero.insertMany(result).then((r) => {
    return res
      .status(200)
      .json({ message: "Create many hero successfully.", data: r });
  }).catch((err) => {
    return res.status(500).json({ message: err.message });
  });
};

exports.update = async (req, res) => {
  const data = req.body;
  delete data.token;
  const id = { _id: data.id };
  const update = Object.assign({}, data);
  await Hero.findOneAndUpdate(id, update, { new: true })
    .then((r) => {
      if (!r) { return res.send("Hero not found."); }
      return res.status(200).json({
        message: "Hero updated success.",
        data: r,
      });
    }).catch((err) => {
      return res.status(400).json({ message: err.message });
    });
};

exports.remove = async (req, res) => {
  const { id } = req.body;
  await Hero.findOneAndDelete({ _id: id }).then((r) => {
    if (r.length === 0) { return res.json({ message: "Hero not found for delete." }); };
    return res
      .status(200)
      .json({ message: "Delete hero success.", data: r });
  }).catch((err) => {
    return res
    .status(500)
    .json({ message: err.message });
  });
};
