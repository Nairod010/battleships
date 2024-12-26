export default class Game {
  constructor() {
    this.phase = "setup"
  }

  switchToBattle() {
    this.phase = "battle"
  }


  placeShips(ship, gameboard) {
    for (let i = 0; i < ship.spot.length; i++) {
      for (let j = 0; j < gameboard.grid.length; j++) {
        if (ship.spot[i] === gameboard.grid[j].index) {
          gameboard.grid[j].putShip()
        }
      }
    }
  }

}
