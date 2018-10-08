import UI from "./ui"
import Game from "./game"


function on_event (e: GameUIEvent, ui: UI) {
}

const ui = new UI(on_event)

const game = new Game(ui)

game.Start()
