let { LatensSkills: e } = require('@models')
;(exports.getAll = async (s, t) => {
  try {
    let s = await e.find({})
    return 0 === s.length
      ? t.json({ message: 'LatensSkills is empty.' })
      : t.send(s)
  } catch (a) {
    return t.status(400).send(a.message)
  }
}),
  (exports.getID = async (s, t) => {
    let { id: a } = s.body
    try {
      let s = await e.findOne({ _id: a })
      return t.json(s)
    } catch (n) {
      return t.status(400).send(n.message)
    }
  }),
  (exports.update = async (s, t) => {
    let a = s.body
    delete a.token
    try {
      let s = { _id: a.id },
        n = { $set: a },
        r = await e.findOneAndUpdate(s, n, { new: !0 })
      return r
        ? t.json({ success: 'Update LatensSkill success', message: r })
        : t.status(400).send('Update LatensSkill fail')
    } catch (n) {
      return t.status(400).send(n.message)
    }
  }),
  (exports['delete'] = async (s, t) => {
    let { id: a } = s.body
    try {
      return (
        await e.findOneAndDelete({ _id: a }),
        t.json('Delete LatensSkill success')
      )
    } catch (n) {
      return t.status(400).send(n.message)
    }
  }),
  (exports.create = async (s, t) => {
    let a = s.body
    try {
      let s = new e(a)
      return (
        await s.save(),
        t.json({ success: 'Create Latens Skill success', message: s })
      )
    } catch (n) {
      return t.status(400).send(n.message)
    }
  })
