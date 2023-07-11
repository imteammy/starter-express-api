// controller.js
const GetAll = async (req, res) => {
  const models = req.params.models;
  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }
  const c = _nodeNC.get(models);
  if (c) {
    return res.status(200).json(c);
  }
  await Model.find({})
    .then((r) => {
      if (!r || r.lenght === undefined) {
        return res.status(200).json({ message: `${models} is empty.` });
      }
      _nodeNC.set(models, r, timeOut);
      return res.status(200).json(r);
    })
    .catch((err) => {
      return res.status(500).json({ message: "Invalid request parameters" });
    });
};

const GetID = async (req, res) => {
  const models = req.params.models;
  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }

  const { id } = req.body;
  const c = _nodeNC.get(id);
  if (c) return res.json(c);

  await Model.findOne({ _id: id })
    .then((r) => {
      if (!r || r.lenght === undefined) {
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
  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }

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

  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }

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
  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }

  const data = req.body;
  delete data.token;

  const id = { _id: data.id };
  const update = Object.assign({}, data);

  const c = _nodeNC.get(id);
  if (c) return res.json(c);

  await Model.findOneAndUpdate(id, update, { new: true })
    .then((r) => {
      if (!r) {
        const message = { message: `${models} not found for update.` };
        _nodeNC.set(id, message, timeOut);
        return res.status(200).json(message);
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
  let Model;
  Model = await getModel(models);
  if (!Model) {
    return res.status(404).json({ message: "Invalid request parameters" });
  }

  const { id } = req.body;
  const c = _nodeNC.get(id);
  if (c) return res.json(c);

  await Model.findOneAndDelete({ _id: id })
    .then((r) => {
      if (!r || r === null) {
        const message = { message: `${models} not found for delete.` };
        _nodeNC.set(id, message, timeOut);
        return res.status(200).json(message);
      }
      return res
        .status(200)
        .json({ message: `Delete ${models} success.`, data: r });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};
