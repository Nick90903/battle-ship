import { createHull } from "./dom";

const shipBuilder = (count) => {
  let shipSize = count;
  let sunk = false;
  let hull = [];

  buildHull(count);

  function buildHull(count) {
    for (let i = 0; i < count; i++) {
      hull.push(createHull(count, i));
    }
    console.table(hull);

    return hull.length;
  }

  const hit = (index) => {};

  const drawShip = () => {};

  return hull.length;
};

export { shipBuilder };
