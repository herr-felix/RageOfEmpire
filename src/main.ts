import UI from "./ui"
var stone = 0;


function on_event (e: GameUIEvent, ui: UI) {
  console.log(e)
  stone ++
  ui.Publish({kind:"ressource", ressource:"stone", value: stone})
}

const ui = new UI(on_event)

window.ui = ui
