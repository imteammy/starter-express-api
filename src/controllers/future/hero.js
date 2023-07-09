const { Hero } = require("@models");

exports.getAllHeroes = async (req, res, next) => {
  try {
    const hero = await Hero.find({});

    if (hero.length === 0) {
      return res.json({ message: "Heroes is empty." });
    }

    return res.status(200).json(hero);
  } catch (error) {
    return error.message;
  }
};

exports.findhero = async (req, res, next) => {
  const id = req.body.id;

  if (!id || id == "") {
    return res.send({ message: "ID is required" });
  }
  try {
    const hero = await Hero.findOne({ _id: id });
    if (!hero) {
      return res.json({ message: "Hero not found!" });
    }
    return res.send(hero);
  } catch (error) {
    return res.send(error.message);
  }
};

exports.create = async (req, res, next) => {
  const HeroData = req.body;

  delete HeroData.token;
  try {
    const result = await Hero.create(HeroData);
    return res
      .status(200)
      .json({ message: "Created new hero successfully.", data: result });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
exports.createMany = async (req, res, next) => {
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
exports.update = async (req, res, next) => {
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

exports.delete = async (req, res, next) => {
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
