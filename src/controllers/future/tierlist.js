const { TierList } = require("@models");
const { nc } = require("@config/node");
const time = 300;

exports.getAll = async (req, res) => {
  const c = nc.get("Tierlist");
  if (c) return res.status(200).json(c);
  await TierList.findOne({})
    .then((r) => {
      if (r.length === 0) return res
        .status(200)
        .json({ message: "Tierlist is empty." });
      nc.set("Tierlist", r, time);
      return res
        .status(200)
        .json(r);
    }).catch((err) => {
      return res
        .status(500)
        .json({ error: err.message });
    });
};

exports.create = async (req, res) => {
  await TierList.create({ image: req.body.image })
    .then((r) => {
      return res
        .status(200)
        .json({ success: "Tierlist is created.", message: r });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ error: err.message });
    });
};

exports.update = async (req, res) => {
  const { id, image } = req.body;
  await TierList.findOneAndUpdate({ _id: id }, image, { new: true })
    .then((r) => {
      return res
        .status(200)
        .json({ success: "Tierlist is updated.", message: r });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ error: err.message });
    });
};

exports.remove = async (req, res) => {
  const { id } = req.body;
  await TierList.findOneAndDelete({ _id: id })
    .then((r) => {
      return res
      .status(200)
      .json({ message: "Remove tierlist success.", data : r });
    })
    .catch((err) => {
      res
      .status(500)
      .json({ message: err.message });
    });
};