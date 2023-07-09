let {
    hero: e,
    tierlist: t,
    items: o,
    herocombo: l,
    roons: d,
    challengersskill: s,
    latensskill: p
  } = require('@controllers'),
  { auth: a } = require('@middleware/auth')
module.exports = r => {
  let g = '/tierlist/'
  r.get(g, t.getAll),
    r.post(g + 'add', a, t.create),
    r.post(g + 'update', a, t.update)
  let i = '/hero/'
  r.get(i, e.getAllHeroes),
    r.post(i + 'id', a, e.findhero),
    r.post(i + 'add', a, e.create),
    r.post(i + 'addmany', e.createMany),
    r.post(i + 'update', a, e.update),
    r.post(i + 'delete', a, e.remove)
  let u = '/items/'
  r.get(u, o.getAllItems),
    r.post(u + 'id', a, o.getByID),
    r.post(u + 'add', a, o.create),
    r.post(u + 'update', a, o.update),
    r.post(u + 'delete', a, o.remove)
  let m = '/herocombo/'
  r.get(m, l.getAll),
    r.post(m + 'id', a, l.getByID),
    r.post(m + 'add', a, l.create),
    r.post(m + 'update', a, l.update),
    r.post(m + 'delete', a, l.remove)
  let c = '/roons/'
  r.get(c, d.getAll),
    r.post(c + 'id', a, d.getID),
    r.post(c + 'add', a, d.create),
    r.post(c + 'update', a, d.update),
    r.post(c + 'delete', a, d.remove)
  let n = '/challengersskill/'
  r.get(n, s.getAll),
    r.post(n + 'id', a, s.getID),
    r.post(n + 'add', a, s.create),
    r.post(n + 'update', a, s.update),
    r.post(n + 'delete', a, s.remove)
  let h = '/latensskill/'
  r.get(h, p.getAll),
    r.post(h + 'id', a, p.getID),
    r.post(h + 'add', a, p.create),
    r.post(h + 'update', a, p.update),
    r.post(h + 'delete', a, p.remove)
}
