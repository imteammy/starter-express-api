// controller.js
const GetAll = async (req, res) => {
  const { models } = req.params;
  let Model = await getModel(models);
  const c = _nodeNC.get(models.toString());
  if (c) return res.json(c);
  try {
    const cachedData = _nodeNC.get(models.toString());
    if (cachedData) {
      return res.json(cachedData);
    }

    const data = await Model.find({});
    if (!data || data.length === 0) {
      return res.status(200).json({ message: `${models} is empty.` });
    }

    _nodeNC.set(models.toString(), data, timeOut);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: "Invalit URL." });
  }
};

const GetID = async (req, res) => {
  const models = req.params.models;
  let Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: 'Invalid request parameters' });
  }
  const { id } = req.body;
  const c = _nodeNC.get(id);
  if (c) return res.json(c);
  await Model.findOne({ _id: id })
    .then((r) => {
      if (!r || r.lenght === 0) {
        return res.json({ message: `${models} not found!` });
      }
      _nodeNC.set(id, r);
      return res.status(200).json(r);
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

const Create = async (req, res) => {
  const models = req.params.models;
  let Model = await getModel(models);
  const data = req.body;
  delete data.token;
  await Model.create(data)
    .then((r) => {
      return res
        .status(200)
        .json({ message: `Create ${models} success.`, data: r });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

const CreateMany = async (req, res) => {
  const models = req.params.models;
  let Model = await getModel(models);
  const d = req.body;
  delete d.token;
  const result = d.map((obj) => {
    const { token, ...r } = obj;
    return r;
  });
  await Model.insertMany(result)
    .then((r) => {
      return res
        .status(200)
        .json({ message: `Create many ${models} successfully.`, data: r });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

const Update = async (req, res) => {
  const models = req.params.models;
  let Model = await getModel(models);
  const data = req.body;
  delete data.token;
  const id = { _id: data.id };
  const update = Object.assign({}, data);
  await Model.findOneAndUpdate(id, update, { new: true })
    .then((r) => {
      if (!r) {
        return res.send(`${models} not found.`);
      }
      _nodeNC.set(id, update, timeOut);
      return res.status(200).json({
        message: `${models} updated success.`,
        data: r,
      });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

const Remove = async (req, res) => {
  const models = req.params.models;
  let Model = await getModel(models);
  const { id } = req.body;
  await Model.findOneAndDelete({ _id: id })
    .then((r) => {
      if (r.legth === 0) {
        return res.json({ message: `${models} not found for delete.` });
      }
      return res.status(200).json({ message: `Delete ${models} success.`, data: r });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};
