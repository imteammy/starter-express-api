let e = e => require(e),
  s = e('express'),
  t = e('mongoose'),
  a = e('node-cache'),
  o = e('cors'),
  n = s(),
  r = new a(),
  m = (n.use(o()), n.use(s.json()), n.use(s.urlencoded({ extended: !0 })), 3e3),
  l = m || 4e3,
  i = 300,
  d = 'mongodb+srv://peerawat:YDCOyOKDb1LEyUV8@nodedev.fgnykzv.mongodb.net/ROV',
  c = { type: String, default: 'null' },
  u = async (e, s, t) => {
    if (
      ((e = e.body.token) || s.status(401).json({ error: 'Token is required' }),
      '12345' !== e)
    )
      return s.status(401).json({ error: 'Invalid token!' })
    t()
  },
  g = async () => {
    await t
      .connect(d, {
        useNewUrlParser: !0,
        useUnifiedTopology: !0,
        connectTimeoutMS: 3e4
      })
      .then(() => {
        console.log('> MongoDB connected')
      })
      ['catch'](e => {
        console.error(e.message)
      })
  },
  f =
    (g(),
    (e, s) => {
      r.flushAll(), s.status(200).json({ message: 'Cleared!' })
    }),
  h = { name: c, image: c, effect: c, cooldown: c },
  w = { name: c, image: c, price: c },
  p = { name: c, image: c, total: c },
  j = { name: c, image: c, effect: c },
  v = { name: c, image: c },
  y = new t.Schema({
    name: c,
    story: c,
    image: c,
    role: { main: c, sub: c },
    passiveSkill: h,
    firstSkill: h,
    secondSkill: h,
    ultimateSkill: h,
    items: { one: w, two: w, three: w, four: w, five: w, six: w },
    roons: { one: p, two: p, three: p },
    challengerSkills: { name: c, image: c, effect: c },
    LatensSkills: {
      one: { one: j, two: j, three: j },
      two: { one: j, two: j },
      three: { one: j, two: j }
    },
    comboHero: { one: v, two: v, three: v, four: v, five: v }
  }),
  b = { name: c, image: c },
  S = { one: b, two: b, three: b, four: b, five: b },
  k = new t.Schema({
    comboName: c,
    comboImage: c,
    heroCombo: S,
    comboLost: S,
    itemsSolution: S,
    comboWin: S
  }),
  I = { name: c, image: c },
  q = new t.Schema({
    teamName: c,
    teamImage: c,
    team: { one: I, two: I, three: I, four: I, five: I }
  }),
  C = new t.Schema({
    name: c,
    image: c,
    effect: c,
    itemPassive: c,
    cooldown: c,
    cost: c
  }),
  O = new t.Schema({ name: c, color: c, image: c, effect: c }),
  D = new t.Schema({ name: c, image: c, effect: c, cooldown: c }),
  T = new t.Schema({ name: c, image: c, effect: c, color: c }),
  A = new t.Schema({ image: c }),
  L = t.model('Items', C),
  U = t.model('Hero', y),
  x = t.model('Roons', O),
  H = t.model('ComboHero', k),
  M = t.model('LatensSkills', T),
  N = t.model('ChallengerSkills', D),
  $ = t.model('Tierlist', A),
  _ = t.model('Teamhero', q),
  P = e => {
    switch (e) {
      case 'hero':
        return U
      case 'items':
        return L
      case 'challengers':
        return N
      case 'roons':
        return x
      case 'tierlist':
        return $
      case 'herocombos':
        return H
      case 'latens':
        return M
      case 'teams':
        return _
      default:
        return !1
    }
  },
  R = async (e, s) => {
    let t = e.params.models
    var a
    return (e = await P(t))
      ? (a = r.get(t))
        ? s.status(200).json(a)
        : void (await e
            .find({})
            .then(e =>
              e && void 0 !== e.lenght
                ? (r.set(t, e, i), s.status(200).json(e))
                : s.status(200).json({ message: t + ' is empty.' })
            )
            ['catch'](e =>
              s.status(500).json({ message: 'Invalid request parameters' })
            ))
      : s.status(404).json({ message: 'Invalid request parameters' })
  },
  V = async (e, s) => {
    let t = e.params.models
    var a = await P(t)
    if (!a) return s.status(404).json({ message: 'Invalid request parameters' })
    let o = e.body.id
    if ((e = r.get(o))) return s.json(e)
    await a
      .findOne({ _id: o })
      .then(e =>
        e && void 0 !== e.lenght
          ? (r.set(o, e), s.status(200).json(e))
          : s.json({ message: t + ' not found!' })
      )
      ['catch'](e => s.status(500).json({ message: e.message }))
  },
  z = async (e, s) => {
    let t = e.params.models
    var a = await P(t)
    if (!a) return s.status(404).json({ message: 'Invalid request parameters' })
    delete (e = e.body).token,
      await a
        .create(e)
        .then(e =>
          s.status(200).json({ message: `Create ${t} success.`, data: e })
        )
        ['catch'](e => s.status(500).json({ message: e.message }))
  },
  B = async (e, s) => {
    let t = e.params.models
    var a = await P(t)
    if (!a) return s.status(404).json({ message: 'Invalid request parameters' })
    delete (e = e.body).token,
      (e = e.map(e => {
        const { token: s, ...t } = e
        return t
      })),
      await a
        .insertMany(e)
        .then(e =>
          s
            .status(200)
            .json({ message: `Create many ${t} successfully.`, data: e })
        )
        ['catch'](e => s.status(500).json({ message: e.message }))
  },
  E = async (e, s) => {
    let t = e.params.models
    var a = await P(t)
    if (!a) return s.status(404).json({ message: 'Invalid request parameters' })
    delete (e = e.body).token
    let o = { _id: e.id },
      n = Object.assign({}, e)
    if ((e = r.get(o))) return s.json(e)
    await a
      .findOneAndUpdate(o, n, { new: !0 })
      .then(e =>
        e
          ? (r.set(o, n, i),
            s.status(200).json({ message: t + ' updated success.', data: e }))
          : ((e = { message: t + ' not found for update.' }),
            r.set(o, e, i),
            s.status(200).json(e))
      )
      ['catch'](e => s.status(500).json({ message: e.message }))
  },
  K = async (e, s) => {
    let t = e.params.models
    var a = await P(t)
    if (!a) return s.status(404).json({ message: 'Invalid request parameters' })
    let o = e.body.id
    if ((e = r.get(o))) return s.json(e)
    await a
      .findOneAndDelete({ _id: o })
      .then(e =>
        e && null !== e
          ? s.status(200).json({ message: `Delete ${t} success.`, data: e })
          : ((e = { message: t + ' not found for delete.' }),
            r.set(o, e, i),
            s.status(200).json(e))
      )
      ['catch'](e => s.status(500).json({ message: e.message }))
  }
n.get('/:models', R),
  n.post('/:models/id', u, V),
  n.post('/:models/add', u, z),
  n.post('/:models/addmany', u, B),
  n.post('/:models/update', u, E),
  n.put('/:models/update', u, E),
  n.post('/:models/delete', u, K),
  n['delete']('/:models/delete', u, K),
  n.post('/clear', f),
  n.listen(l, () => {
    console.log('App listening at http://localhost:' + l)
  })
