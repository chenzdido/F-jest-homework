export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  reject: jest.fn(() =>
    Promise.reject(new Error("wrong username or password"))
  ),
};
