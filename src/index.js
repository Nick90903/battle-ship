import { placeAI } from "./ai";

const { drawBoard } = require("./dom");

function noOverlap(tileID, shipLength) {
  let _arr = [];
  if (tileID + shipLength + 2 > 99) {
    return false;
  } else {
    for (let i = 0; i < shipLength + 2; i++) {
      let piece = document.querySelector(`.o${tileID + i}`);
      piece.classList.forEach((item) => {
        _arr.push(item);
      });
    }
    console.log(_arr);
    console.log(`Contains Hull? ${_arr.includes("hull")}`);
    return !_arr.includes("hull");
  }
}

drawBoard(10, "player");
drawBoard(10, "opponent");
placeAI();

export { noOverlap };
