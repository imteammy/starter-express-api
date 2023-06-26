const { Items } = require('../../models');

exports.getAllItems = async (req, res) => {
    try {
        const items = await Items.find({});

        if (items.length === 0) {
            return res.json({ message: "All items is empty." });
        }

        return res.send(items);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.getByID = async (req, res) => {
    try {
        const item = await Items.findOne({ _id: req.body.id });
        return res.json(item);
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
        const updateResult = await Items.findOneAndUpdate(filter, update, {
            new: true,
        });

        if (!updateResult) {
            return res.status(404).json({ message: "Item not found." });
        }
        return res.json({
            message: "Item updated successfully.",
            data: updateResult,
        });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await Items.findOneAndDelete({ name: req.body.name });
        return res.json("Delete Item success");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.add = async (req, res) => {
    const data = req.body;
    delete data.token
    try {
        const item = new Items(data);
        await item.save();
        return res.json({ success: "Add item success", message: item });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};