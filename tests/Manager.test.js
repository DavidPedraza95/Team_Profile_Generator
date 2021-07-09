const { test, expect } = require("@jest/globals");
const Manager = require("../library/Manager");

test("Can make manager object", () => {
  const e = new Manager();
  expect(typeof e).toBe("object");
});
test("set office number", () => {
  const officeNumber = 10;
  const e = new Manager("foo", 10, "email", officeNumber);
  expect(e.officeNumber).toBe(officeNumber);
});
test("get role", () => {
  const role = "Manager";
  const e = new Manager("foo", 10, "email", 10);
  expect(e.getRole()).toBe(role);
});
test("get office number", () => {
  const officeNumber = 10;
  const e = new Manager("foo", 10, "email", officeNumber);
  expect(e.getOfficeNumber()).toBe(officeNumber);
});
