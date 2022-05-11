import { createHull } from "./dom";

const shipBuilder = (count) => {
  let shipSize = count;
  let hitCount = 0;
  let sunk = false;
  let hull = [];

  buildHull(count);

  function buildHull(count) {
    for (let i = 0; i < count; i++) {
      hull.push(createHull(count, i));
    }
    console.table(hull);
  }

  const hit = (index) => {
    hull[index].countHit();
    hitCount++;
    return hull[index].isHit();
  };

  const isSunk = () => {
    return hitCount == shipSize ? true : false;
  };

  const drawShip = () => {};

  return { hit, isSunk, hull };
};

let testShip = shipBuilder(2);

export { shipBuilder, testShip };
