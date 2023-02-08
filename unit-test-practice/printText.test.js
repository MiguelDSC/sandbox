const printText = require("./printText");

describe("String input Check", () => {
  test("input should contain palindrome", () => {
    expect(typeof printText()).toBe("string");
    expect(printText()).toContain("palindrome");
  });
});
