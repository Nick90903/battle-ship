import { ships } from "./shipController";

function placeAiShips() {}

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

export { attackPlayerBoard };
