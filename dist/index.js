let e = e => require(e),
  s = e('express'),
  n = s(),
  o = e('cors'),
  l = e('node-cache'),
  t = new l(),
  r = process.env.PORT || 3001
e('./aliases'),
  e('dotenv').config(),
  n.use(o()),
  n.use(s.json()),
  n.use(s.urlencoded({ extended: !1 }))
let c = e('@route/server')
c(n)
let u = e('@config/database')
u()
let a = 18e5
function i () {
  t.flushAll()
}
setInterval(() => {
  i()
}, a),
  n.listen(r, e => {
    console.log('> Server is running on http://localhost:' + r)
  })
