/**
 * @jest-environment jsdom
 */

const shipController = require("./shipController");

test("Tests hull hit", () => {
  //  expect(shipController.testShip.hit(0)).toBe(true);
});

test('Test "isSunk"', () => {
  // expect(shipController.testShip.isSunk()).toBe(true);
});

const dom = require("./dom");

test("Creates game board, expects input^2", () => {
  expect(dom.drawBoard(10, "temp")).toBe(100);
});
