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

let testShip = [shipBuilder(3), shipBuilder(3)];
console.log(testShip);

export { shipBuilder, testShip };
