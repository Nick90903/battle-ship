/**
 * @jest-environment jsdom
 */

const index = require("./index");

index.test("test", () => {
  expect(index.test()).toBe(true);
});

const shipController = require("./shipController");

test("Creates a ship with length 2", () => {
  expect(shipController.shipBuilder(2)).toBe(2);
});
