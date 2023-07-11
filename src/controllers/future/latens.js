const { LatensSkills } = require("@models")
const { nc } = require("@config/node");
const time = 300;
exports.getAll = async (_, res) => {
    const c = nc.get("Latens");
    if (c) { return res.status(200).json(c); }
    await LatensSkills.find({})
        .then((r) => {
            if (r.length === 0) {
                return res
                    .status(200)
                    .json({ message: "Laten skill is empty." , data: r });
            };
            nc.set("Latens", r, time);
            return res.send(r);
        })
        .catch((error) => {
            return res
                .status(500)
                .json({ message: "Internal Server Error" });
        });
};

exports.getID = async (req, res) => {
    const { id } = req.body;
    const c = nc.get(id);
    if (c) return res.status(200).json(c);
    await LatensSkills.findOne({ _id: id })
        .then((r) => {
            if (r.length === 0) {
                return res
                    .status(200)
                    .json({ message: "Laten skill is empty.", data : r })
            }
            nc.set(id, r, time);
            return res.send(r);
        }).catch((err) => {
            return res
                .status(500)
                .json({ message: "Internal Server Error" });
        });
};

exports.create = async (req, res) => {
    const data = req.body;
    delete data.token;
    const d = new LatensSkills(data);
    await d.save()
        .then((r) => {
            return res
                .status(200)
                .json({ message: "Create laten skill success.", data: r });
        }).catch((err) => {
            return res
                .status(500)
                .json({ error: err.message });
        });
};

exports.update = async (req, res) => {
    const data = req.body;
    delete data.token;
    const id = { _id: data.id };
    const update = { $set: data };
    await LatensSkills.findOneAndUpdate(id, update, { new: true })
        .then((r) => {
            return res
                .status(200)
                .json({ message: "Update laten skill success.", data: r });
        }).catch((err) => {
            return res
                .status(500)
                .json({ error: err.message });
        });
};

exports.remove = async (req, res) => {
    const { id } = req.body;
    await LatensSkills.findOneAndDelete({ _id: id })
        .then((r) => {
            return res
                .status(200)
                .json({ message: "Delete laten skill success." });
        }).catch((err) => {
            return res
                .status(500)
                .json({ message: err.message });
        });
};

