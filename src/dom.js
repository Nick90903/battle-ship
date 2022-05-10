function createHull(count, index) {
  const hull = document.createElement("div");
  hull.classList.add(count);
  hull.value = index;
  hull.addEventListener("click", () => {
    this.hit(this.value);
  });
  return hull;
}

function drawBoard(size, player) {
  const container = document.createElement("div");
  container.classList.add("boardContainer");
  container.classList.add(player + "container");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let temp = document.createElement("div");
      temp.classList.add("board");
      temp.classList.add(player + "board");
      container.appendChild(temp);
    }
  }
  document.querySelector(".content").appendChild(container);
}

export { createHull, drawBoard };
