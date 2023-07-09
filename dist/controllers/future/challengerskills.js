let { ChallengerSkills: e } = require('@models')
;(exports.getAll = async (s, t, n) => {
  try {
    let s = await e.find({})
    return 0 === s.length
      ? t.json({ message: 'ChallengerSkills is empty' })
      : t.json(s)
  } catch (a) {
    return t.send(a.message)
  }
}),
  (exports.getID = async (s, t) => {
    let n = s.body
    try {
      let s = await e.findOne({ _id: n })
      return t.json(s)
    } catch (a) {
      return t.send(a.message)
    }
  }),
  (exports.update = async (s, t) => {
    let n = s.body
    delete n.token
    try {
      let s = { _id: n.id },
        a = { $set: n },
        l = await e.findOneAndUpdate(s, a, { new: !0 })
      return l ? t.json(l) : t.json({ message: 'ChallengerSkills not found' })
    } catch (a) {
      return t.json(a.message)
    }
  }),
  (exports['delete'] = async (s, t) => {
    let { id: n } = s.body
    try {
      let s = await e.findOneAndDelete({ _id: n })
      return s
        ? t.json({ message: 'Delete ChallengerSkill success', data: s })
        : t.json({ message: 'Challenger not found!' })
    } catch (a) {
      return t.json(a.message)
    }
  }),
  (exports.create = async (s, t) => {
    let n = s.body
    delete n.token
    try {
      let s = await e.create(n)
      return s
        ? t.json({ success: 'Add skill success', message: s })
        : t.json({ message: 'CannotAdd  ChallengerSkills', data: s })
    } catch (a) {
      return t.status(400).send(a.message)
    }
  })
