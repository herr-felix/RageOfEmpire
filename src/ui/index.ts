/// <reference path="../interface.d.ts" />

import View from "./view"
import Model from "./model"

export default class UI {

  private _onmessage_handler: (e: GameUIEvent, ui: UI) => void 
  private _view: View
  private _model: Model

  constructor(event_callback: (e: GameUIEvent, ui: UI) => void) {
    this._onmessage_handler = event_callback
    this._model = new Model()
    this._view = new View(this.view_event.bind(this))
    this._view.CreateContext()
    this._view.Render(this._model)
 }

  private view_event(e: GameUIEvent) {
    this._onmessage_handler(e, this)
  }
  
  private updateRessource(e: GameEventRessource) {
    switch(e.ressource) {
      case "wood":
        this._model.SetWood(e.value)
        break
      case "food":
        this._model.SetFood(e.value)
        break
      case "gold":
        this._model.SetGold(e.value)
        break
      case "stone":
        this._model.SetStone(e.value)
        break
    }
    
  }

  Publish(e: GameStateEvent) {
    switch(e.kind) {
      case "ressource":
        this.updateRessource(e)
        break
    }
    
    this._view.Render(this._model)
  }
}
