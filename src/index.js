import { placeAiShips } from "./ai";

const { drawBoard } = require("./dom");
const { shipBuilder, testShip } = require("./shipController");

drawBoard(10, "player");
drawBoard(10, "opponent");
placeAiShips();

export {};
