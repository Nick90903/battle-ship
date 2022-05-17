import { canHit, noOverlap } from ".";
import { attackAI, attackPlayerBoard } from "./ai";
import { opponentShips, ships } from "./shipController";

function createHull(index, i, side) {
  let hull = document.createElement("div");
  hull.classList.add("board");
  hull.classList.add("hull");
  hull.classList.add(`ship${index}`);
  hull.value = i;
  if (side == "p") {
  } else {
    hull.addEventListener("click", function () {
      if (canHit()) {
        opponentShips[this.classList[2].slice(4)].hit(
          this.value,
          this,
          canHit()
        );
        attackPlayerBoard();
      }
    });
  }

  let hit = false;
  const countHit = (element) => {
    hit = true;
    element.classList.add("hit");
  };

  const isHit = () => {
    return hit;
  };

  return { hull, countHit, isHit };
}

// Draws ship preview.
function drawShown() {
  let content = document.querySelector(".shipContent");
  for (let i = 0; i < ships.length; i++) {
    let container = document.createElement("div");
    container.classList.add(`ship${i}`);
    container.classList.add("shipPreview");
    let temp = ships[i].hullDiv;
    console.log(temp + "temp");
    temp.forEach((element) => {
      container.appendChild(element);
    });
    content.appendChild(container);
  }
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
    if (player == "player") {
      temp.classList.add("p" + count);
      temp.addEventListener("click", function () {
        placeShip(this.classList[1]);
      });
    } else {
      temp.classList.add("o" + count);
      temp.addEventListener("click", function () {
        if (canHit()) {
          attackAI(this.classList[1]);
        }
      });
    }
    temp.classList.add(player);

    container.appendChild(temp);

    count++;
  }
  document.querySelector(".content").appendChild(container);
  return count;
}

function editBoard(position, newHTML) {
  console.log(`Placing boat ${newHTML} at ${position}`);
  let old = document.querySelector(`.${position}`);
  let temp = newHTML;
  temp.classList.add(old.classList[1]);
  old.parentNode.replaceChild(temp, old);
}

let placed_Ships = 0;
function placeShip(id) {
  if (placed_Ships < ships.length) {
    let currentShip = ships[placed_Ships];

    let tempValue = parseInt(id.slice(1, 3));

    if (noOverlap(tempValue, currentShip.shipSize, "p")) {
      if (tempValue > 9) {
        let _reduced = parseInt(id.slice(2));

        if (10 - _reduced >= currentShip.shipSize) {
          let tempHull = currentShip.hullDiv;
          for (let i = 0; i < currentShip.shipSize; i++) {
            editBoard(`p${tempValue + i}`, tempHull[i]);
          }
        } else {
          return;
        }
      } else if (10 - id.slice(1) >= currentShip.shipSize) {
        console.log(10 - currentShip.shipSize + "meme");
        let tempHull = currentShip.hullDiv;
        for (let i = 0; i < currentShip.shipSize; i++) {
          editBoard(`p${tempValue + i}`, tempHull[i]);
        }
      } else {
        return;
      }
      const shipContainer = document.querySelector(`.ship${placed_Ships}`);
      shipContainer.classList.add("used");
      placed_Ships++;
    } else {
      return;
    }
  }
}

drawShown();

export { drawBoard, createHull, editBoard, placed_Ships };
