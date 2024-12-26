import { Gameboard, Cell } from "../classes/gameboard";

const cell = new Cell("A1")

test("cell indexing", () => {
  expect(cell.index).toBe("A1")
});

test("set cell to be occupied by ship", () => {
  cell.putShip()
  expect(cell.hasShip).toBe(true)
});

test("set cell to be marked", () => {
  cell.marking()
  expect(cell.isMarked).toBe(true)
})


