import UI from "../ui"
import Scene from "../scene"

export default class Game {
  private ui: UI
  private scene: Scene

  constructor() {
    this.scene = new Scene()
  }

  private on_ui_events (event: GameUIEvent, ui: UI) {
    console.log(event)
    switch(event.kind) {
      case "world_ready":
        this.scene.InitCanvas(event.canvas)
        break
    }
  }

  Start() {
    this.ui = new UI(this.on_ui_events.bind(this))

    console.log('Start')
  }

}
