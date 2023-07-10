let { ComboHero: e } = require('@models'),
  { nc: s } = require('@config/node'),
  t = 300
;(exports.getAll = async (t, a, o) => {
  let n = s.get('AllCombo')
  if (n) return a.json(n)
  await e
    .find({})
    .then(e => (0 === e.length ? { message: 'Heroes is empty.' } : a.json(e)))
    ['catch'](e => a.json({ message: e.message }))
}),
  (exports.getID = async (s, t, a) => {
    let { id: o } = s.body
    await e
      .find({ _id: o })
      .then(e => (0 === e.length ? { message: 'Combo not found!' } : t.json(e)))
      ['catch'](e => t.send(error.message))
  }),
  (exports.create = async (s, t) => {
    let a = s.body
    delete a.token,
      await e
        .create(a)
        .then(e => t.json({ message: 'Created Hero combo success.', data: e }))
        ['catch'](e => t.status(400).json({ message: error.message }))
  }),
  (exports.update = async (s, t, a) => {
    let o = s.body
    delete o.token
    let n = { _id: o.id },
      d = Object.assign({}, o)
    await e
      .findOneAndUpdate(n, d, { new: !0 })
      .then(e =>
        0 === e.length
          ? t.status(404).json({ message: 'Hero not found.' })
          : t
              .status(200)
              .json({ message: 'Hero updated successfully.', data: e })
      )
      ['catch'](e => t.status(400).json({ message: error.message }))
  }),
  (exports.remove = async (s, t) => {
    let { id: a } = s.body
    await e
      .findOneAndDelete({ _id: a })
      .then(e =>
        0 === e.length
          ? t.status(404).json({ message: 'Hero not found for delete.' })
          : t.json({ message: 'Hero deleted successfully.', data: e })
      )
      ['catch'](e => t.status(500).json({ message: e.message }))
  })
