const { Items } = require("@models");
const { nc } = require("@config/node");
const time = 300;
exports.getAll = async (req, res) => {
  const c = nc.get("Items");
  if (c) return res.send(c);
  await Items.find({})
    .then((r) => {
      if (r.length === 0) return res.json({ message: "All items is empty." });
      nc.set("Items", r, time);
      return res.send(r);
    }).catch((err) => {
      return res.status(500).send(error.message);
    });
};

exports.getID = async (req, res) => {
  const { id } = req.body;
  const c = nc.get(id);
  if (c) { return res.json(c); };
  await Items.findOne({ _id: id }).then((r) => {
    if (r.length === 0) { return res.json({ message: 'Item not found by ID : ' + id }); }
    nc.set(id, r, time);
    return res.json(r);
  }).catch((err) => {
    return res.status(500).send(error.message);
  });
};

exports.update = async (req, res) => {
  const data = req.body;
  delete data.token;
  const id = { _id: data.id };
  const update = { $set: data };
  await Items.findOneAndUpdate(id, update, { new: true })
    .then((r) => {
      if (r.length === 0) {
        return res
          .status(404)
          .json({ message: "Item not found." });
      };
      return res
        .status(200)
        .json({ success: "Item updated successfully.", message: r, });
    }).catch((err) => {
      return res.status(400).send(error.message);
    });

};

exports.remove = async (req, res) => {
  const { id } = req.body;
  await Items.findOneAndDelete({ _id: id }).then((r) => {
    if (r.length === 0) { return res.json({ message: "Item not found." }); }
    return res.status(200).json({ message: "Delete item success.", data: r });
  }).catch((err) => {
    return res.status(500).send(error.message);
  });
};

exports.create = async (req, res) => {
  const data = req.body;
  delete data.token;
  const item = new Items(data);
  await item.save()
    .then((r) => {
      return res
        .status(200)
        .json({ message: "Create item success.", data: r });
    }).catch((err) => {
      return res
        .status(500)
        .json({ error: err.message });
    });
};
