import { placeAI } from "./ai";
import { ships } from "./shipController";
import { drawBoard, placed_Ships } from "./dom";

function noOverlap(tileID, shipLength, player) {
  let _arr = [];
  if (tileID + shipLength + 2 > 99) {
    return false;
  } else {
    for (let i = 0; i < shipLength; i++) {
      let piece = document.querySelector(`.${player}${tileID + i}`);
      piece.classList.forEach((item) => {
        _arr.push(item);
      });
    }
    console.log(_arr);
    console.log(`Contains Hull? ${_arr.includes("hull")}`);
    return !_arr.includes("hull");
  }
}

function canHit() {
  if (placed_Ships == ships.length) {
    return true;
  } else {
    return false;
  }
}

drawBoard(10, "player");
drawBoard(10, "opponent");
placeAI();

document
  .querySelector(".reload")
  .addEventListener("click", () => location.reload());

export { noOverlap, canHit };
