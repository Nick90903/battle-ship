const { drawBoard, placeBoat } = require("./dom");
const { shipBuilder, testShip } = require("./shipController");

function pieceClicked(element) {
  console.log(element);
  console.log(element[1]);
  placeBoat(element[1], element[2], testShip);
}

drawBoard(10, "player");
drawBoard(10, "opponent");

export { pieceClicked };
