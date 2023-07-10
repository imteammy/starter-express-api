let { Roons: s } = require('@models'),
  { nc: e } = require('@config/node'),
  t = 300
;(exports.getAll = async (n, o) => {
  let a = e.get('Roons')
  if (a) return o.status(200).json(a)
  await s
    .find()
    .then(s =>
      s
        ? (e.set('Roons', s, t), o.status(200).json(s))
        : o.status(200).json({ message: 'All roons is empty.' })
    )
    ['catch'](s => o.status(500).send({ error: s.message }))
}),
  (exports.getID = async (n, o) => {
    let { id: a } = n.body,
      d = e.get('Roons')
    if (d) return o.json(d)
    await s
      .findOne({ id: a })
      .then(s =>
        0 === s.lenght
          ? o.status(400).json({ message: 'Roons not found!' })
          : (e.set('Roons', s, t), o.status(200).json(s))
      )
      ['catch'](s => o.status(500).json(s.message))
  }),
  (exports.update = async (e, t) => {
    let n = e.body
    delete n.token
    let o = { _id: n.id },
      a = { $set: n }
    await s
      .findOneAndUpdate(o, a, { new: !0 })
      .then(s =>
        0 === s.lenght
          ? t.status(400).json({ message: 'Roon not found.' })
          : t
              .status(200)
              .json({ message: 'Roon updated successfully.', data: s })
      )
      ['catch'](s => t.status(500).json({ message: s.message }))
  }),
  (exports.remove = async (e, t) => {
    let { id: n } = e.body
    await s
      .findOneAndDelete({ _id: n })
      .then(s => t.status(200).json('Delete Roon success'))
      ['catch'](s => t.status(500).send(error.message))
  }),
  (exports.create = async (e, t) => {
    let n = e.body
    delete n.token,
      await s
        .create(n)
        .then(s =>
          t.status(200).json({ success: 'Add roon success', message: s })
        )
        ['catch'](s => t.status(500).send(s.message))
  })
