let { Roons: e } = require('@models')
;(exports.getAll = async (s, t) => {
  try {
    let s = await e.find({})
    return 0 === s.length
      ? t.json({ message: 'All roons is empty.' })
      : t.send(s)
  } catch (n) {
    return t.status(400).send(n.message)
  }
}),
  (exports.getID = async (s, t) => {
    let { id: n } = s.body
    try {
      let s = await e.findOne({ id: n })
      return t.json(s)
    } catch (a) {
      return t.status(400).send(a.message)
    }
  }),
  (exports.update = async (s, t) => {
    try {
      let n = s.body
      delete n.token
      let a = { _id: n.id },
        r = { $set: n },
        d = await e.findOneAndUpdate(a, r, { new: !0 })
      return d
        ? t.json({ message: 'Roon updated successfully.', data: d })
        : t.status(404).json({ message: 'Roon not found.' })
    } catch (n) {
      return t.status(400).send(n.message)
    }
  }),
  (exports.remove = async (s, t) => {
    let { id: n } = s.body
    try {
      return await e.findOneAndDelete({ _id: n }), t.json('Delete Roon success')
    } catch (a) {
      return t.status(400).send(a.message)
    }
  }),
  (exports.create = async (s, t) => {
    let n = s.body
    delete n.token
    try {
      let s = await e.create(n)
      return t.json({ success: 'Add roon success', message: s })
    } catch (a) {
      return t.status(400).send(a.message)
    }
  })
