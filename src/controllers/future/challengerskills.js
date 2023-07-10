const { ChallengerSkills } = require("@models");
const { nc } = require("@config/node");
const time = 300;

exports.getAll = async (req, res, next) => {
  const c = nc.get("Challengers");
  if (c) { return res.json(c); };
  await ChallengerSkills.find({})
    .then((r) => {
      if (r.length === 0) {
        return res
          .status(400)
          .json({ message: "ChallengerSkills is empty" });
      };
      nc.set("Challengers", r, time);
      return res
        .status(200)
        .json(r);
    }).catch((err) => {
      return res
        .status(500)
        .json({ message: err.message });
    });
};

exports.getID = async (req, res) => {
  const id = req.body;
  const c = nc.get(id);
  if (c) { return res.json(c); };
  await ChallengerSkills.findOne({ _id: id })
    .then((r) => {
      if (r.lenght === 0) {
        return res
          .status(400)
          .json({ message: 'Challenge not found' });
      }
      nc.set(id, r, time);
      return res.json(r);
    }).catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

exports.update = async (req, res) => {
  const data = req.body;
  delete data.token;
  const id = { _id: data.id };
  const update = { $set: data };
  await ChallengerSkills.findOneAndUpdate(id, update, { new: true })
    .then((r) => {
      if (r.lenght === 0) {
        return res
          .status(400)
          .json({ message: "ChallengerSkills not found for update." });
      };
      return res
        .status(200)
        .json(r);
    }).catch((err) => {
      return res
        .status(500)
        .json(error.message);
    });
};

exports.remove = async (req, res) => {
  const { id } = req.body;
  await ChallengerSkills.findOneAndDelete({ _id: id })
    .then((result) => {
      if (r.lenght === 0) {
        return res
          .status(400)
          .json({ message: "Challenger not found for remove!" });
      };
      return res
        .status(200)
        .json({ message: "Delete ChallengerSkill success", data: r });
    }).catch((err) => {
      return res
        .status(500)
        .json(error.message);
    });
};

exports.create = async (req, res) => {
  const d = req.body;
  delete d.token;
  await ChallengerSkills.create(d).then((r) => {
    return res
      .status(400)
      .json({ success: "Creat Challengers Skill Success", message: r });
  }).catch((err) => {
    return res
      .status(500)
      .json({ message: err.message });
  });
};