const axios = require("axios");

const url = "http://localhost:3001"

const mock = {
  token: '12345',
  id : 'sadsa'
}

test('should return all items', async () => {
  const response = await axios.get(url+'/items');
  expect(response.status).toBe(200);
  expect(response.data.length).toBeGreaterThan(1);
});

test('should return Token is required', async () => {
  const response = await axios.post(url+'/items/add');
  expect(response.status).toBe(200);
  expect(response.data.error).toBe('Token is required');
});

test('should return success', async () => {
  const response = await axios.post(url+'/items/add', mock);
  expect(response.status).toBe(200);
  mock.id = response.data.message._id;
  expect(response.data.success).toBe('Add item success');
});

test('should return delete success', async () => {
  const response = await axios.post(url+'/items/delete', mock);
  expect(response.status).toBe(200);
  expect(response.data.message).toBe('Delete Item success');

});

