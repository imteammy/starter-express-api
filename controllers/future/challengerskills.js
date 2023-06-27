const { ChallengerSkills } = require("../../models");

exports.getAll = async (req, res, next) => {
  try {
    const r = await ChallengerSkills.find({});
    if (r.length === 0) {
      return res.json({ message: "ChallengerSkills is empty" });
    }
    return res.json(r);
  } catch (error) {
    return res.send(error.message);
  }
};

exports.getID = async (req, res) => {
  const id = req.body;
  try {
    const r = await ChallengerSkills.findOne({ _id: id });
    return res.json(r);
  } catch (error) {
    return res.send(error.message);
  }
};

exports.update = async (req, res) => {
  const data = req.body;
  delete data.token;
  try {
    const filter = { _id: data.id };
    const update = { $set: data };
    const r = await ChallengerSkills.findOneAndUpdate({ new: true });
    if (!r) {
      return res.json({ message: "ChallengerSkills not found" });
    }
    return res.json(r);
  } catch (error) {
    return res.json(error.message);
  }
};

exports.delete = async (req, res) => {
  const { id } = req.body;
  try {
    const r = await ChallengerSkills.findOneAndDelete({ _id: id });
    if (!r) {
      return res.json({ message: "Challenger not found!" });
    }
    return res.json({ message: "Delete ChallengerSkill success", data: r });
  } catch (error) {
    return res.json(error.message);
  }
};

exports.add = async (req, res) => {
  const d = req.body;
  delete d.token;
  try {
    const r = await ChallengerSkills.create(d);
    if (!r) {
      return res.json({
        message: "CannotAdd  ChallengerSkills",
        data: r,
      });
    }
    return res.json({ success: "Add skill success", message: r });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
