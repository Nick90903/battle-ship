import { createHull } from "./dom";

const shipBuilder = (count) => {
  let shipSize = count;
  let hitCount = 0;
  let sunk = false;

  const hit = (index) => {
    hull[index].countHit();
    hitCount++;
    return hull[index].isHit();
  };

  const isSunk = () => {
    return hitCount == shipSize ? true : false;
  };

  const drawShip = () => {};

  return { hit, isSunk, shipSize };
};

let ships = [
  shipBuilder(3),
  shipBuilder(2),
  shipBuilder(2),
  shipBuilder(5),
  shipBuilder(6),
];
console.log(ships);

export { shipBuilder, ships };
