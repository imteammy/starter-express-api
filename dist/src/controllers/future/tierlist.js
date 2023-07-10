let { TierList: e } = require('@models'),
  { nc: s } = require('@config/node'),
  t = 300
;(exports.getAll = async (a, i) => {
  let n = s.get('Tierlist')
  if (n) return i.status(200).json(n)
  await e
    .findOne({})
    .then(e =>
      0 === e.length
        ? i.status(200).json({ message: 'Tierlist is empty.' })
        : (s.set('Tierlist', e, t), i.status(200).json(e))
    )
    ['catch'](e => i.status(500).json({ error: e.message }))
}),
  (exports.create = async (s, t) => {
    await e
      .create({ image: s.body.image })
      .then(e =>
        t.status(200).json({ success: 'Tierlist is created.', message: e })
      )
      ['catch'](e => t.status(500).json({ error: e.message }))
  }),
  (exports.update = async (s, t) => {
    let { id: a, image: i } = s.body
    await e
      .findOneAndUpdate({ _id: a }, i, { new: !0 })
      .then(e =>
        t.status(200).json({ success: 'Tierlist is updated.', message: e })
      )
      ['catch'](e => t.status(500).json({ error: e.message }))
  }),
  (exports.remove = async (s, t) => {
    let { id: a } = s.body
    await e
      .findOneAndDelete({ _id: a })
      .then(e =>
        t.status(200).json({ message: 'Remove tierlist success.', data: e })
      )
      ['catch'](e => {
        t.status(500).json({ message: e.message })
      })
  })
