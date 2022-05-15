import { editBoard } from "./dom";
import { opponentShips, ships } from "./shipController";

// Places AI Ships
let aiPlaced = 0;

function placeAiShips() {
  // Choses a random position to place the ship
  let tileID = Math.floor(Math.random() * 100);
  console.log("tile ID: " + tileID);
  console.log("Ship ID: " + aiPlaced);
  console.log("ship Lenght: ", opponentShips[aiPlaced].shipSize);

  if (tileID > 9) {
    console.log("Tile id > 9 passed");
    // If the value is > 9 simplify the value to ones place
    let _reduced = tileID.toString().slice(1);
    if (10 - _reduced >= opponentShips[aiPlaced].shipSize) {
      console.log("length check passed");
      // if the picked x Value + ship length is < 9
      console.log(noOverlap(tileID, opponentShips[aiPlaced].shipSize));
      if (noOverlap(tileID, opponentShips[aiPlaced].shipSize)) {
        console.log("overlap test passed");
        console.log("Boat Placed");
        for (let i = 0; i < opponentShips[aiPlaced].shipSize; i++) {
          editBoard(`o${tileID + i}`, opponentShips[aiPlaced].hullDiv[i]);
        }
        aiPlaced++;
      } else {
        console.log("failed overlap test");
        placeAiShips();
      }
    } else {
      console.log("failed length test");
      placeAiShips();
    }
  } else {
    console.log("tile ID < 9");
    if (10 - tileID >= opponentShips[aiPlaced].shipSize) {
      console.log("<9 length passed");
      console.log("Boat Placed");
      for (let i = 0; i < opponentShips[aiPlaced].shipSize; i++) {
        editBoard(`o${tileID + i}`, opponentShips[aiPlaced].hullDiv[i]);
      }
      aiPlaced++;
    } else {
      console.log("< 9 length failed");
    }
  }
  if (aiPlaced < opponentShips.length) {
    placeAiShips();
  }
}

function noOverlap(tileID, shipLength) {
  let _arr = [];
  for (let i = 0; i < shipLength; i++) {
    let piece = document.querySelector(`.o${tileID + i}`);
    _arr.push(piece.classList);
  }

  return !_arr.includes("hull");
}

let hitSpots = [];
function attackPlayerBoard() {
  let randomNumber = Math.floor(Math.random() * 100);
  if (!hitSpots.includes(randomNumber)) {
    const hitBlock = document.querySelector(`.p${randomNumber}`);
    if (hitBlock.classList.contains("hull")) {
      ships[hitBlock.classList[2].slice(4)].hit(hitBlock.value, hitBlock);
      console.log("hit Ship");
    } else {
      console.log("missed Ship");
      hitBlock.classList.add("attacked");
    }
    hitSpots.push(randomNumber);
  } else {
    if (hitSpots.length < 100) {
      attackPlayerBoard();
    }
  }
}

export { attackPlayerBoard, placeAiShips };
