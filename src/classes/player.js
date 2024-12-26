export default class Player {
  constructor(name, position) {
    this.name = name
    this.position = position
  }

  editName(name) {
    this.name = name
  }

  getPlayer() {
    return {
      player: this.name,
      position: this.position
    }
  }
}
