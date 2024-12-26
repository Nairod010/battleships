import "./styles.css";
import { Gameboard } from "./classes/gameboard";

const container = document.querySelector(".main-container");
const grid = document.querySelector(".grid");

const gameboard = new Gameboard

gameboard.buildBoard()

for (let i = 0; i < gameboard.grid.length; i++) {
  const cell = document.createElement("div")
  cell.className = `cell spot-${gameboard.grid[i].index}`
  cell.innerText = `${gameboard.grid[i].index}`
  grid.appendChild(cell)
}
