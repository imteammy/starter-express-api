let e = e => require(e),
  s = e('express'),
  o = s(),
  r = e('cors'),
  n = process.env.PORT || 3001
e('./aliases'),
  e('dotenv').config(),
  o.use(r()),
  o.use(s.json()),
  o.use(s.urlencoded({ extended: !1 })),
  o.use((e, s, o) => {
    s.status(404).json({ error: 'Error 404 page not found' })
  })
let t = e('@route/server')
t(o)
let l = e('@config/database')
l(),
  o.listen(n, e => {
    console.log('> Server is running on http://localhost:' + n)
  })
