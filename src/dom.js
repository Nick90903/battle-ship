import { pieceClicked } from ".";
import { testShip as boat } from "./shipController";

function createHull(count, index) {
  let hit = false;
  const hull = document.createElement("div");
  hull.classList.add(count);
  hull.classList.add("hull");
  hull.value = index;
  hull.addEventListener("click", () => {
    this.hit(this.value);
  });

  const isHit = () => hit;
  const countHit = () => {
    hit = true;
    console.log("hit");
  };

  return { hull, countHit, isHit };
}

// Draws play Boards

function drawBoard(size, player) {
  const container = document.createElement("div");
  container.classList.add("boardContainer");

  // Adds class specifying which board a tile is a part of
  container.classList.add(player + "container");
  let count = 0;

  //draws tiles
  for (let j = 0; j < Math.pow(size, 2); j++) {
    let temp = document.createElement("div");
    temp.classList.add("board");
    temp.classList.add(count);
    temp.classList.add(player);
    temp.addEventListener("click", function () {
      pieceClicked(this.classList);
    });
    container.appendChild(temp);
    count++;
  }
  document.querySelector(".content").appendChild(container);
  return count;
}

function placeBoat(_start, type, boat) {
  let boardArr = document.querySelectorAll(`.${type}`);
  console.log(boardArr + "boardArray");
  for (let i = 0; i < boat.hull.length; i++) {
    boardArr[_start + i] == boat.hull[i];
    console.log(boardArr);
  }
  let temp = document.querySelectorAll(`.${type}`);
  temp.forEach((Element) => {
    Element.remove();
  });
  let container = document.querySelector(`.${type}container`);
  for (let i = 0; i < boardArr.length; i++) {
    container.appendChild(boardArr[i]);
  }
}

export { createHull, drawBoard, placeBoat };
