const axios = require("axios");

const url = "http://localhost:3001";

const mock = {
  token: "12345",
  id: "sadsa",
};

test("should return all items", async () => {
  const response = await axios.get(url + "/items");
  expect(response.status).toBe(200);
  expect(response.data.length).toBeGreaterThan(1);
});

test("should return Token is required", async () => {
  const headers = {
    Authorization: `Bearer ${mock.token}`,
  };
  try {
    const response = await axios.post(url + "/items/add", null, { headers });
    expect(response.data.error).toBe("Token is required");
    expect(response.status).toBe(401);
  } catch (error) {}
});

test("should return success", async () => {
  const response = await axios.post(url + "/items/add", mock);
  const result = response.data;
  expect(response.status).toBe(200);
  mock.id = result.data._id;
  expect(result.message).toBe("Create item success.");
});

test("should return delete success", async () => {
  const response = await axios.post(url + "/items/delete", mock);
  const result = response.data;
  expect(response.status).toBe(200);
  expect(result.message).toBe("Delete item success.");
});
