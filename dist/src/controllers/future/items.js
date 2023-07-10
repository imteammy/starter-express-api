let { Items: e } = require('@models'),
  { nc: s } = require('@config/node'),
  t = 300
;(exports.getAll = async (n, a) => {
  let o = s.get('Items')
  if (o) return a.send(o)
  await e
    .find({})
    .then(e =>
      0 === e.length
        ? a.json({ message: 'All items is empty.' })
        : (s.set('Items', e, t), a.send(e))
    )
    ['catch'](e => a.status(500).send(error.message))
}),
  (exports.getID = async (n, a) => {
    let { id: o } = n.body,
      d = s.get(o)
    if (d) return a.json(d)
    await e
      .findOne({ _id: o })
      .then(e =>
        0 === e.length
          ? a.json({ message: 'Item not found by ID : ' + o })
          : (s.set(o, e, t), a.json(e))
      )
      ['catch'](e => a.status(500).send(error.message))
  }),
  (exports.update = async (s, t) => {
    let n = s.body
    delete n.token
    let a = { _id: n.id },
      o = { $set: n }
    await e
      .findOneAndUpdate(a, o, { new: !0 })
      .then(e =>
        0 === e.length
          ? t.status(404).json({ message: 'Item not found.' })
          : t
              .status(200)
              .json({ success: 'Item updated successfully.', message: e })
      )
      ['catch'](e => t.status(400).send(error.message))
  }),
  (exports.remove = async (s, t) => {
    let { id: n } = s.body
    await e
      .findOneAndDelete({ _id: n })
      .then(e =>
        0 === e.length
          ? t.json({ message: 'Item not found.' })
          : t.status(200).json({ message: 'Delete item success.', data: e })
      )
      ['catch'](e => t.status(500).send(error.message))
  }),
  (exports.create = async (s, t) => {
    let n = s.body
    delete n.token
    let a = new e(n)
    await a
      .save()
      .then(e =>
        t.status(200).json({ message: 'Create item success.', data: e })
      )
      ['catch'](e => t.status(500).json({ error: e.message }))
  })
