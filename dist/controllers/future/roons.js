let { Roons: e } = require('@models')
;(exports.getAll = async (t, s) => {
  try {
    let t = await e.find({})
    return 0 === t.length
      ? s.json({ message: 'All roons is empty.' })
      : s.send(t)
  } catch (n) {
    return s.status(400).send(n.message)
  }
}),
  (exports.getID = async (t, s) => {
    let { id: n } = t.body
    try {
      let t = await e.findOne({ id: n })
      return s.json(t)
    } catch (a) {
      return s.status(400).send(a.message)
    }
  }),
  (exports.update = async (t, s) => {
    try {
      let n = t.body
      delete n.token
      let a = { _id: n.id },
        r = { $set: n },
        d = await e.findOneAndUpdate(a, r, { new: !0 })
      return d
        ? s.json({ message: 'Roon updated successfully.', data: d })
        : s.status(404).json({ message: 'Roon not found.' })
    } catch (n) {
      return s.status(400).send(n.message)
    }
  }),
  (exports['delete'] = async (t, s) => {
    let { id: n } = t.body
    try {
      return await e.findOneAndDelete({ _id: n }), s.json('Delete Roon success')
    } catch (a) {
      return s.status(400).send(a.message)
    }
  }),
  (exports.create = async (t, s) => {
    let n = t.body
    delete n.token
    try {
      let t = await e.create(n)
      return s.json({ success: 'Add roon success', message: t })
    } catch (a) {
      return s.status(400).send(a.message)
    }
  })
