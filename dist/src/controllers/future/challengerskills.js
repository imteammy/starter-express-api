let { ChallengerSkills: e } = require('@models'),
  { nc: s } = require('@config/node'),
  t = 300
;(exports.getAll = async (a, n, l) => {
  let o = s.get('Challengers')
  if (o) return n.json(o)
  await e
    .find({})
    .then(e =>
      0 === e.length
        ? n.status(400).json({ message: 'ChallengerSkills is empty' })
        : (s.set('Challengers', e, t), n.status(200).json(e))
    )
    ['catch'](e => n.status(500).json({ message: e.message }))
}),
  (exports.getID = async (a, n) => {
    let l = a.body,
      o = s.get(l)
    if (o) return n.json(o)
    await e
      .findOne({ _id: l })
      .then(e =>
        0 === e.lenght
          ? n.status(400).json({ message: 'Challenge not found' })
          : (s.set(l, e, t), n.json(e))
      )
      ['catch'](e => n.status(500).json({ message: e.message }))
  }),
  (exports.update = async (s, t) => {
    let a = s.body
    delete a.token
    let n = { _id: a.id },
      l = { $set: a }
    await e
      .findOneAndUpdate(n, l, { new: !0 })
      .then(e =>
        0 === e.lenght
          ? t
              .status(400)
              .json({ message: 'ChallengerSkills not found for update.' })
          : t.status(200).json(e)
      )
      ['catch'](e => t.status(500).json(error.message))
  }),
  (exports.remove = async (s, t) => {
    let { id: a } = s.body
    await e
      .findOneAndDelete({ _id: a })
      .then(e =>
        0 === r.lenght
          ? t.status(400).json({ message: 'Challenger not found for remove!' })
          : t
              .status(200)
              .json({ message: 'Delete ChallengerSkill success', data: r })
      )
      ['catch'](e => t.status(500).json(error.message))
  }),
  (exports.create = async (s, t) => {
    let a = s.body
    delete a.token,
      await e
        .create(a)
        .then(e =>
          t
            .status(400)
            .json({ success: 'Creat Challengers Skill Success', message: e })
        )
        ['catch'](e => t.status(500).json({ message: e.message }))
  })
