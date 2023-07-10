let e = require('axios'),
  t = 'http://localhost:3001',
  s = { token: '12345', id: 'sadsa' }
test('should return all items', async () => {
  let s = await e.get(t + '/items')
  expect(s.status).toBe(200), expect(s.data.length).toBeGreaterThan(1)
}),
  test('should return Token is required', async () => {
    let a = { Authorization: `Bearer ${s.token}` }
    try {
      let s = await e.post(t + '/items/add', null, { headers: a })
      expect(s.data.error).toBe('Token is required'), expect(s.status).toBe(401)
    } catch (o) {}
  }),
  test('should return success', async () => {
    let a = await e.post(t + '/items/add', s),
      o = a.data
    expect(a.status).toBe(200),
      (s.id = o.data._id),
      expect(o.message).toBe('Create item success.')
  }),
  test('should return delete success', async () => {
    let a = await e.post(t + '/items/delete', s),
      o = a.data
    expect(a.status).toBe(200), expect(o.message).toBe('Delete item success.')
  })
