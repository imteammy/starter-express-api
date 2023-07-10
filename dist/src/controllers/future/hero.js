let { Hero: e } = require('@models'),
  { nc: s } = require('@config/node'),
  t = 300
;(exports.getAll = async (a, n) => {
  let o = s.get('Heroes')
  if (o) return n.json(o)
  await e
    .find({})
    .then(e =>
      hero
        ? (s.set('Heroes', hero, t), n.status(200).json(hero))
        : n.status(200).json({ message: 'Heroes is empty.' })
    )
    ['catch'](e => e.message)
}),
  (exports.getID = async (t, a) => {
    let { id: n } = t.body,
      o = s.get(n)
    if (o) return a.json(o)
    await e
      .findOne({ _id: n })
      .then(e =>
        hero ? (s.set(n, e), a.json(e)) : a.json({ message: 'Hero not found!' })
      )
      ['catch'](e => a.status(500).json({ message: e.message }))
  }),
  (exports.create = async (s, t) => {
    let a = s.body
    delete a.token,
      await e
        .create(a)
        .then(e =>
          t.status(200).json({ message: 'Create hero success.', data: e })
        )
        ['catch'](e => t.status(500).json({ message: e.message }))
  }),
  (exports.createMany = async (s, t) => {
    let a = s.body
    delete a.token
    let n = a.map(e => {
      let { token: s, ...t } = e
      return t
    })
    await e
      .insertMany(n)
      .then(e =>
        t
          .status(200)
          .json({ message: 'Create many hero successfully.', data: e })
      )
      ['catch'](e => t.status(500).json({ message: e.message }))
  }),
  (exports.update = async (s, t) => {
    let a = s.body
    delete a.token
    let n = { _id: a.id },
      o = Object.assign({}, a)
    await e
      .findOneAndUpdate(n, o, { new: !0 })
      .then(e =>
        e
          ? t.status(200).json({ message: 'Hero updated success.', data: e })
          : t.send('Hero not found.')
      )
      ['catch'](e => t.status(400).json({ message: e.message }))
  }),
  (exports.remove = async (s, t) => {
    let { id: a } = s.body
    await e
      .findOneAndDelete({ _id: a })
      .then(e =>
        e
          ? t.status(200).json({ message: 'Delete hero success.', data: e })
          : t.json({ message: 'Hero not found for delete.' })
      )
      ['catch'](e => t.status(500).json({ message: e.message }))
  })
