let { LatensSkills: e } = require('@models'),
  { nc: s } = require('@config/node'),
  t = 300
;(exports.getAll = async (a, n) => {
  let r = s.get('Latens')
  if (r) return n.status(200).json(r)
  await e
    .find({})
    .then(e =>
      0 === e.length
        ? n.status(200).json({ message: 'LatensSkills is empty.' })
        : (s.set('Latens', e, t), n.send(e))
    )
    ['catch'](e => n.status(500).json({ message: 'Internal Server Error' }))
}),
  (exports.getID = async (a, n) => {
    let { id: r } = a.body,
      l = s.get(r)
    if (l) return n.status(200).json(l)
    await e
      .findOne({ _id: r })
      .then(e =>
        0 === e.length
          ? n.status(200).json({ message: 'LatensSkills is empty.' })
          : (s.set(r, e, t), n.send(e))
      )
      ['catch'](e => n.status(500).json({ message: 'Internal Server Error' }))
  }),
  (exports.create = async (s, t) => {
    let a = s.body
    delete a.token
    let n = new e(a)
    await n
      .save()
      .then(e =>
        t
          .status(200)
          .json({ success: 'Create Latens Skill success', message: e })
      )
      ['catch'](e => t.status(500).json({ error: e.message }))
  }),
  (exports.update = async (s, t) => {
    let a = s.body
    delete a.token
    let n = { _id: a.id },
      r = { $set: a }
    await e
      .findOneAndUpdate(n, r, { new: !0 })
      .then(e =>
        t
          .status(200)
          .json({ success: 'Update LatensSkill success', message: e })
      )
      ['catch'](e => t.status(500).json({ error: e.message }))
  }),
  (exports.remove = async (s, t) => {
    let { id: a } = s.body
    await e
      .findOneAndDelete({ _id: a })
      .then(e => t.status(200).json({ message: 'Delete LatensSkill success.' }))
      ['catch'](e => t.status(500).json({ message: e.message }))
  })
