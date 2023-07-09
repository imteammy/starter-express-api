const { Roons } = require("@models")

exports.getAll = async (req, res) => {
    try {
        const roons = await Roons.find({});
        if (roons.length === 0) {
            return res.json({ message: "All roons is empty." });
        }
        return res.send(roons);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.getID = async (req, res) => {
  const { id } = req.body;
    try {
        const roon = await Roons.findOne({ id:id});
        return res.json(roon);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const data = req.body;
        delete data.token;

        const filter = { _id: data.id };
        const update = { $set: data };
        const updateResult = await Roons.findOneAndUpdate(filter, update, {
            new: true,
        });

        if (!updateResult) {
            return res.status(404).json({ message: 'Roon not found.' });
        };

        return res.json({
            message: 'Roon updated successfully.',
            data: updateResult
        });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.remove = async (req, res) => {
  const { id } = req.body;
    try {
        await Roons.findOneAndDelete({ _id: id});
        return res.json("Delete Roon success");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.create = async (req, res) => {
    const d = req.body;
    delete d.token;
    try {
        const result = await Roons.create(d);
        return res.json({ success: "Add roon success", message: result });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};