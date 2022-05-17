import { editBoard } from "./dom";
import { opponentShips, ships } from "./shipController";

// Places AI Ships
let aiPlaced = 0;

function placeAI() {
  let tile = Math.floor(Math.random() * 100);
  console.log(aiPlaced);

  if (aiPlaced < opponentShips.length) {
    let currentShip = opponentShips[aiPlaced];

    if (noOverlap(tile, currentShip.shipSize)) {
      if (tile > 9) {
        let _reduced = parseInt(tile.toString().slice(1));

        if (10 - _reduced >= currentShip.shipSize) {
          let tempHull = currentShip.hullDiv;
          for (let i = 0; i < currentShip.shipSize; i++) {
            editBoard(`o${tile + i}`, tempHull[i]);
          }
          aiPlaced++;
          placeAI();
        } else {
          placeAI();
        }
      } else {
        let tempHull = currentShip.hullDiv;
        for (let i = 0; i < currentShip.shipSize; i++) {
          editBoard(`o${tile + i}`, tempHull[i]);
        }
        aiPlaced++;
        placeAI();
      }
    } else {
      placeAI();
    }
  } else {
    return;
  }
}

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

export { attackPlayerBoard, placeAI };
