let { Items: e } = require('@models')
;(exports.getAllItems = async (s, t) => {
  try {
    let s = await e.find({})
    return 0 === s.length
      ? t.json({ message: 'All items is empty.' })
      : t.send(s)
  } catch (n) {
    return t.status(400).send(n.message)
  }
}),
  (exports.getByID = async (s, t) => {
    let { id: n } = s.body
    try {
      let s = await e.findOne({ _id: n })
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
        ? t.json({ success: 'Item updated successfully.', message: d })
        : t.status(404).json({ message: 'Item not found.' })
    } catch (n) {
      return t.status(400).send(n.message)
    }
  }),
  (exports.remove = async (s, t) => {
    let { id: n } = s.body
    try {
      return null === (await e.findOneAndDelete({ _id: n }))
        ? t.json({ message: 'Item not found.' })
        : t.json({ message: 'Delete Item success' })
    } catch (a) {
      return t.status(400).send(a.message)
    }
  }),
  (exports.create = async (s, t) => {
    let n = s.body
    delete n.token
    try {
      let s = new e(n)
      return await s.save(), t.json({ success: 'Add item success', message: s })
    } catch (a) {
      return t.status(400).send(a.message)
    }
  })
