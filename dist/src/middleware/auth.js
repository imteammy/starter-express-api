exports.auth = async (e, r, n) => {
  let { token: o } = e.body
  return o && '' !== o && o !== undefined
    ? '12345' === o
      ? n()
      : r.json({ error: 'Invalid token!' })
    : r.status(200).json({ error: 'Token is required' })
}