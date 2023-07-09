let e = e => require(e),
  s = e('express'),
  o = s(),
  n = e('cors'),
  r = process.env.PORT || 3001
e('./aliases'),
  e('dotenv').config(),
  o.use(n()),
  o.use(s.json()),
  o.use(s.urlencoded({ extended: !1 }))
let t = e('@route/server')
t(o)
let l = e('@config/database')
l(),
  o.listen(r, e => {
    console.log('> Server is running on http://localhost:' + r)
  })
