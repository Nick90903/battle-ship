import { createHull } from "./dom";

const shipBuilder = (count, index) => {
  let shipSize = count;
  let hitCount = 0;
  let sunk = false;
  let hull = [];
  let hullDiv = [];

  for (let i = 0; i < count; i++) {
    hull.push(createHull(index, i));
  }

  hull.forEach((element) => {
    hullDiv.push(element.hull);
  });

  const hit = (index, element) => {
    hull[index].countHit(element);
    hitCount++;
    return hull[index].isHit();
  };

  const isSunk = () => {
    return hitCount == shipSize ? true : false;
  };

  const drawShip = () => {};

  return { hit, isSunk, shipSize, hullDiv };
};

let ships = [
  shipBuilder(2, 0),
  shipBuilder(3, 1),
  shipBuilder(3, 2),
  shipBuilder(4, 3),
  shipBuilder(5, 4),
];
console.log(ships);

export { shipBuilder, ships };
