import { ships } from "./shipController";

function createHull(count) {
  let hulls = [];
  for (let i = 0; i < count; i++) {
    let temp = document.createElement("div");
    temp.classList.add("board");
    temp.classList.add("hull");
    temp.value = i;
    hulls.push(temp);
  }
  return hulls;
}

// Draws play Boards

function drawBoard(size, player) {
  const container = document.createElement("div");
  container.classList.add("boardContainer");

  // Adds class specifying which board a tile is a part of
  container.classList.add(player + "container");
  let count = 0;

  //draws tiles
  for (let i = 0; i < Math.pow(size, 2); i++) {
    let temp = document.createElement("div");
    temp.classList.add("board");
    temp.classList.add("p" + count);
    temp.classList.add(player);
    temp.addEventListener("click", function () {
      placeShip(this.classList[1]);
    });
    container.appendChild(temp);

    count++;
  }
  document.querySelector(".content").appendChild(container);
  return count;
}

function editBoard(position, newHTML) {
  let old = document.querySelector(`.${position}`);
  old.parentNode.replaceChild(newHTML, old);
}

let placed_Ships = 0;
function placeShip(id) {
  if (placed_Ships < ships.length) {
    let currentShip = ships[placed_Ships];

    let tempValue = parseInt(id.slice(1, 3));

    if (tempValue > 9) {
      let _reduced = parseInt(id.slice(2));

      if (10 - _reduced >= currentShip.shipSize) {
        let tempHull = createHull(currentShip.shipSize);
        for (let i = 0; i < currentShip.shipSize; i++) {
          editBoard(`p${tempValue + i}`, tempHull[i]);
        }
      } else {
        return;
      }
    } else {
      let tempHull = createHull(currentShip.shipSize);
      for (let i = 0; i < currentShip.shipSize; i++) {
        editBoard(`p${tempValue + i}`, tempHull[i]);
      }
    }
    placed_Ships++;
  }
}

export { drawBoard };
