import UI from "../ui"
import Scene from "../scene"

export default class Game {
  private ui: UI
  private scene: Scene

  constructor() {

  }

  private on_ui_events (event: GameUIEvent, ui: UI) {
     
  }

  Start() {
    this.ui = new UI(this.on_ui_events)
    this.scene = new Scene()

    console.log('Start')
  }

}
