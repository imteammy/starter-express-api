const getModel = require('./getmodel')
const NodeCache = require("../config/node");
const timeOut = 300;

exports.GetAll = async (req, res) => {
    const { models } = req.params || req.query;
    let Models = await getModel(models);

    if (!Models) {
        return res.status(404).json({ message: "Invalid request parameters" });
    }

    try {
        // If caching is used, uncomment the following lines
        const c = NodeCache.get(models)
        if (c) return res.status(200).json({ data: JSON.parse(c) });

        const result = await Models.find({});
        if (result.length === 0) {
            return res.status(404).json({ message: `${models} is empty!` });
        }

        // If caching is used, uncomment the following line
        NodeCache.set(models, JSON.stringify(result), timeOut);

        return res.status(200).json(result);
    } catch (err) {
        console.log("Error setting cache:", err);
        console.error(err.stack);
        return res.status(500).json({ message: err.message });
    }
};


exports.GetID = async (req, res) => {
    const { models, id } = req.params || req.query || req.body;

    try {
        let Model = await getModel(models);
        if (!Model) {
            return res.status(404).json({ message: "Invalid request parameters" });
        }
        const c = NodeCache.get(id);
        if (c) return res.json(JSON.parse(c));
        const result = await Model.findOne({ _id: id });
        if (!result) {
            return res.json({ message: `${models} not found!` });
        }

        NodeCache.set(id, JSON.stringify(result), timeOut);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            code: 500,
            message: error.message
        });
    }

};

exports.Create = async (req, res) => {
    const models = req.params.models;
    try {
        const data = req.body;
        delete data.token;
        let Model = await getModel(models);
        if (!Model) {
            return res.status(404).json({ message: "Invalid request parameters" });
        }
        const r = await Model.create(data)
        return res
            .status(200)
            .json({ message: `Create ${models} success.`, data: r });

    } catch (error) {
        return res.status(500).json({ message: err.message });
    }
};

exports.CreateMany = async (req, res) => {
    try {
        const models = req.params.models;

        let Model = await getModel(models);
        if (!Model) {
            return res.status(404).json({ message: "Invalid request parameters" });
        }

        const d = req.body;
        delete d.token;

        const result = d.map((obj) => {
            const { token, ...r } = obj;
            return r;
        });
        const r = await Model.insertMany(result)
        return res
            .status(200)
            .json({ message: `Create many ${models} successfully.`, data: r });

    } catch (error) {
        return res.status(500).json({ message: err.message });
    }
};

exports.Update = async (req, res) => {
    const models = req.params.models;
    const data = req.body;
    delete data.token;

    const id = { _id: data.id };
    const update = Object.assign({}, data);

    const c = NodeCache.get(id);
    if (c) return res.json(JSON.parse(c));
    try {
        let Model = await getModel(models);
        if (!Model) {
            return res.status(404).json({ message: "Invalid request parameters" });
        }
        const r = await Model.findOneAndUpdate(id, update, { new: true });
        if (!r) {
            const message = { message: `${models} not found for update.` };
            res.status(404).json({ message: message });
        }
        NodeCache.set(id, JSON.stringify(r), timeOut);
        return res.status(200).json({
            message: `${models} updated success.`,
            data: r,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.Remove = async (req, res) => {
    const models = req.params.models;
    let Model;
    Model = await getModel(models);
    if (!Model) {
        return res.status(404).json({ message: "Invalid request parameters" });
    }

    const { id } = req.body;
    const c = NodeCache.get(id);
    if (c) return res.json(c);

    try {
        const r = await Model.findOneAndDelete({ _id: id }, { new: true });
        if (!r) {
            const message = { message: `${models} not found for delete.` };

            return res.status(200).json(message);
        }
        NodeCache.set(id, message, timeOut);
        return res
            .status(200)
            .json({ message: `Delete ${models} success.`, data: r });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

exports.Clear = async (req, res) => {
    NodeCache.flushAll();
    return res.status(200).json({ message: "Cache cleared" });
}