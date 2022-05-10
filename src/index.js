const { drawBoard } = require("./dom");
const { shipBuilder } = require("./shipController");

function test() {
  return true;
}

shipBuilder(2);
drawBoard(10, "player");
drawBoard(10, "opponent");
