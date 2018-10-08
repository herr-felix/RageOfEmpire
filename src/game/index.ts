import UI from "../ui"

export default class Game {
  private ui: UI

  private stone: number = 0
 
  constructor(ui: UI) {
    this.ui = ui
  }

  Start() {
    console.log('Start')

    setInterval(() => {
      console.log('tick')
      this.stone += 5
      this.ui.Publish({kind:"ressource", ressource:"stone", value: this.stone})
    }, 750)

  }

}
