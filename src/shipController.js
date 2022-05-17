import { createHull } from "./dom";

const shipBuilder = (count, index, side) => {
  let shipSize = count;
  let hitCount = 0;
  let sunk = false;
  let hull = [];
  let hullDiv = [];

  for (let i = 0; i < count; i++) {
    hull.push(createHull(index, i, side));
  }

  hull.forEach((element) => {
    hullDiv.push(element.hull);
  });

  const hit = (index, element, _canHit) => {
    if (_canHit) {
      hull[index].countHit(element);
      hitCount++;
      isSunk();
      return hull[index].isHit();
    } else {
      return;
    }
  };

  const isSunk = () => {
    if (hitCount == shipSize) {
      sunk = true;
      hullDiv.forEach((element) => {
        element.classList.add("sunk");
      });
      return true;
    }
    return false;
  };

  const drawShip = () => {};

  return { hit, isSunk, shipSize, hullDiv };
};

let ships = [
  shipBuilder(2, 0, "p"),
  shipBuilder(3, 1, "p"),
  shipBuilder(3, 2, "p"),
  shipBuilder(4, 3, "p"),
  shipBuilder(5, 4, "p"),
];

let opponentShips = [
  shipBuilder(2, 0, "o"),
  shipBuilder(3, 1, "o"),
  shipBuilder(3, 2, "o"),
  shipBuilder(4, 3, "o"),
  shipBuilder(5, 4, "o"),
];
console.log(ships);

export { shipBuilder, opponentShips, ships };
