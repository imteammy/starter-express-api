exports.auth = async (r, e, o) => {
  let { token: t } = r.body
  return t && '' !== t
    ? ('12345' === t && o(),
      '12345' != t ? e.status(401).json({ error: 'Invalid token!' }) : void 0)
    : e.status(401).json({ error: 'Token is required' })
}
