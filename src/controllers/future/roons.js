const { Roons } = require("@models")
const { nc } = require("@config/node");
const time = 300;
exports.getAll = async (_, res) => {
    const c = nc.get("Roons");
    if (c) { return res.status(200).json(c); };
    await Roons.find().then((r) => {
        if (!r) return res.json({ message: "All roons is empty." });
        nc.set("Roons", r, time);
        return res.json(r);
    }).catch((err) => {
        return res.send(r);
    });
};

exports.getID = async (req, res) => {
    const { id } = req.body;
    const c = nc.get("Roons");
    if (c) return res.json(c);
    await Roons.findOne({ id: id }).then((r) => {
        if (r.lenght === 0) { return res.status(400).json({ message: "Roons not found!" }) };
        nc.set("Roons", r, time);
        return res.json(r);
    }).catch((err) => {
        return res.send(err.message);
    });;
};

exports.update = async (req, res) => {
    const data = req.body;
    delete data.token;
    const filter = { _id: data.id };
    const update = { $set: data };
    const r = await Roons.findOneAndUpdate(filter, update, {
        new: true,
    }).then((r) => {
        if (r.lenght === 0) return res.status(404).json({ message: 'Roon not found.' });
    }).catch((err) => {
        return res.json({ message: 'Roon updated successfully.', data: r });
    });
};

exports.remove = async (req, res) => {
    const { id } = req.body;
    await Roons.findOneAndDelete({ _id: id }).then((r) => {
        return res.json("Delete Roon success");
    }).catch((err) => {
        return res.status(400).send(error.message);
    });
};

exports.create = async (req, res) => {
    const d = req.body;
    delete d.token;
    await Roons.create(d).then((r) => {
        return res.json({ success: "Add roon success", message: r });
    }).catch((err) => {
        return res.status(400).send(err.message);
    });

};