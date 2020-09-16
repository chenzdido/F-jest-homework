import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const results = getUsers();
    await expect(results).resolves.toEqual({});
  });
});
