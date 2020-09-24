import { register, validate } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const username = "fake username";
    const password = "fake password";
    // TODO feedback: 我们这个测试是要测post,而且post是有返回值的，所以，我们测试返回就行了

    // const result = validate(username, password);
    // expect(verifyPassword).toHaveBeenCalled();
    // expect(verifyUsername).toHaveBeenCalled();
    // expect(result).toBeTruthy();
    const results = register(username, password);
    await expect(results).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const username = "fake username";
    const password = "fake password";
    verifyUsername.mockImplementation(() => false);
    const result = validate(username, password);
    expect(result).toBeFalsy();
    const results = register(username, password);
    await expect(results).rejects.toThrow(
      new Error("wrong username or password")
    );
  });
});
