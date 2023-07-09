let {
    hero: e,
    tierlist: t,
    items: l,
    herocombo: d,
    roons: o,
    challengersskill: s,
    latensskill: p
  } = require('@controllers'),
  { auth: a } = require('@middleware/auth')
module.exports = r => {
  let g = '/tierlist/'
  r.get(g, t.getAll),
    r.post(g + '/add', a, t.create),
    r.post(g + '/update', a, t.update)
  let i = '/hero/'
  r.get(i, e.getAllHeroes),
    r.post(i + 'id', a, e.findhero),
    r.post(i + 'add', a, e.create),
    r.post(i + 'addmany', e.createMany),
    r.post(i + 'update', a, e.update),
    r.post(i + 'delete', a, e['delete'])
  let u = '/items/'
  r.get(u, l.getAllItems),
    r.post(u + '/id', a, l.getByID),
    r.post(u + '/add', a, l.create),
    r.post(u + '/update', a, l.update),
    r.post(u + '/delete', a, l['delete'])
  let c = '/herocombo'
  r.get(c, d.getAll),
    r.post(c + '/id', a, d.getByID),
    r.post(c + '/add', a, d.create),
    r.post(c + '/update', a, d.update),
    r.post(c + '/delete', a, d['delete'])
  let n = '/roons'
  r.get(n, o.getAll),
    r.post(n + '/id', a, o.getID),
    r.post(n + '/add', a, o.create),
    r.post(n + '/update', a, o.update),
    r.post(n + '/delete', a, o['delete'])
  let h = '/challengersskill/'
  r.get(h, s.getAll),
    r.post(h + '/id', a, s.getID),
    r.post(h + '/add', a, s.create),
    r.post(h + '/update', a, s.update),
    r.post(h + '/delete', a, s['delete'])
  let m = '/latensskill/'
  r.get(m, p.getAll),
    r.post(m + '/id', a, p.getID),
    r.post(m + '/add', a, p.create),
    r.post(m + '/update', a, p.update),
    r.post(m + '/delete', a, p['delete'])
}