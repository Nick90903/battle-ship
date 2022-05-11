function createHull(count, index) {
  let hit = false;
  const hull = document.createElement("div");
  hull.classList.add(count);
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

function drawBoard(size, player) {
  const container = document.createElement("div");
  container.classList.add("boardContainer");
  container.classList.add(player + "container");
  let count = 0;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let temp = document.createElement("div");
      temp.classList.add("board");
      temp.classList.add(player + "board");
      container.appendChild(temp);
      count++;
    }
  }
  //document.querySelector(".content").appendChild(container);
  return count;
}

export { createHull, drawBoard };
