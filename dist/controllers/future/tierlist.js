let { TierList: e } = require('@models')
;(exports.getAll = async (s, t) => {
  try {
    let s = await e.findOne({})
    return s ? t.status(200).send(s) : t.json({ message: 'Tierlist is empty.' })
  } catch (r) {
    return t.json({ error: r.message })
  }
}),
  (exports.create = (s, t) => {
    try {
      let r = e.create({ image: s.body.image })
      return t.status(200).send(r)
    } catch (r) {
      return t.json({ error: r.message })
    }
  }),
  (exports.update = async (s, t) => {
    try {
      let r = s.body.id,
        a = s.body.image,
        n = await e.findOneAndUpdate({ _id: r }, a, { new: !0 })
      return n
        ? t.json({ message: 'Updated successfully.', data: n })
        : t.status(404).json({ message: 'Update failed' })
    } catch (r) {
      return t.json({ error: r.message })
    }
  })