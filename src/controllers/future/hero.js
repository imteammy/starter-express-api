const { Hero } = require("@models");
const { nc } = require("@config/node");
const time = 300;

exports.getAll = async (_, res) => {
  const c = nc.get("Heroes");
  if (c) return res.json(c);
  try {
    const hero = await Hero.find({});
    if (!hero) {
      let m = { message: "Heroes is empty." };
      nc.set("Heroes", m, time);
      return res.json(m);
    }
    nc.set("Heroes", hero, time);
    return res.status(200).json(hero);
  } catch (error) {
    return error.message;
  }
};

exports.getID = async (req, res) => {
  const { id } = req.body;
  const c = nc.get(id);
  if (c) return res.json(c);

  try {
    const hero = await Hero.findOne({ _id: id });
    if (!hero) {
      let m  = { message: "Hero not found!" };
      nc.set(id, m);
      return res.json(m);
    }
    nc.set(id, hero);
    return res.send(hero);
  } catch (error) {
    return res.send(error.message);
  }
};

exports.create = async (req, res) => {
  const {id} = req.body;
  delete id.token;
  try {
    const result = await Hero.create(id);
    return res
      .status(200)
      .json({ message: "Created new hero successfully.", data: result });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
exports.createMany = async (req, res) => {
  const d = req.body;
  delete d.token;

  const result = d.map((obj) => {
    const { token, ...rest } = obj;
    return rest;
  });

  try {
    const r = await Hero.insertMany(result);
    return res
      .status(200)
      .json({ message: "Created new hero successfully.", data: r });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
exports.update = async (req, res) => {
  const data = req.body;
  delete data.token;
  try {
    const filter = { _id: data.id };
    const update = Object.assign({}, data);
    const updateResult = await Hero.findOneAndUpdate(filter, update, {
      new: true,
    });

    if (!updateResult) {
      return res.send("Hero not found.");
    }

    return res.status(200).json({
      message: "Hero updated successfully.",
      data: updateResult,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.remove = async (req, res) => {
  const { id } = req.body;
  try {
    const deleteHero = await Hero.findOneAndDelete({ _id: id });
    if (!deleteHero) {
      return res.json({ message: "Find Hero by ID not found. Cannot delete" });
    }

    return res
      .status(200)
      .json({ message: "Hero deleted successfully.", data: deleteHero });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
