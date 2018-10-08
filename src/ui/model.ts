
export default class Model {
  woodCount: number =  0
  foodCount: number = 0
  goldCount: number = 0
  stoneCount: number = 0

  SetWood(newCount: number) {
    if (newCount < 1) return
    this.woodCount = newCount
  }

  SetFood(newCount: number) {
    if (newCount < 1) return
    this.foodCount = newCount
  }

  SetGold(newCount: number) {
    if (newCount < 1) return
    this.goldCount = newCount
  }

  SetStone(newCount: number) {
    if (newCount < 1) return
    this.stoneCount = newCount
  }

}
