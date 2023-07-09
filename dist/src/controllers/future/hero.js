let { Hero: e } = require('@models')
;(exports.getAllHeroes = async (s, t, a) => {
  try {
    let s = await e.find({})
    return 0 === s.length
      ? t.json({ message: 'Heroes is empty.' })
      : t.status(200).json(s)
  } catch (n) {
    return n.message
  }
}),
  (exports.findhero = async (s, t, a) => {
    let n = s.body.id
    if (!n || '' == n) return t.send({ message: 'ID is required' })
    try {
      let s = await e.findOne({ _id: n })
      return s ? t.send(s) : t.json({ message: 'Hero not found!' })
    } catch (r) {
      return t.send(r.message)
    }
  }),
  (exports.create = async (s, t, a) => {
    let n = s.body
    delete n.token
    try {
      let s = await e.create(n)
      return t
        .status(200)
        .json({ message: 'Created new hero successfully.', data: s })
    } catch (r) {
      return t.json({ message: r.message })
    }
  }),
  (exports.createMany = async (s, t, a) => {
    let n = s.body
    delete n.token
    let r = n.map(e => {
      let { token: s, ...t } = e
      return t
    })
    try {
      let s = await e.insertMany(r)
      return t
        .status(200)
        .json({ message: 'Created new hero successfully.', data: s })
    } catch (o) {
      return t.json({ message: o.message })
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
        ? t.status(200).json({ message: 'Hero updated successfully.', data: r })
        : t.send('Hero not found.')
    } catch (r) {
      return t.status(400).json({ message: r.message })
    }
  }),
  (exports.remove = async (s, t, a) => {
    let { id: n } = s.body
    try {
      let s = await e.findOneAndDelete({ _id: n })
      return s
        ? t.status(200).json({ message: 'Hero deleted successfully.', data: s })
        : t.json({ message: 'Find Hero by ID not found. Cannot delete' })
    } catch (r) {
      return t.json({ message: r.message })
    }
  })
