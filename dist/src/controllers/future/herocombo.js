let { ComboHero: e } = require('@models')
;(exports.getAll = async (s, t, a) => {
  try {
    let s = await e.find({})
    return 0 === s.length ? { message: 'Heroes is empty.' } : s
  } catch (n) {
    return n.message
  }
}),
  (exports.getByID = async (s, t, a) => {
    let n = s.body
    try {
      let s = await e.find({ _id: n })
      return s ? t.json(s) : { message: 'Combo not found!' }
    } catch (r) {
      return t.send(r.message)
    }
  }),
  (exports.create = async (s, t, a) => {
    let n = s.body
    delete n.token
    try {
      let s = await e.create(n)
      return t.json({ message: 'Created Hero combo success.', data: s })
    } catch (r) {
      return t.status(400).json({ message: r.message })
    }
  }),
  (exports.update = async (s, t, a) => {
    let n = s.body
    delete n.token
    try {
      let s = { _id: n.id },
        a = Object.assign({}, n),
        r = await e.findOneAndUpdate(s, a, { new: !0 })
      return r
        ? t.json({ message: 'Hero updated successfully.', data: r })
        : t.status(404).json({ message: 'Hero not found.' })
    } catch (r) {
      return t.status(400).json({ message: r.message })
    }
  }),
  (exports.remove = async (s, t, a) => {
    let { id: n } = s.body
    try {
      let s = await e.findOneAndDelete({ _id: n })
      return s
        ? t.json({ message: 'Hero deleted successfully.', data: s })
        : t.status(404).json({ message: 'Hero not found.' })
    } catch (r) {
      return t.status(400).json({ message: r.message })
    }
  })
