import { testShip } from "./shipController";

function createHull(count) {
  let hulls = [];
  for (let i = 0; i < count; i++) {
    let temp = document.createElement("div");
    temp.classList.add("board");
    temp.classList.add("hull");
    hulls.push(temp);
  }
  return hulls;
}

// Draws play Boards

function drawBoard(size, player) {
  const container = document.createElement("div");
  container.classList.add("boardContainer");
  let tempHull = createHull(testShip[0].shipSize);

  // Adds class specifying which board a tile is a part of
  container.classList.add(player + "container");
  let count = 0;

  //draws tiles
  for (let i = 0; i < Math.pow(size, 2) - 2; i++) {
    if (i == 10) {
      for (let j = 0; j < tempHull.length; j++) {
        container.appendChild(tempHull[j]);
      }
    } else {
      let temp = document.createElement("div");
      temp.classList.add("board");
      temp.classList.add("p" + count);
      temp.classList.add(player);
      container.appendChild(temp);
    }

    count++;
  }
  document.querySelector(".content").appendChild(container);
  editBoard(23, tempHull[0]);
  return count;
}

function editBoard(position, newHTML) {
  let old = document.querySelector(`.p${position}`);
  old.parentNode.replaceChild(newHTML, old);
}

export { drawBoard };
