const axios = require("axios");

const url = "http://localhost:3001/hero";

const mock = {
  token: '12345',
  id : 'id'
};

// test('should return all hero', async () => {
//   await axios.get(url).then((response) => {
//       expect(response.status).toBe(200);
//       expect(response.data.length).toBeGreaterThan(1);
//   }).catch((err) => {
//     console.log(err.message);
//   });
// });

test('should return Token is required', async () => {
  const headers = {
    Authorization: `Bearer ${mock.token}`
  };
  try {
    const response = await axios.post(url + '/add', null, { headers });
    expect(response.data.error).toBe('Token is required');
    expect(response.status).toBe(401);
  } catch (error) {
  }
});

test('should return create hero success', async () => {
  const response = await axios.post(url+'/add', mock);
  const result = response.data;
  expect(response.status).toBe(200);
  mock.id = result.data._id;
  expect(result.message).toBe('Create hero success.');
});

test('should return delete success', async () => {
  const response = await axios.post(url+'/delete', mock);
  const result = response.data;
  expect(response.status).toBe(200);
  expect(result.message).toBe('Delete hero success.');
});

