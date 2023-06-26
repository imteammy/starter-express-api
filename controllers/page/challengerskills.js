const { ChallengerSkills } = require('../../models')

exports.getAll = async (req, res, next) => {
  try {
    const r = await ChallengerSkills.find({})
    if (r.length === 0) {
      return res
        .status(404)
        .send({ data: { message: 'ChallengerSkills is empty' } })
    }
    return res.json(r)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

exports.getID = async (req, res) => {
  try {
    const r = await ChallengerSkills.findOne({ _id: req.body.id })
    return res.json(r)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

exports.update = async (req, res) => {
  try {
    const data = req.body
    delete data.token

    const filter = { _id: data.id }
    const update = { $set: data }
    const r = await ChallengerSkills.findOneAndUpdate({ new: true })
    if (!r) {
      return res
        .status(404)
        .send({ data: { message: 'ChallengerSkills not found' } })
    }
    return res.json(r)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

exports.delete = async (req, res) => {
  try {
    const r = await ChallengerSkills.findOneAndDelete({ _id: req.body.id })
    if(!r){
      return res.json({message : 'Challenger not found!'})
    }
    return res.json({message : 'Delete ChallengerSkill success' , data : {r}})
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

exports.add = async (req, res) => {
  const d = req.body;
  delete d.token;
  try {
    const r = await ChallengerSkills.create(d);
    if(!r) {
      return res.json({ message : 'CannotAdd  ChallengerSkills' })
    }
    return res.json({ success: 'Add skill success', message: r })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}
