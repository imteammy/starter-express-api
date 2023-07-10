const { ComboHero } = require("@models");
const { nc } = require("@config/node");
const time = 300;
exports.getAll = async (req, res, next) => {
  const c = nc.get('AllCombo');
  if (c) return res.json(c);
  await ComboHero.find({}).then((r) => {
    if (r.length === 0) { return { message: "Heroes is empty." }; };
    return res.json(r);
  }).catch((err) => {
    return res.json({ message: err.message });
  });
};

exports.getID = async (req, res, next) => {
  const { id } = req.body;
  await ComboHero.find({ _id: id })
    .then((r) => {
      if (r.length === 0) { return { message: "Combo not found!" }; };
      return res.json(r);
    }).catch((err) => {
      return res.send(error.message);
    });
};

exports.create = async (req, res) => {
  const data = req.body;
  delete data.token;
  await ComboHero.create(data)
    .then((r) => {
      return res.json({ message: "Created Hero combo success.", data: r });
    }).catch((err) => {
      return res.status(400).json({ message: error.message });
    });
};

exports.update = async (req, res, next) => {
  const data = req.body;
  delete data.token;
  const id = { _id: data.id };
  const update = Object.assign({}, data);
  await ComboHero.findOneAndUpdate(id, update, { new: true })
    .then((r) => {
      if (r.length === 0) {
        return res.status(404).json({ message: "Hero not found." });
      };
      return res
        .status(200)
        .json({ message: "Hero updated successfully.", data: r });
    }).catch((err) => { return res.status(400).json({ message: error.message }); });
};

exports.remove = async (req, res) => {
  const { id } = req.body;
  await ComboHero.findOneAndDelete({ _id: id })
    .then((r) => {
      if (r.length === 0) return res.status(404).json({ message: "Hero not found for delete." });
      return res.json({ message: "Hero deleted successfully.", data: r });
    }).catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};
